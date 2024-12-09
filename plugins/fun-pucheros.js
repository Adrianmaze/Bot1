import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    let who;

    // Determinamos quién fue mencionado o citado
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        who = m.mentionedJid[0]; // Si hay mención
    } else if (m.quoted) {
        who = m.quoted.sender; // Si hay un mensaje citado
    } else {
        who = m.sender; // Si no hay mención ni cita
    }

    if (!who) throw '❕ *Etiqueta o menciona a alguien*';

    let name = conn.getName(who) || 'alguien';
    let name2 = conn.getName(m.sender) || 'tú';
    m.react('😶'); // Reacción actualizada

    // Mensaje construido
    let str = `\`${name2}\` le está haciendo pucheros a \`${name}\` 🥺`;

    // Lista de videos
    let videos = [
        'https://telegra.ph/file/e2a25adcb74689a58bcc6.mp4',
        'https://telegra.ph/file/5239f6f8837383fa5bf2d.mp4',
        'https://telegra.ph/file/63564769ec715d3b6379d.mp4',
        'https://telegra.ph/file/06f7458e3a6a19deb5173.mp4',
        'https://telegra.ph/file/cdd5e7db98e1d3a46231a.mp4',
        'https://telegra.ph/file/070e2c38c9569a764cc10.mp4',
        'https://telegra.ph/file/c1834a34cd0edfd2bdbe1.mp4',
        'https://telegra.ph/file/4ceafdd813e727548cb2f.mp4',
        'https://telegra.ph/file/7aa2790c3eba5b27416ce.mp4',
        'https://telegra.ph/file/ec2d25e70b165a19e7ef7.mp4'
    ];

    const video = videos[Math.floor(Math.random() * videos.length)]; // Selección aleatoria del video

    // Envío del video con mención
    await conn.sendMessage(m.chat, { 
        video: { url: video }, 
        gifPlayback: true, 
        caption: str, 
        mentions: [who] 
    }, { quoted: m });
};

handler.help = ['pucheros @tag'];
handler.tags = ['fun'];
handler.command = /^(pout|pucheros)$/i;
handler.group = true;

export default handler;
