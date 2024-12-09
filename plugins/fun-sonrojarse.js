import fs from 'fs';
import path from 'path';
import uploadImage from '../lib/uploadImage.js';
import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    
    // Determina a quién se le aplica el comando (en un grupo o en privado)
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else {
        who = m.chat;
    }

    if (!who) throw 'Etiqueta o menciona a alguien';  // Si no se menciona a nadie, muestra un error

    let user = global.db.data.users[who];  // Obtiene los datos del usuario mencionado
    let name = conn.getName(who);  // Nombre del usuario mencionado
    let name2 = conn.getName(m.sender);  // Nombre del que envía el mensaje

    // Reacción del bot
    m.react('🤭');

    let str = `${name2} se sonrojo por ${name}`.trim();  // Mensaje a enviar

    if (m.isGroup) {
        // URLs de videos que se enviarán al azar
        let pp = 'https://telegra.ph/file/a4f925aac453cad828ef2.mp4';  // Video 1
        let pp2 = 'https://telegra.ph/file/f19318f1e8dad54303055.mp4'; // Video 2
        let pp3 = 'https://telegra.ph/file/15605caa86eee4f924c87.mp4'; // Video 3
        let pp4 = 'https://telegra.ph/file/d301ffcc158502e39afa7.mp4'; // Video 4
        let pp5 = 'https://telegra.ph/file/c6105160ddd3ca84f887a.mp4'; // Video 5
        let pp6 = 'https://telegra.ph/file/abd44f64e45c3f30442bd.mp4'; // Video 6
        let pp7 = 'https://telegra.ph/file/9611e5c1d616209bc0315.mp4'; // Video 7

        // Arreglo con los videos
        const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7];

        // Selección aleatoria de un video
        const video = videos[Math.floor(Math.random() * videos.length)];

        // Enviar el mensaje con el video y la reacción
        conn.sendMessage(m.chat, {
            video: { url: video },
            gifPlayback: true,
            caption: str,
            mentions: [m.sender]  // Mencionar al usuario que envió el mensaje
        });
    }
};

handler.help = ['sonrojarse @tag'];
handler.tags = ['fun'];
handler.command = ['blush', 'sonrojarse'];  // Comandos que activan el bot
handler.group = true;  // Solo funciona en grupos

export default handler;
