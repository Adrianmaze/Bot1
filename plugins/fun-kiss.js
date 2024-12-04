import fs from 'fs';
import path from 'path';
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js';

// Lista de videos (asegúrate de que estén en la ruta correcta)
    let pp = 'https://telegra.ph/file/5fa4fd7f4306aa7b2e17a.mp4' 
    let pp2 = 'https://telegra.ph/file/b299115a77fadb7594ca0.mp4'
    let pp3 = 'https://telegra.ph/file/9938a8c2e54317d6b8250.mp4' 
    let pp4 = 'https://telegra.ph/file/e6c7b3f7d482ae42db9a7.mp4' 
    let pp5 = 'https://telegra.ph/file/a61b52737df7459580129.mp4' 
    let pp6 = 'https://telegra.ph/file/f34e1d5c8f17bd2739a51.mp4' 
    let pp7 = 'https://telegra.ph/file/c345ed1ca18a53655f857.mp4' 
    let pp8 = 'https://telegra.ph/file/4eec929f54bc4d83293a3.mp4' 
    let pp9 = 'https://telegra.ph/file/856e38b2303046990531c.mp4' 
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: },{ quoted: estilo })

// Escuchar mensajes
let handler = async (m, { conn, usedPrefix }) => {

        // Enviar un mensaje con el video aleatorio
        const chat = await message.getChat();
        chat.sendMessage('¡Te mando un beso! 💋', { media: fs.createReadStream(randomVideo) });
    }
handler.help = ['besar @tag'];
handler.tags = ['fun'];
handler.command = ['kiss', 'beso', 'besar'];
