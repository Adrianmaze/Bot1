import fg from 'api-dylux' 
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
𝙊𝙬𝙣𝙚𝙧 𝙊𝙛𝙞𝙘𝙞𝙖𝙡: 
「 wa.me/584123989549 」

𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨:               
「 https://chat.whatsapp.com/CTaspTXla9T1zA83m6ZKPe 」             
「 https://chat.whatsapp.com/JultL94aPtb5AzIeeuDvpX 」 

𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙊𝙛𝙞𝙘𝙞𝙖𝙡:
「 https://www.instagram.com/sisked_1 」

𝙏𝙞𝙠𝙏𝙤𝙠 𝙊𝙛𝙞𝙘𝙞𝙖𝙡:
「 https://www.tiktok.com/@sisked1 」`
}
handler.command = /^(jefe|ofc|good)$/i
export default handler
