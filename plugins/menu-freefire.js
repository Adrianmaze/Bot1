ñplet handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://i.ibb.co/JsGgntS/file.jpg' 
let texto = `> 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 𝙈𝙀𝙉𝙐
 
★ 𝗠𝗔𝗣𝗔𝗦 𝗚𝗘𝗡𝗘𝗥𝗔𝗟𝗘𝗦 ★
*┇⇾ 🎫 *.𝘋𝘰𝘯𝘢𝘳𝘴𝘢𝘭𝘢*
*┇⇾ 🏝️ *.𝘉𝘦𝘳𝘮𝘶𝘥𝘢*
*┇⇾ 🗼 *.𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰*
*┇⇾ 🏜️ *.𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪*
*┇⇾ 🏗️ *.𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢*
*┇⇾ 🏞️ *.𝘈𝘭𝘱𝘦𝘴* 
*┇⇾ 🏖️ *.𝘊𝘶𝘢𝘥𝘳𝘪𝘭𝘢𝘵𝘦𝘳𝘰*
*┇⇾ 🌫️ *.𝘏𝘦𝘹𝘢𝘨𝘰𝘯𝘢𝘭*

★ 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 ★

🏳️ *𝘙𝘦𝘨𝘭𝘢𝘴𝘤𝘭𝘬.*       
🚩 *𝘙𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴.*  
🏴 *𝘙𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2.*

▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 ⚔ ◂◂

ᒪIՏTᗩ ᑕOᗰᗩᑎᗪOՏ
┇⇾.4𝘷𝘴4 
┇⇾.6𝘷𝘴6 
┇⇾.𝘴𝘤𝘳𝘪𝘮 
┇⇾.𝘪𝘯𝘵𝘦𝘳𝘯𝘢 
┇⇾.12𝘷𝘴12
┇⇾.16𝘷𝘴16 
┇⇾.20𝘷𝘴20 
┇⇾.24𝘷𝘴24 
┇⇾.𝘊𝘶𝘢𝘥𝘳𝘪𝘭𝘪𝘴𝘵𝘢 

 *𝘊𝘰𝘯𝘵𝘢𝘤𝘵:*\n.𝘰𝘸𝘯𝘦𝘳👤
`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['menuff', 'menu4']
handler.tags = ['freefire' ,'main'] 
handler.command = ['menuff', 'menufreefire', 'menu4'] 
export default handler

