const axios = require('axios');

module.exports = {
    command: 'ia', // El comando que activará el plugin
    description: 'Interfaz con The SukiBOT AI 🤖✨ para obtener respuestas amigables y dinámicas.',
    category: 'AI', // Categoría del plugin
    usage: 'ia <consulta>', // Uso del comando
    async handler(conn, { message, args }) {
        const query = args.join(' '); // Combina argumentos en una consulta

        if (!query) {
            // Si el usuario no ingresa una consulta
            return conn.sendMessage(message.key.remoteJid, {
                text: '🤖 Por favor, ingresa una consulta para Sisked Bot ✨.\n\n💡 *Ejemplo*: "¿Cómo está el clima hoy?"'
            });
        }

        try {
            // Petición a la API externa
            const response = await axios.get(`https://eliasar-yt-api.vercel.app/api/chatgpt`, {
                params: {
                    text: query,
                    prompt: 'actuarás como Sisked Bot, un bot de WhatsApp creado por Sisked. Eres amigable, divertido y útil. Usa emojis para hacer tus respuestas más dinámicas*_.',
                },
            });

            if (response.data && response.data.status) {
                const botResponse = response.data.response;

                // Envía la respuesta de la API al chat
                await conn.sendMessage(message.key.remoteJid, {
                    text: botResponse,
                    quoted: message, // Responde al mensaje original del usuario
                });

            } else {
                // Si la API no devuelve una respuesta válida
                await conn.sendMessage(message.key.remoteJid, {
                    text: '⚠️ *Oops...* No se pudo obtener una respuesta. 🤔 Por favor, intenta de nuevo más tarde.'
                });
            }

        } catch (err) {
            console.error('Error en el comando IA:', err.message);

            // Envía un mensaje de error
            await conn.sendMessage(message.key.remoteJid, {
                text: '❌ *Hubo un error al procesar tu solicitud.* 😢 Intenta nuevamente más tarde.'
            });
        }
    }
};
