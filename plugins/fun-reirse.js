import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    let who;

    // Determinamos a quién mencionas o citas
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        who = m.mentionedJid[0]; // Si hay mención
    } else if (m.quoted) {
        who = m.quoted.sender; // Si se cita un mensaje
    } else {
        who = m.sender; // Por defecto, el emisor del mensaje
    }

    if (!who) throw '❕ *Etiqueta o menciona a alguien*';

    let name = conn.getName(who) || 'alguien';
    let name2 = conn.getName(m.sender) || 'tú';
    m.react('😹'); // Reacción actualizada

    // Mensaje que se enviará
    let str = `\`${name2}\` se está riendo de \`${name}\` 😂`;

    // Lista de videos
    let videos = [
        'https://telegra.ph/file/5fa4fd7f4306aa7b2e17a.mp4',
        'https://telegra.ph/file/b299115a77fadb7594ca0.mp4',
        'https://telegra.ph/file/9938a8c2e54317d6b8250.mp4',
        'https://telegra.ph/file/e6c7b3f7d482ae42db9a7.mp4',
        'https://telegra.ph/file/a61b52737df7459580129.mp4',
        'https://telegra.ph/file/f34e1d5c8f17bd2739a51.mp4',
        'https://telegra.ph/file/c345ed1ca18a53655f857.mp4',
        'https://telegra.ph/file/4eec929f54bc4d83293a3.mp4',
        'https://telegra.ph/file/856e38b2303046990531c.mp4'
    ];

    const video = videos[Math.floor(Math.random() * videos.length)]; // Selección aleatoria de video

    // Envío del video con mención
    await conn.sendMessage(m.chat, { 
        video: { url: video }, 
        gifPlayback: true, 
        caption: str, 
        mentions: [who] 
    }, { quoted: m });
};

handler.help = ['reirse @tag'];
handler.tags = ['fun'];
handler.command = ['reírse', 'reirse'];
handler.group = true;

export default handler;
