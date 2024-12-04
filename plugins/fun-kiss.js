import fs from 'fs';
import path from 'path';
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js';

// Lista de videos (asegúrate de que estén en la ruta correcta)
const videoList = [
    'https://telegra.ph/file/ba841c699e9e039deadb3.mp4',  // Ajusta las rutas de tus videos
    'https://telegra.ph/file/8c0f70ed2bfd95a125993.mp4',
    'https://telegra.ph/file/0fc525a0d735f917fd25b.mp4'
];

// Escuchar mensajes
let handler = async (m, { conn, usedPrefix }) => {
        // Escoger un video aleatorio de la lista
        const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];

        // Enviar un mensaje con el video aleatorio
        const chat = await message.getChat();
        chat.sendMessage('¡Te mando un beso! 💋', { media: fs.createReadStream(randomVideo) });
    }
}); 
handler.help = ['besar @tag'];
handler.tags = ['fun'];
handler.command = ['kiss', 'beso', 'besar'];
