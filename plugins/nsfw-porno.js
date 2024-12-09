import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    // Verificar si el modo NSFW está habilitado
    if (!global.db.data.chats[m.chat].nsfw) return m.reply(`El grupo no admite contenido *NSFW.*`);

    // Reacción actualizada
    m.react('🔥');

    // Lista de imágenes actualizadas
    let imagenes = [
        "https://img-hw.xvideos-cdn.com/videos/thumbs169poster/45/14/98/4514987800a7711b33533d96f2a6187e-1/4514987800a7711b33533d96f2a6187e.11.jpg",
        "https://image.staticpng.com/?url=https%3A%2F%2Fi.pornovideo20.com%2F3%2F0%2F1%2F4%2F5%2F30145733_320x180.jpg",
        "https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/48/c5/b0/48c5b06e3fdf1a0473915dae3d25fa70/48c5b06e3fdf1a0473915dae3d25fa70.15.jpg",
        "https://cinepornogratis.com/wp-content/uploads/2021/11/pornoxxx-adultos.jpg",
        "https://www.sexmutant.com/image/porno-de-xxx-y-xexo-con-mujeres-y-vajinas.jpg",
        "https://www.jovencitas.gratis/wp-content/uploads/2022/11/ella-hermanastra.jpg",  
        "https://cinepornogratis.com/wp-content/uploads/2022/04/porno-xxx-xnxx.jpg",  
        "https://img-cf.xvideos-cdn.com/videos/thumbs169ll/15/f9/57/15f957904ce8d683055d7d3431ea3ddb/15f957904ce8d683055d7d3431ea3ddb.17.jpg",  
        "https://pornoxxx.com.ve/wp-content/uploads/2018/01/cogiendo-con-dos-morenas-culonas-trio.jpg",  
        "https://chuporno.com/video/thumb/universitaria-18-anos-follando-companero-1948.jpg",  
        "https://xgx.mobi/image/porno-xxx-18.jpg",      
        "https://www.mespornogratis.com/wp-content/uploads/2020/01/lily-got-detention-for-being-a-naughty-girl-and-decides-to-fuck-her-classmate.jpg",  
        "https://bs2.egdun.com/enhanced-2/df9/3e4/df93e41f9b199e097c23631d33d9082c.jpg",  
        "https://www.videosporno.mobi/media/videos/10000/1000/ver-videos-de-chicas-porno-xxx.jpg", 
        "https://xgx.mobi/preview/don-porno-xxx.jpg", 
        "https://xgx.mobi/image/porno-xxx-18.jpg"
        ];

    const imagen = imagenes[Math.floor(Math.random() * imagenes.length)]; // Selección aleatoria de imagen

    // Envío de la imagen sin mensaje ni mención
    await conn.sendMessage(m.chat, { 
        image: { url: imagen }
    }, { quoted: m });
};

handler.help = ['porno'];
handler.tags = ['nsfw'];
handler.command = ['porno'];
handler.group = true;

export default handler;
