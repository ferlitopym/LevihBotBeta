const moment = require('moment-timezone');
const menu = (prefix) => {
	let p = 0
	return `

┌──────═━┈┈━═──────┐

*LeviHS Beta Bot*

└──────═━┈┈━═──────┘

┌──────═━┈┈━═──────┐

➤ *Free Bot Total CMD : 64*
➤ *Premium Bot Total CMD : 121*
➤ *Owner* : @${configs.ownerList[0].split('@')[0]}
➤ *Prefix* : Multi
➤ *Time* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB

└──────═━┈┈━═──────┘


╔═════[ *ADMIN MENU* ]
╠➤ *${p+=1}.* ${prefix}group _open|close_
╠➤ *${p+=1}.* ${prefix}welcome _on|off_
╠➤ *${p+=1}.* ${prefix}leave _on|off_
╠➤ *${p+=1}.* ${prefix}setgroupicon _replyImage_
╠➤ *${p+=1}.* ${prefix}setgroupname _text_
╠➤ *${p+=1}.* ${prefix}setgroupdesc _text_
╠➤ *${p+=1}.* ${prefix}hidetag _text_
╠➤ *${p+=1}.* ${prefix}promote _@tag_
╠➤ *${p+=1}.* ${prefix}demote _@tag_
╠➤ *${p+=1}.* ${prefix}kick _@tag_
╠➤ *${p+=1}.* ${prefix}add _number_
╠➤ *${p+=1}.* ${prefix}getpp _@tag_
╠➤ *${p+=1}.* ${prefix}tagall
╠➤ *${p+=1}.* ${prefix}linkgroup
╠➤ *${p+=1}.* ${prefix}revoke
╠➤ *${p+=1}.* ${prefix}leave
╚═════[ *FREE BOT* ]

╔═════[ *STICKER* ]
╠➤ *${p+=1}.* ${prefix}stickerwm _pack|author_
╠➤ *${p+=1}.* ${prefix}takestick _pack|author_
╠➤ *${p+=1}.* ${prefix}toimg _replySticker_
╠➤ *${p+=1}.* ${prefix}togif _replySticker_
╠➤ *${p+=1}.* ${prefix}semoji _emoji_
╠➤ *${p+=1}.* ${prefix}stickerfire
╠➤ *${p+=1}.* ${prefix}stickernobg
╠➤ *${p+=1}.* ${prefix}stickergif
╠➤ *${p+=1}.* ${prefix}sticker
╚═════[ *FREE BOT* ]

╔═════[ *EDUCATION* ]
╠➤ *${p+=1}.* ${prefix}nulis _text_
╠➤ *${p+=1}.* ${prefix}brainly _query_
╠➤ *${p+=1}.* ${prefix}kbbi _query_
╠➤ *${p+=1}.* ${prefix}wiki _query_
╚═════[ *FREE BOT* ]

╔═════[ *PRIMBON* ]
╠➤ *${p+=1}.* ${prefix}jodoh _kamu|dia_
╠➤ *${p+=1}.* ${prefix}artinama _nama_
╠➤ *${p+=1}.* ${prefix}artimimpi _mimpi_
╚═════[ *FREE BOT* ]

╔═════[ *RANDOM* ]
╠➤ *${p+=1}.* ${prefix}fml
╠➤ *${p+=1}.* ${prefix}randomquran
╠➤ *${p+=1}.* ${prefix}meme
╠➤ *${p+=1}.* ${prefix}darkjoke
╠➤ *${p+=1}.* ${prefix}pantun
╠➤ *${p+=1}.* ${prefix}nickepep
╠➤ *${p+=1}.* ${prefix}quotes
╠➤ *${p+=1}.* ${prefix}estetikpic
╚═════[ *FREE BOT* ]

╔═════[ *OTHER* ]
╠➤ *${p+=1}.* ${prefix}removebg _replyImage / @tag_
╠➤ *${p+=1}.* ${prefix}qrencode _text_
╠➤ *${p+=1}.* ${prefix}barcode _text_
╠➤ *${p+=1}.* ${prefix}jadwalsholat _daerah_
╠➤ *${p+=1}.* ${prefix}jadwaltv _channel_
╚═════[ *FREE BOT* ]

╔═════[ *INFO* ]
╠➤ *${p+=1}.* ${prefix}stickermenu
╠➤ *${p+=1}.* ${prefix}owner
╠➤ *${p+=1}.* ${prefix}limit
╠➤ *${p+=1}.* ${prefix}info
╠➤ *${p+=1}.* ${prefix}listvn
╚═════[ *FREE BOT* ]

╔═════[ *OWNER* ]
╠➤ *${p+=1}.* ${prefix}setpp _replyImage_
╠➤ *${p+=1}.* ${prefix}eval _text_
╠➤ *${p+=1}.* ${prefix}term _code_
╠➤ *${p+=1}.* ${prefix}block _@tag_
╠➤ *${p+=1}.* ${prefix}unblock _@tag_
╠➤ *${p+=1}.* ${prefix}join _link_
╠➤ *${p+=1}.* ${prefix}bc _text_
╠➤ *${p+=1}.* ${prefix}addvn _replyAudio/vn_
╠➤ *${p+=1}.* ${prefix}delvn _name_
╠➤ *${p+=1}.* ${prefix}premium add _@tag_
╠➤ *${p+=1}.* ${prefix}premium del _@tag_
╠➤ *${p+=1}.* ${prefix}premium list
╠➤ *${p+=1}.* ${prefix}clearall
╠➤ *${p+=1}.* ${prefix}resetlimit
╚═════[ *FREE BOT* ]
`
}

const ingfo = `Bot Ini menggunakan Bahasa JS (Java Script)
`


const mess = {
             wait: 'Loading...',
			 group: 'Hanya bisa dipakai di grup!',
			 admin: 'Hanya admin yang bisa memakainya !',
			 botAdmin: 'Jadikan admin dulu lah kalau mau make',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',
			 ownerOnly: 'Cuman buat owner doang bang!'
}

module.exports = {
	menu,
	ingfo,
	mess
}
