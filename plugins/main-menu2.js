let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://telegra.ph/file/03d1e7fc24e1a72c60714.jpg' 
let texto = `*_M E N Ú - A U D I O S_* 🗣️

1. _TKA_.
2. _OMG_.
3. _Hey_.
4. _Yoshi_.
5. _Rawr_.
6. _Siuuu_.
7. _Te Amo_.
8. _Pikachu_.
9. _Gaspi_.
10. _Takataka_.
11. _Potasio_.
12. _Pokemon_.
13. _Hablame_.
14. _Joder_.
15. _Me Voy_.
16. _Mmmm_.
17. _Feriado_.
18. _Chiste_.
19. _Me Olvide_.
20. _Gaspi Frase_.
21. _Lo Palpamos_.
22. _Fino Senores_.
23. _Aguanta_.
24. _Baneado_.
25. _Basado_.
26. _Bebesita_.
27. _Bienvenido Wey_.
28. _Buenas Noches_.
29. _Bueno Si_.
30. _Buenos Dias_.
31. _Cagaste_.
32. _Calla Fan de BTS_.
33. _Cambiate a Movistar_.
34. _Contexto_.
35. _Delivery_.
36. _Diagnosticado con Gay_.
37. _Donde Esta_.
38. _El Pepe_.
39. _El Toxico_.
40. _Enojado_.
41. _Entrada_.
42. _Es Viernes_.
43. _Esto Va para Ti_.
44. _Esto Va a Ser Epico Papus_.
45. _Estoy Triste_.
46. _Free Fire_.
47. _Gaspi y la Minita_.
48. _Goku Pervertido_.
49. _Homero Chino_.
50. _Hora de Sexo_.
51. _In Your Area_.
52. _Juicioso_.
53. _La Oracion_.
54. _Lo Palpamos_.
55. _Ma Ma Masivo_.
56. _Maldito Teni_.
57. _Marica Tu_.
58. _Me Anda Buscando Anonymous_.
59. _Me Pica los Cocos_.
60. _Mierda de Bot_.
61. _Momento XDS_.
62. _Motivacion_.
63. _Nadie Te Pregunto_.
64. _Nico Nico_.
65. _No Chupala_.
66. _No Digas Eso Papus_.
67. _No Estes Tite_.
68. _No Hagas Usar Esto_.
69. _No Me Hagas Usar Esto_.
70. _No Me Hables_.
71. _No Rompas Mas_.
72. _Onichan_.
73. _Orale_.
74. _Pasa Pack_.
75. _Que Onda_.
76. _Se Estan Riendo de Mi_.
77. _Se Pubrio_.
78. _Tarado_.
79. _TKA_.
80. _Tu No Me Te Cabras Arambiche_.
81. _Usted es Feo_.
82. _Usted Esta Detenido_.
83. _Un Pato_.
84. _Una Pregunta_.
85. _Vete a la VRG_.
86. _Vivan los Novios_.
87. _WTF_.
88. _Yamete_.
89. _Yokese_.
90. _ZZZZ_.
91. _A Nadie Le Importa_.
92. _Amongos_.
93. _Ara Ara_.
94. _Audio Hentai_.
95. _Bien Pensado Woody_.
96. _Lo Palpamos_.
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
handler.help = ['menu2']
handler.tags = ['main', 'audio'] 
handler.command = ['menu2', 'menuaudios'] 
export default handler
