const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'ds', // Nombre del comando principal
    alias: ['deletesessions'], // Alias opcionales
    description: 'Elimina archivos de la carpeta "sessions" excepto el importante "creds.json".',
    category: 'propietario', // Categoría del comando
    command: ['ds'], // Define el comando que activará esta función
    owner: true, // Restringe el uso solo al propietario del bot
    async execute(m, { isOwner }) {
        // Verificar si el usuario tiene permisos de propietario
        if (!isOwner) return m.reply('🚫 Solo el propietario puede usar este comando.');

        const pathToDirectory = './sessions';

        // Leer la carpeta "sessions"
        fs.readdir(pathToDirectory, (err, files) => {
            if (err) return m.reply(`❌ Error leyendo la carpeta: ${err.message}`);

            files.forEach(file => {
                // Evitar eliminar el archivo "creds.json"
                if (file !== 'creds.json') {
                    const filePath = path.join(pathToDirectory, file);
                    fs.unlink(filePath, err => {
                        if (err) {
                            console.error(`Error eliminando archivo ${file}: ${err.message}`);
                        } else {
                            console.log(`Archivo ${file} eliminado correctamente.`);
                        }
                    });
                }
            });

            // Confirmación de la eliminación
            m.reply('✅ Archivos eliminados, excepto el importante `creds.json`. 🗑️');

            // Mensaje adicional con retraso
            setTimeout(() => {
                m.reply('👋 ¿Hola? ¿Puedes verme?');
            }, 1000);
        });
    }
};
