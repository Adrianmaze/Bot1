import axios from 'axios';
import fetch from 'node-fetch';
import fs from 'fs'; // Asegúrate de importar 'fs' para poder leer archivos

const handler = async (m, {command, conn}) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje || 'es'; // Establecer un valor predeterminado 'es'
  const path = `./src/languages/${idioma}.json`;

  // Verificar si el archivo existe
  if (!fs.existsSync(path)) {
    console.error(`El archivo ${path} no se encuentra.`);
    return; // Salir del handler si el archivo no existe
  }

  const _translate = JSON.parse(fs.readFileSync(path));
  const tradutor = _translate.plugins.adult_comandos;

  if (!datas.db.data.chats[m.chat].modohorny && m.isGroup) throw tradutor.texto1;


  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw tradutor.texto1;

  if (command == 'nsfwloli') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwfoot') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfoot.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'hentai') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/hentai.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'tetas') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'booty') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'ecchi') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/ecchi.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'furro') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/furro.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'trapito') {
    const res = await fetch(`https://api.waifu.pics/nsfw/trap`);
    const json = await res.json();
    const url = json.url;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'imagenlesbians') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'panties') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'pene') {
    const res = `${global.MyApiRestBaseUrl}/api/adult/pene?apikey=${global.MyApiRestApikey}`;
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'porno') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'randomxxx') {
    const rawjsonn = ['https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json'];
    const rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())];
    const res = (await axios.get(rawjson)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'pechos') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pechos.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }
}
handler.help = ['nsfwloli', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.command = ['nsfwloli', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.tags = ['nsfw'];
export default handler;
