 https://github.com/MoonContentCreator/BixbyBot-Md **/

import fetch from 'node-fetch';

// Función principal del handler
const handler = async (_m, { conn, command, text, isAdmin }) => {
    // Verifica si el comando es "mute"
    if (command === 'mute') {
        if (!isAdmin) {
            throw '💌 *Solo un administrador puede ejecutar este comando*';
        }

        const ownerId = global.owner[0][0] + '@s.whatsapp.net';

        // Verifica si se está intentando mutar al propietario
        if (_m.mentionedJid[0] === ownerId) {
            throw '🚩 *El creador del bot no puede ser mutado*';
        }

        let target = _m.mentionedJid[0] 
                     ? _m.mentionedJid[0] 
                     : _m.quoted 
                     ? _m.quoted.sender 
                     : text;

        // No se puede mutar al bot
        if (target === conn.user.jid) {
            throw '🚩 *No puedes mutar el bot*';
        }

        const groupMetadata = await conn.groupMetadata(_m.chat);
        const groupOwnerId = groupMetadata.owner || _m.chat.split('-')[0] + '@s.whatsapp.net';

        // Verifica si el objetivo es el creador del grupo
        if (target === groupOwnerId) {
            throw '🚩 *No puedes mutar el creador del grupo*';
        }

        let user = global.db.data.users[target];
        const locationMessage = {
            key: { participants: '0@s.whatsapp.net', fromMe: false, id: 'message' },
            message: {
                locationMessage: {
                    name: 'Mute',
                    jpegThumbnail: await (await fetch('https://telegra.ph/file/f8324d9798fa2ed2317bc.png')).buffer(),
                    vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN:Unlimited\nEND:VCARD'
                }
            },
            participant: '0@s.whatsapp.net'
        };

        if (_m.mentionedJid[0] === undefined && !_m.quoted) {
            return conn.reply(_m.chat, '🚩 *Menciona a la persona que deseas mutar*', _m);
        }

        if (user.muted === true) {
            throw '🚩 *Este usuario ya ha sido mutado*';
        }

        conn.reply(_m.chat, '💬 *Tus mensajes serán eliminados*', locationMessage, null, {
            mentions: [target]
        });

        global.db.data.users[target].muted = true;

    } else if (command === 'unmute') {
        if (!isAdmin) {
            throw '💌 *Solo un administrador puede ejecutar este comando*';
        }

        let target = _m.mentionedJid[0]
                     ? _m.mentionedJid[0]
                     : _m.quoted
                     ? _m.quoted.sender
                     : text;

        let user = global.db.data.users[target];
        const locationMessage = {
            key: { participants: '0@s.whatsapp.net', fromMe: false, id: 'message' },
            message: {
                locationMessage: {
                    name: 'Unmute',
                    jpegThumbnail: await (await fetch('https://telegra.ph/file/aea704d0b242b8c41bf15.png')).buffer(),
                    vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN:Unlimited\nEND:VCARD'
                }
            },
            participant: '0@s.whatsapp.net'
        };

        if (target === _m.sender) {
            throw '🚩 *No puedes desmutarte a ti mismo*';
        }

        if (!_m.mentionedJid[0] && !_m.quoted) {
            return conn.reply(_m.chat, '🚩 *Menciona a la persona que deseas desmutar*', _m);
        }

        if (user.muted === false) {
            throw '🚩 *Este usuario no ha sido mutado*';
        }

        global.db.data.users[target].muted = false;

        conn.reply(_m.chat, '✅ *Tus mensajes no serán eliminados*', locationMessage, null, {
            mentions: [target]
        });
    }
};

// Configuración del handler
handler.command = ['mute', 'unmute'];
handler.help = ['mute', 'unmute'];
handler.tags = ['group'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
