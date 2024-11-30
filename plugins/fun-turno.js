let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},*_Haga su pregunta sin miedo que todo se queda aca 👀, queda prohibido responder con un nose.🚫_*`, null, {
mentions: [a, b]
})}
handler.help = ['turno']
handler.tags = ['fun']
handler.command = ['turno']
handler.group = true
export default handler
