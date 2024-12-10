let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw '⚠ *_️Ingrese una explicación del comando que desea solicitar._*'
    if (text.length < 10) throw '⚠️ *_Especifique bien la solicitud, mínimo 10 caracteres._*'
    if (text.length > 1000) throw '⚠️ *_Máximo 1000 caracteres para enviar la solicitud._*'
    const teks = `╭───────────────────\n│⊷〘 *C O M A N D O* ⚠️ 〙⊷\n├───────────────────\n│⭐ *Cliente:*\n│✏️ Wa.me/${m.sender.split`@`[0]}\n│\n│🚩  *Mensaje:*\n│📩 ${text}\n╰───────────────────`
    await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
    m.reply('⚠️ *_La solicitud fue enviada exitosamente y será revisada y respondida lo antes posible dependiendo del ( comando ), ( El uso inapropiado del comando puede ocasionar ban inmediatamente. )_*')
}
handler.help = ['sgcmd']
handler.tags = ['info']
handler.command = ['sugerencia', 'mejora', 'sgcmd']

export default handler
