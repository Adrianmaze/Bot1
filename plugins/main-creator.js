let handler = async (m, { conn, usedPrefix, isOwner }) => {
m.react('👤')
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Sisked 🚩;;\nFN:Sisked 🚩\nORG:Sisked 🚩\nTITLE:\nitem1.TEL;waid=584123989549:584123989549\nitem1.X-ABLabel:Sisked 🚩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Sisked 🚩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
