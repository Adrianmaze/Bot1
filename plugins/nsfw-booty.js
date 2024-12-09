import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    // Verificar si el modo NSFW está habilitado
    if (!global.db.data.chats[m.chat].nsfw) return m.reply(`El grupo no admite contenido *NSFW.*`);

    // Reacción actualizada
    m.react('🔥');

    // Lista de imágenes actualizadas
    let imagenes = [
"jjaa"  ];

    const imagen = imagenes[Math.floor(Math.random() * imagenes.length)]; // Selección aleatoria de imagen

    // Envío de la imagen sin mensaje ni mención
    await conn.sendMessage(m.chat, { 
        image: { url: imagen }
    }, { quoted: m });
};

handler.help = ['furro'];
handler.tags = ['nsfw'];
handler.command = ['furro'];
handler.group = true;

export default handler;
