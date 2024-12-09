import axios from 'axios';

const sendRandomImage = async (command, chatId, conn) => {
  // Definir las URLs de las imágenes según el comando
  const imageUrls = {
    'nsfwloli': [
      'https://raw.githubusercontent.com/Adrianmaze/Bot1/blob/main/src/JSON/nsfwloli.json',
      'https://example.com/nsfwloli2.jpg',
      'https://example.com/nsfwloli3.jpg'
    ],
    'nsfwfoot': [
      'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfoot.json',
      'https://example.com/nsfwfoot1.jpg',
      'https://example.com/nsfwfoot2.jpg'
    ],
    'hentai': [
      'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/hentai.json',
      'https://example.com/hentai1.jpg',
      'https://example.com/hentai2.jpg'
    ],
    // Agrega más comandos y URLs de imágenes según sea necesario
  };

  // Verificar si el comando existe en el objeto de imágenes
  if (imageUrls[command]) {
    // Seleccionar una URL aleatoria de la lista
    const randomImageUrl = imageUrls[command][Math.floor(Math.random() * imageUrls[command].length)];

    try {
      // Enviar la imagen seleccionada al chat
      conn.sendMessage(chatId, { image: { url: randomImageUrl }, caption: `Comando: ${command}` }, { quoted: m });
    } catch (error) {
      console.error(`Error al enviar la imagen para el comando ${command}: ${error.message}`);
    }
  } else {
    console.log(`Comando desconocido: ${command}`);
  }
};

// Usar el comando en la función handler
const handler = async (m, { command, conn }) => {
  const chatId = m.chat;

  // Llamar a la función para enviar una imagen según el comando
  await sendRandomImage(command, chatId, conn);
};

handler.help = ['nsfwloli', 'nsfwfoot', 'hentai'];  // Añade otros comandos aquí
handler.command = ['nsfwloli', 'nsfwfoot', 'hentai'];  // Añade otros comandos aquí
handler.tags = ['nsfw'];

export default handler;
