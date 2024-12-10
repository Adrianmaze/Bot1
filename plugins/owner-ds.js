import { readdirSync, unlinkSync, existsSync, promises as fs } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  // Verifica si el comando se está ejecutando desde el bot principal
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: '❌ Usa este comando directamente en el número principal del bot.' },
      { quoted: m }
    );
  }

  const sessionPath = './sessions/'; // Ruta de la carpeta de sesiones

  try {
    // Verificar si la carpeta existe
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: '❌ La carpeta "sessions" no existe o está vacía.' },
        { quoted: m }
      );
    }

    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;

    // Eliminar archivos excepto 'creds.json'
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }

    // Mensaje si no hay archivos para eliminar
    if (filesDeleted === 0) {
      return await conn.sendMessage(
        m.chat,
        { text: '✅ No se encontró ningún archivo innecesario para eliminar en la carpeta "sessions".' },
        { quoted: m }
      );
    }

    // Mensaje confirmando la eliminación de archivos
    await conn.sendMessage(
      m.chat,
      { text: `🗑️ Se eliminaron ${filesDeleted} archivos de la carpeta "sessions" (excepto *creds.json*).` },
      { quoted: m }
    );

  } catch (err) {
    console.error('Error al procesar la carpeta de sesiones:', err);
    await conn.sendMessage(
      m.chat,
      { text: '❌ Ocurrió un error al intentar eliminar archivos de la carpeta "sessions".' },
      { quoted: m }
    );
  }

  // Mensaje final para verificar el funcionamiento
  await conn.sendMessage(
    m.chat,
    {
      text: `✅ El proceso ha finalizado correctamente.\nSi el bot no responde a tus comandos, por favor intenta hacer un pequeño *spam*.\n\n*Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`,
    },
    { quoted: m }
  );
};

handler.help = ['ds'];
handler.tags = ['owner'];
handler.command = /^(delsession|ds)$/i;
handler.rowner = true;

export default handler;
