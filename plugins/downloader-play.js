import fetch from 'node-fetch';
import yts from 'yt-search';
import Starlights from '@StarlightsTeam/Scraper';

let limit = 300;

let handler = async (m, { conn, text, isPrems, isOwner, usedPrefix, command, args }) => {
  if (command === 'play') {
    if (!text) return conn.reply(m.chat, '🚩 Ingresa el título de un video o canción de YouTube.', m);
    await m.react('🕓');
    try {
      let res = await search(args.join(" "));
      let img = await (await fetch(`${res[0].image}`)).buffer();
      let txt = '─ׄ─ׄ─⭒𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙗𝙮 𝙎𝙞𝙨𝙠𝙚𝙙⭒─ׄ─ׄ─\n\n';
      txt += `📄 *Titulo :* ${res[0].title}\n`;
      txt += `🕐 *Duración :* ${secondString(res[0].duration.seconds)}\n`;
      txt += `📆 *Publicado :* ${eYear(res[0].ago)}\n`;
      txt += `🖇️ *Canal :* ${res[0].author.name || 'Desconocido'}\n`;
      txt += `🚩 *Url :* ${'https://youtu.be/' + res[0].videoId}\n\n`;
      txt += `☁️ Responde a este mensaje con *Audio* o *Vídeo.*`;
      await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m);
      await m.react('✅');
    } catch {
      await m.react('✖️');
    }
  }

  if (command === 'Audio' || command === 'audio') {
    if (!m.quoted) return conn.reply(m.chat, `🚩 Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m).then(_ => m.react('✖️'));
    if (!m.quoted.text.includes("─ׄ─ׄ─⭒𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙗𝙮 𝙎𝙞𝙨𝙠𝙚𝙙⭒─ׄ─ׄ─")) return conn.reply(m.chat, `[ 🚩 ] Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m).then(_ => m.react('✖️'));
    
    let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'));
    if (!urls) return conn.reply(m.chat, `Resultado no Encontrado.`, m).then(_ => m.react('✖️'));
    if (urls.length < text) return conn.reply(m.chat, `Resultado no Encontrado.`, m).then(_ => m.react('✖️'));
    
    let user = global.db.data.users[m.sender];
    await m.react('🕓');
    try {
      let v = urls[0];
      let { title, duration, size, thumbnail, dl_url } = await Starlights.ytmp3v2(v);

      if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'));

      await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument });
      await m.react('✅');
    } catch {
      try {
        let v = urls[0];
        let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp3(v);

        if (size.split('MB')[0] >= limit) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react('✖️'));

        await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument });
        await m.react('✅');
      } catch {
        await m.react('✖️');
      }
    }
  }

  if (command === 'Video' || command === 'video' || command === 'vídeo' || command === 'Vídeo') {
    if (!m.quoted) return conn.reply(m.chat, `🚩 Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m).then(_ => m.react('✖️'));
    if (!m.quoted.text.includes("─ׄ─ׄ─⭒𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙗𝙮 𝙎𝙞𝙨𝙠𝙚𝙙⭒─ׄ─ׄ─")) return conn.reply(m.chat, `[ 🚩 ] Etiqueta el mensaje que contenga el resultado de YouTube Play.`, m).then(_ => m.react('✖️'));
    
    let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'));
    if (!urls) return conn.reply(m.chat, `☁️ Resultado no Encontrado.`, m).then(_ => m.react('✖️'));
    if (urls.length < text) return conn.reply(m.chat, `❌ Resultado no Encontrado.`, m).then(_ => m.react('✖️'));

    let user = global.db.data.users[m.sender];

    await m.react('🕓');
    try {
      let v = urls[0];
      let { title, duration, size, thumbnail, dl_url } = await Starlights.ytmp4v2(v);

      if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `❌ El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'));

      await conn.sendFile(m.chat, dl_url, title + '.mp4', `Título : ${title}`, m, false, { asDocument: user.useDocument });
      await m.react('✅');
    } catch {
      try {
        let v = urls[0];
        let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp4(v);

        if (size.split('MB')[0] >= limit) return m.reply(`❌ El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react('✖️'));

        await conn.sendFile(m.chat, dl_url, title + '.mp4', `*Título* : ${title}\n*Calidad* : ${quality}`, m, false, { asDocument: user.useDocument });
        await m.react('✅');
      } catch {
        await m.react('✖️');
      }
    }
  }
};

handler.help = ['play *<búsqueda>*', 'Audio', 'Video'];
handler.tags = ['downloader'];
handler.command = /^(play|Audio|audio|Video|video|vídeo|Vídeo)$/i;

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return search.videos;
}

function MilesNumber(number) {
  let exp = /(\d)(?=(\d{3})+(?!\d))/g;
  let rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' Día, ' : ' Días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' Hora, ' : ' Horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' Minuto, ' : ' Minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' Segundo' : ' Segundos') : '';
  return d
      
