import axios from 'axios';

const handler = async (conn, m) => {
    // Verificar si el mensaje existe
    const message = m?.messages?.[0];
    if (!message) {
        console.error('No se encontró el mensaje en el evento.');
        return;
    }

    const remoteJid = message.key.remoteJid; // ID del chat
    const args = message.message?.conversation
        ? message.message.conversation.trim().split(' ').slice(1)
        : [];

    const query = args.join(' ');

    if (!query) {
        return conn.sendMessage(remoteJid, {
            text: '🤖 *Sisked Bot* necesita una consulta para funcionar.\n\n💡 *Ejemplo*: `!sisked ¿Qué es la inteligencia artificial?`',
        });
    }

    try {
        // Llamada a la API
        const response = await axios.get('https://eliasar-yt-api.vercel.app/api/chatgpt', {
            params: {
                text: query,
                prompt: 'Te llamas Sisked Bot, un bot creado por Sisked. Eres amigable, útil y divertido. Responde de manera dinámica usando emojis cuando sea posible. ¡Estás aquí para ayudar a los usuarios en todo lo que necesiten! 😄✨',
            },
        });

        const botResponse = response.data.response;

        // Enviar respuesta
        await conn.sendMessage(remoteJid, {
            text: `💬 *Sisked Bot dice:*\n\n${botResponse}`,
            quoted: message, // Cita el mensaje original del usuario
        });
    } catch (error) {
        console.error('Error al llamar a la API:', error);

        await conn.sendMessage(remoteJid, {
            text: '❌ Hubo un error al procesar tu solicitud. Intenta de nuevo más tarde. 😢',
        });
    }
};

// Configuración del comando
handler.command = ['sisked', 'siskedbot'];
handler.help = ['sisked'];
handler.tags = ['tools'];

export default handler;
