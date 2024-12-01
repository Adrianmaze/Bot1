import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  // Obtener la imagen de perfil del usuario o usar una por defecto
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/QJWfynP/file.jpg')
  let img = await (await fetch(pp)).buffer()
  
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let user = `@${m.messageStubParameters[0].split`@`[0]}`
    let text = chat.sWelcome || `┌─• 𝙎𝙄𝙎𝙆𝙀𝘿-𝘽𝙊𝙏 \n│「 Bienvenido 」\n└┬• 「 @${user} 」\n   │🌪️  Bienvenido a\n   │🚩  ${groupMetadata.subject}\n   │🩸  Descripción:\n${groupMetadata.desc || 'sin descripción'}\n   └───────────────┈ ⳹`

    let message = {
      caption: text,  // Aquí va el texto que acompañará a la imagen
      mentions: [m.messageStubParameters[0]],
      contextInfo: {
        mentionedJid: [m.messageStubParameters[0]],
        externalAdReply: {
          title: global.packname,
          body: '𝙋𝙊𝙒𝙀𝙍 𝙄𝘼',
          mediaUrl: pp,
          mediaType: 2,
          thumbnailUrl: 'https://i.ibb.co/9TcdDGx/file.jpg',
          thumbnail: img
        }
      },
      image: img,  // Aquí se envía la imagen de perfil como archivo adjunto
    }
    
    // Enviar el mensaje con la imagen y el texto
    await conn.sendMessage(m.chat, message, { quoted: m })
  }

  if (chat.bienvenida && m.messageStubType == 28) {
    let user = `@${m.messageStubParameters[0].split`@`[0]}`
    let text = chat.sBye || `┌─• 𝙎𝙄𝙎𝙆𝙀𝘿-𝘽𝙊𝙏 \n│「 ADIOS 👋 」\n└┬• 「 @${user} 」\n   │😂  Se fue\n   │👋🏻 Jamás te quisimos aquí\n   └───────────────┈ ⳹`

    let message = {
      caption: text,  // Aquí va el texto que acompañará a la imagen
      mentions: [m.messageStubParameters[0]],
      contextInfo: {
        mentionedJid: [m.messageStubParameters[0]],
        externalAdReply: {
          title: global.packname,
          body: '𝙋𝙊𝙒𝙀𝙍 𝙄𝘼',
          mediaUrl: pp,
          mediaType: 2,
          thumbnailUrl: 'https://i.ibb.co/9TcdDGx/file.jpg',
          thumbnail: img
        }
      },
      image: img,  // Aquí se envía la imagen de perfil como archivo adjunto
    }

    // Enviar el mensaje con la imagen y el texto
    await conn.sendMessage(m.chat, message, { quoted: m })
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    let user = `@${m.messageStubParameters[0].split`@`[0]}`
    let text = chat.sBye || `┌─• 𝙎𝙄𝙎𝙆𝙀𝘿-𝘽𝙊𝙏 \n│「 ADIOS 👋 」\n└┬• 「 @${user} 」\n   │😂  Se fue\n   │👋🏻 Jamás te quisimos aquí\n   └───────────────┈ ⳹`

    let message = {
      caption: text,  // Aquí va el texto que acompañará a la imagen
      mentions: [m.messageStubParameters[0]],
      contextInfo: {
        mentionedJid: [m.messageStubParameters[0]],
        externalAdReply: {
          title: global.packname,
          body: '𝙋𝙊𝙒𝙀𝙍 𝙄𝘼',
          mediaUrl: pp,
          mediaType: 2,
          thumbnailUrl: 'https://i.ibb.co/9TcdDGx/file.jpg',
          thumbnail: img
        }
      },
      image: img,  // Aquí se envía la imagen de perfil como archivo adjunto
    }

    // Enviar el mensaje con la imagen y el texto
    await conn.sendMessage(m.chat, message, { quoted: m })
  }
}
