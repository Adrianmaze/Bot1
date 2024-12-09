import Spotify from "spotifydl-x";

const LimitAud = 725 * 1024 * 1024; // 700MB
const LimitVid = 425 * 1024 * 1024; // 425MB

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  const isSpotify = /^(spotify|music)$/i.test(command);
  const isSpotifySearch = /^(spotifysearch|spotsearch)$/i.test(command);

  async function reportError(e) {
    console.log("Error:", e);
    await m.reply("❌ Ocurrió un error, intenta nuevamente.");
  }

  switch (true) {
    // Descargar canción de Spotify
    case isSpotify:
      if (!args[0]) return m.reply(`⚠️ Uso incorrecto: *${usedPrefix + command} [URL]*\nEjemplo: *${usedPrefix + command} https://open.spotify.com/track/example*`);
      try {
        const spotify = new Spotify({ 
          clientId: "TU_CLIENT_ID",
          clientSecret: "TU_CLIENT_SECRET",
        });
        const track = await spotify.getTrack(args[0]);

        await conn.sendMessage(m.chat, {
          audio: { url: track.downloadUrl },
          mimetype: "audio/mpeg",
          fileName: `${track.name}.mp3`,
          contextInfo: {
            externalAdReply: {
              title: track.name,
              body: track.artists.join(", "),
              thumbnailUrl: track.coverUrl,
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        }, { quoted: m });
      } catch (e) {
        reportError(e);
      }
      break;

    // Buscar canción en Spotify
    case isSpotifySearch:
      if (!text) return m.reply(`⚠️ Uso incorrecto: *${usedPrefix + command} [texto]*\nEjemplo: *${usedPrefix + command} Billie Eilish*`);
      try {
        const spotify = new Spotify({
          clientId: "TU_CLIENT_ID",
          clientSecret: "TU_CLIENT_SECRET",
        });
        const searchResults = await spotify.search(text, "track");

        let message = "*🎵 Resultados de la búsqueda:*\n\n";
        searchResults.tracks.items.forEach((track, index) => {
          message += `*${index + 1}.* ${track.name} - ${track.artists.map(a => a.name).join(", ")}\n${track.external_urls.spotify}\n\n`;
        });

        await m.reply(message);
      } catch (e) {
        reportError(e);
      }
      break;

    default:
      return m.reply("❌ Comando no reconocido.");
  }
};

handler.help = ["spotify", "spotifysearch"];
handler.tags = ["downloader", "music"];
handler.command = ["spotify", "music", "spotifysearch", "spotsearch"];

export default handler;
