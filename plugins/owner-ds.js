case 'ds': {
    if (!isOwner) return m.reply('🚫 Solo el propietario puede usar este comando.');
    const pathToDirectory = './sessions';
    const fs = require('fs');
    const path = require('path');

    fs.readdir(pathToDirectory, (err, files) => {
        if (err) return m.reply(`❌ Error leyendo la carpeta: ${err.message}`);
        
        files.forEach(file => {
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
        
        m.reply('✅ Archivos eliminados, excepto el importante `creds.json`. 🗑️');
        setTimeout(() => {
            m.reply('👋 ¿Hola? ¿Puedes verme?');
        }, 1000);
    });
    break;
}
