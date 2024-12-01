import fetch from 'node-fetch'
import yts from 'yt-search'
import Starlights from '@StarlightsTeam/Scraper'

let limit = 200

let handler = async (m, { conn: star, command, args, text, usedPrefix }) => {
  if (!text) return star.reply(m.chat, '🚩 Ingresa el título de un video o canción de YouTube.', m)
  await m.react('🕓')

  try {
    let res = await search(args.join(" "))
    let img = await (await fetch(`${res[0].image}`)).buffer()
    let txt = '─ׄ─ׄ─⭒𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙗𝙮 𝙎𝙞𝙨𝙠𝙚𝙙⭒─ׄ─ׄ─\n\n'
    txt += `📄 *Titulo :* ${res[0].title}\n`
    txt += `🕐 *Duración :* ${secondString(res[0].duration.seconds)}\n`
    txt += `📆 *Publicado :* ${eYear(res[0].ago)}\n`
    txt += `🖇️ *Canal :* ${res[0].author.name || 'Desconocido'}\n`
    txt += `🚩 *Url :* ${'https://youtu.be/' + res[0].videoId}\n\n`
    txt += `☁️ Responde a este mensaje con *.Audio* o *.Vídeo*`
    await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
    await m.react('✅')
  } catch {
    await m.react('✖️')
  }
}

handler.help = ['play *<búsqueda>*']
handler.tags = ['downloader']
handler.command = ['play']

export default handler

// Función para la búsqueda de videos de YouTube
async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}

// Función para formatear duración en un formato legible
function secondString(seconds) {
  seconds = Number(seconds)
  const d = Math.floor(seconds / (3600 * 24))
  const h = Math.floor((seconds % (3600 * 24)) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  const dDisplay = d > 0 ? d + (d == 1 ? ' Día, ' : ' Días, ') : ''
  const hDisplay = h > 0 ? h + (h == 1 ? ' Hora, ' : ' Horas, ') : ''
  const mDisplay = m > 0 ? m + (m == 1 ? ' Minuto, ' : ' Minutos, ') : ''
  const sDisplay = s > 0 ? s + (s == 1 ? ' Segundo' : ' Segundos') : ''
  return dDisplay + hDisplay + mDisplay + sDisplay
}

// Función para formatear años en formato amigable
function eYear(txt) {
  if (!txt) return '×'
  if (txt.includes('month ago')) return 'hace ' + txt.replace("month ago", "").trim() + ' mes'
  if (txt.includes('months ago')) return 'hace ' + txt.replace("months ago", "").trim() + ' meses'
  if (txt.includes('year ago')) return 'hace ' + txt.replace("year ago", "").trim() + ' año'
  if (txt.includes('years ago')) return 'hace ' + txt.replace("years ago", "").trim() + ' años'
  if (txt.includes('hour ago')) return 'hace ' + txt.replace("hour ago", "").trim() + ' hora'
  if (txt.includes('hours ago')) return 'hace ' + txt.replace("hours ago", "").trim() + ' horas'
  if (txt.includes('minute ago')) return 'hace ' + txt.replace("minute ago", "").trim() + ' minuto'
  if (txt.includes('minutes ago')) return 'hace ' + txt.replace("minutes ago", "").trim() + ' minutos'
  if (txt.includes('day ago')) return 'hace ' + txt.replace("day ago", "").trim() + ' dia'
  if (txt.includes('days ago')) return 'hace ' + txt.replace("days ago", "").trim() + ' dias'
  return txt
}

// Función para descargar el archivo de audio (mp3) de YouTube
handler.command = ['audio', 'Audio']

handler.tags = ['downloader']

handler.handler = async (m, { conn, text }) => {
  if (!m.quoted) return conn.reply(m.chat, `🚩 Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m).then(_ => m.react('✖️'))
  if (!m.quoted.text.includes("─ׄ─ׄ─⭒𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙗𝙮 𝙎𝙞𝙨𝙠𝙚𝙙⭒─ׄ─ׄ─")) return conn.reply(m.chat, `[ 🚩 ] Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m).then(_ => m.react('✖️'))

  let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
  if (!urls) return conn.reply(m.chat, `Resultado no Encontrado.`, m).then(_ => m.react('✖️'))
  if (urls.length < text) return conn.reply(m.chat, `Resultado no Encontrado.`, m).then(_ => m.react('✖️'))
  
  let user = global.db.data.users[m.sender]
  
  await m.react('🕓')
  try {
    let v = urls[0]
    let { title, duration, size, thumbnail, dl_url } = await Starlights.ytmp3v2(v)
    
    if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
    
    await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
    await m.react('✅')
  } catch {
    try {
      let v = urls[0]
      let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp3(v)
      
      if (size.split('MB')[0] >= limit) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react('✖️'))
      
      await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
      await m.react('✅')
    } catch {
      await m.react('✖️')
    }
  }
}

export default handler
    
