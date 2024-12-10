const axios = require('axios');

const handler = async (conn, { message, args }) => {
    const query = args.join(' '); // Unir los argumentos como una consulta

    if (!query) {
        return conn.sendMessage(message.key.remoteJid, {
            text: '🤖 *Sisked Bot* necesita una consulta para funcionar.\n\n💡 *Ejemplo*: `!sisked ¿Qué es la inteligencia artificial?`'
        });
    }

    try {
        // Realizar la llamada a la API
        const response = await axios.get('https://eliasar-yt-api.vercel.app/api/chatgpt', {
            params: {
                text: query,
                prompt: 'Te llamas Sisked Bot, un bot creado por Sisked. Eres amigable, útil y divertido. Responde de manera dinámica usando emojis cuando sea posible. ¡Estás aquí para ayudar a los usuarios en todo lo que necesiten! 😄✨',
            },
        });

        if (response.data && response.data.status) {
            const botResponse = response.data.response;

            // Responder al usuario con el resultado de la API
            await conn.sendMessage(message.key.remoteJid, {
                text: `💬 *Sisked Bot dice:*\n\n${botResponse}`,
                quoted: message // Responde al mensaje original
            });
        } else {
            // Si no se recibe una respuesta válida
            await conn.sendMessage(message.key.remoteJid, {
                text: '⚠️ Lo siento, no pude obtener una respuesta. Inténtalo de nuevo más tarde. 🤔'
            });
        }

    } catch (error) {
        console.error('Error en Sisked Bot:', error.message);

        // Respuesta en caso de error
        await conn.sendMessage(message.key.remoteJid, {
            text: '❌ Hubo un error al procesar tu solicitud. Intenta de nuevo más tarde. 😢'
        });
    }
};

// Configuración del comando
handler.command = ['sisked', 'siskedbot']; // Define los comandos que activan el bot
handler.help = ['sisked']; // Ayuda para el comando
handler.tags = ['tools']; // Categorías del comando

module.exports = handler;
