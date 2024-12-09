import Spotify from "spotifydl-x";

const LimitAud = 725 * 1024 * 1024; // 700MB

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  const isCommand15 = /^(spotify|spo)$/i.test(command);
  const isCommand16 = /^(spot(ify)?search)$/i.test(command);

  switch (true) {
    case isCommand15:
      if (!args[0]) return m.reply("Por favor, proporciona un enlace de Spotify válido.");
      try {
        const spotify = new Spotify({ 
          clientId: "TU_CLIENT_ID", 
          clientSecret: "TU_CLIENT_SECRET" 
        });

        const track = await spotify.getTrack(args[0]);
        const audioUrl = track.downloadUrl;
        const title = track.name;

        if (!audioUrl) return m.reply("No se pudo obtener el audio de Spotify.");

        await conn.sendMessage(
          m.chat,
          { audio: { url: audioUrl }, mimetype: "audio/mpeg", fileName: `${title}.mp3` },
          { quoted: m }
        );
      } catch (e) {
        m.reply("Error al procesar la solicitud de Spotify.");
        console.error(e);
      }
      break;

    case isCommand16:
      if (!args[0]) return m.reply("Por favor, proporciona un término de búsqueda.");
      try {
        const spotify = new Spotify({
          clientId: "TU_CLIENT_ID",
          clientSecret: "TU_CLIENT_SECRET",
        });

        const searchResults = await spotify.search(args.join(" "), "track", 5);
        let message = "*Resultados de búsqueda de Spotify:*\n";
        searchResults.forEach((result, i) => {
          message += `\n${i + 1}. *${result.name}* - ${result.artists[0].name}\n${result.url}`;
        });

        m.reply(message);
      } catch (e) {
        m.reply("Error al realizar la búsqueda en Spotify.");
        console.error(e);
      }
      break;
  }
};

handler.command = /^(spotify|spo|spot(ify)?search)$/i;
export default handler;
