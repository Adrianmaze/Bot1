let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://telegra.ph/file/03d1e7fc24e1a72c60714.jpg' 
let texto = `*☁️ _M E N U - A U D I O S_ ☁️*

1. _A Nadie Le Importa_
2. _Aguanta_
3. _Amongos_
4. _Ara Ara_
5. _Audio Hentai_
6. _Baneado_
7. _Basado_
8. _Bebesita_
9. _Bien Pensado Woody_
10. _Bienvenido Wey_
11. _Buenas Noches_
12. _Bueno Si_
13. _Buenos Días_
14. _Cagaste_
15. _Calla Fan De BTS_
16. _Cambiate A Movistar_
17. _Chiste_
18. _Conoces a Miguel_
19. _Contexto_
20. _Corte Corte_
21. _Delibery_
22. _Diagnosticado Con Gay_
23. _Donde Esta_
24. _El Pepe_
25. _El Toxico_
26. _En Caso De Una Investigación_
27. _Enojado_
28. _Entrada_
29. _Es Viernes_
30. _Esto Va Para Ti_
31. _Esto Va Ser Epico Papus_
32. _Estoy Triste_
33. _Feriado_
34. _Fino Señores_
35. _Freefire_
36. _Gemidos_
37. _Gaspi Frase_
38. _Gaspi Y La Minita_
39. _Goku Pervertido_
40. _Hablame_
41. _Hey_
42. _Homero Chino_
43. _Hora De Sexo_
44. _In Your Area_
45. _Jesucristo_
46. _Joder_
47. _Juicioso_
48. _La Oración_
49. _Lo Paltimos_
50. _Ma Ma Masivo_
51. _Maldito Teni_
52. _Marica Tu_
53. _Me Anda Buscando Anonymous_
54. _Me Olvide_
55. _Me Pica Los Cocos_
56. _Me Voy_
57. _Mierda De Bot_
58. _Mmmm_
59. _Momento XDS_
60. _Motivacion_
61. _Nadie Te Pregunto_
62. _Nico Nico_
63. _No Chupala_
64. _No Digas Eso Papus_
65. _No Estes Tite_
66. _No Hagas Usar Esto_
67. _No Me Hagas Usar Esto_
68. _No Me Hables_
69. _No Rompas Mas_
70. _OMG_
71. _Onichan_
72. _Orale_
73. _Pasa Pack_
74. _Pikachu_
75. _Pokemon_
76. _Potasio_
77. _Q Onda_
78. _Rawr_
79. _Se Estan Riendiendo De Mi_
80. _Se Pubrio_
81. _Siuuu_
82. _Takataka_
83. _Tarado_
84. _Teamo_
85. _TKA_
86. _Tunometecabrasaramambiche_
87. _Usted es Feo_
88. _Usted Esta Detenido_
89. _Un Pato_
90. _Una Pregunta_
91. _Vete A La VRG_
92. _Vivan Los Novios_
93. _WTF_
94. _Yamete_
95. _Yokese_
96. _Yoshi_
97. _ZZZZ_
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
