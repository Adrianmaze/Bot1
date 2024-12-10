import axios from 'axios';

const handler = async (conn, { message, args }) => {
    const query = args.join(' ');

    if (!query) {
        return conn.sendMessage(message.key.remoteJid, {
            text: '🤖 *Sisked Bot* necesita una consulta para funcionar.\n\n💡 *Ejemplo*: `!sisked ¿Qué es la inteligencia artificial?`'
        });
    }

    try {
        // Llamada a la API con axios
        const response = await axios.get('https://eliasar-yt-api.vercel.app/api/chatgpt', {
            params: {
                text: query,
                prompt: 'Te llamas Sisked Bot, un bot creado por Sisked. Eres amigable, útil y divertido. Responde de manera dinámica usando emojis cuando sea posible. ¡Estás aquí para ayudar a los usuarios en todo lo que necesiten! 😄✨',
            },
        });

        if (response.data && response.data.status) {
            const botResponse = response.data.response;

            await conn.sendMessage(message.key.remoteJid, {
                text: `💬 *Sisked Bot dice:*\n\n${botResponse}`,
                quoted: message
            });
        } else {
            await conn.sendMessage(message.key.remoteJid, {
                text: '⚠️ Lo siento, no pude obtener una respuesta. Inténtalo de nuevo más tarde. 🤔'
            });
        }

    } catch (error) {
        console.error('Error en Sisked Bot:', error.message);

        await conn.sendMessage(message.key.remoteJid, {
            text: '❌ Hubo un error al procesar tu solicitud. Intenta de nuevo más tarde. 😢'
        });
    }
};

handler.command = ['sisked', 'siskedbot'];
handler.help = ['sisked'];
handler.tags = ['ai', 'chatbot'];

export default handler;
