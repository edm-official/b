const {
	default: makeWASocket,
	useSingleFileAuthState,
	DisconnectReason,
	downloadContentFromMessage,
	getContentType ,
	jidDecode
} = require('@adiwajshing/baileys')
const {
	youtubedl,
	youtubedlv2 
} = require('@bochilteam/scraper')
const fs = require('fs')
const P = require('pino')
const qrcode = require('qrcode-terminal')
const chalk = require('chalk')
const GG = require('link-preview-js')
const util = require('util')
const { state, saveState } = useSingleFileAuthState('./session.json')
const config = require('./config')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep } = require('./lib/functions')
const { fetchJson} = require('./lib/myfunc')
const { exec, spawn, execSync } = require("child_process")
const { sms } = require('./lib/message');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/stic')
const prefix = ['.']
const axios = require('axios');
const owner = ['94766866297']
const moment = require('moment-timezone')
const connectToWA = () => {
	const conn = makeWASocket({
		logger: P({ level: 'silent' }),
		printQRInTerminal: true,
		auth: state,
	})
	
	conn.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect } = update
		if (connection === 'close') {
			if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
				connectToWA()
			}
		} else if (connection === 'open') {
console.log('Connected')
				let l = fetchJson('https://raw.githubusercontent.com/vihangayt0/server-/main/settings.json')
			const log = l.logmsg
			const tmpb = [
			{ quickReplyButton: {displayText: 'Join Support Group 💌', id: `join ${l.support}` }}
									]
			 const btnms = {
			 caption: log,
			 footer: config.FOOTER,
			 templateButtons: tmpb,
			 image: {url: `https://raw.githubusercontent.com/vihangayt0/server-/main/log.png`}
									} 
		setTimeout( () => {                            
									conn.sendMessage(`7777777777@s.whatsapp.net`, btnms )
			}, 240000)
		}
	})
	
	conn.ev.on('creds.update', saveState)
	
	conn.ev.on('messages.upsert', async(mek) => {
		try {
			mek = mek.messages[0]
			if (!mek.message) return
			
			mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			if (mek.key && mek.key.remoteJid === 'status@broadcast') return
			const type = getContentType(mek.message)
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			
			const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
			const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : ( type == 'listResponseMessage') && mek.message.listResponseMessage.singleSelectReply.selectedRowId? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message.buttonsResponseMessage.selectedButtonId  ? mek.message.buttonsResponseMessage.selectedButtonId  : (type == "templateButtonReplyMessage") && mek.message.templateButtonReplyMessage.selectedId ? mek.message.templateButtonReplyMessage.selectedId  :  (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
			const isCmd = body.startsWith(prefix)
			const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const isGroup = from.endsWith('@g.us')
			const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
			const senderNumber = sender.split('@')[0]
      const isblock = from.endsWith('98019970@g.us')
      const isbihn = from.endsWith('2898541@s.whatsapp.net')
			const botNumber = conn.user.id.split(':')[0]
			const pushname = mek.pushName || 'Sin Nombre'
			const isMe = botNumber.includes(senderNumber)
			const isowner = owner.includes(senderNumber) || isMe
			const mime = (quoted.msg || quoted).mimetype || ''
			const reply = (teks) => {
				conn.sendMessage(from, { text: teks }, { quoted: mek })
			}
			const date1 = moment.tz('Asia/Colombo').format('HH:mm:ss')
			const timuu = moment.tz('Asia/Colombo').format('HH:mm:ss')
const hariRaya = new Date('Apr 02, 2022 01:45:00')
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var ikiya = date.getMonth()
var gakroh = date.getDate();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
    case 0: hari = "MONDAY"; //limitAdd(sender, limit)
    break;
    case 1: hari = "TUESDAY"; //limitAdd(sender, limit)
    break;
    case 2: hari = "WEDNESDAY"; //limitAdd(sender, limit)
    break;
    case 3: hari = "THURSDAY"; //limitAdd(sender, limit)
    break;
    case 4: hari = "THURSDAY"; //limitAdd(sender, limit)
    break;
    case 5: hari = "SATURDAY"; //limitAdd(sender, limit)
    break;
    case 6: hari = "SUNDAY"; //limitAdd(sender, limit)
    break;
    }
    switch(bulan1) {
    case 0: bulan1 = "January"; //limitAdd(sender, limit)
    break;
    case 1: bulan1 = "February"; //limitAdd(sender, limit)
    break;
    case 2: bulan1 = "March"; //limitAdd(sender, limit)
    break;
    case 3: bulan1 = "Aprill"; //limitAdd(sender, limit)
    break;
    case 4: bulan1 = "May"; //limitAdd(sender, limit)
    break;
    case 5: bulan1 = "June"; //limitAdd(sender, limit)
    break;
    case 6: bulan1 = "July"; //limitAdd(sender, limit)
    break;
    case 7: bulan1 = "August"; //limitAdd(sender, limit)
    break;
    case 8: bulan1 = "September"; //limitAdd(sender, limit)
    break;
    case 9: bulan1 = "October"; //limitAdd(sender, limit)
    break;
    case 10: bulan1 = "November"; //limitAdd(sender, limit)
    break;
    case 11: bulan1 = "December"; //limitAdd(sender, limit)
    break;
    }
    switch(gakroh) {
    case 0: gakroh = "sacred"; //limitAdd(sender, limit)
    break;
    case 1: gakroh = "safari"; //limitAdd(sender, limit)
    break;
    case 2: gakroh = "rabi'ul-awal"; //limitAdd(sender, limit)
    break;
    case 3: gakroh = "rabi'ul-akhir"; //limitAdd(sender, limit)
    break;
    case 4: gakroh = "syawal"; //limitAdd(sender, limit)
    break;
    case 5: gakroh = "jumadil-akhir"; //limitAdd(sender, limit)
    break;
    case 6: gakroh = "rejab"; //limitAdd(sender, limit)
    break;
    case 7: gakroh = "syaaban"; //limitAdd(sender, limit)
    break;
    case 8: gakroh = "ramadan"; //limitAdd(sender, limit)
    break;
    case 9: gakroh = "early friday"; //limitAdd(sender, limit)
    break;
    }
    var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
    var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
    myMonths = ["January","February","March","Aprill","May","June","July","August","September","October","November","December"];
    myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    myDoms = ["sacred","safari","first ribal","last ribal","syawal","late Friday","rejab","syaaban","ramadan","early friday"];
    var tgl = new Date();
    detik = tgl.getSeconds();
    menit = tgl.getMinutes();
    jam = tgl.getHours();
    var ampm = jam >= 12 ? 'PM' : 'AM';
    var day = tgl.getDate()
    bulan = tgl.getMonth()
    var thisDay = tgl.getDay(),
    thisDay = myDays[thisDay];
    var yy = tgl.getYear()
    var year = (yy < 1000) ? yy + 1900 : yy;
    const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
if (!isGroup && config.onlygroup == 'true'){return}
switch (command) {
//........................................................Alive................................................................\\

				case 'alive' :  {
					let anu = await fetchJson('https://raw.githubusercontent.com/vihangayt0/server-/main/settings.json')
					await conn.sendMessage(from, { react: { text: `${anu.alive}`, key: mek.key }})
          await conn.sendPresenceUpdate('recording', mek.chat) 
						  const templateButtons = [
						  { urlButton: {displayText: anu.BTN , url: anu.GIT}},
						  { urlButton: {displayText: config.BUTTON , url: config.BUTTONURL }},
						  { quickReplyButton: {displayText: 'MENU 📝', id: prefix +'menu' }} , 
						  { quickReplyButton: {displayText: 'OWNER 🙇‍♂️', id: prefix +'owner' }}   
												  ]
						   const buttonMessage = {
						   caption: config.ALIVE_MSG ,
						   footer: config.FOOTER,
						   templateButtons: templateButtons,
						   image: {url: config.ALIVE_LOGO}
												  }                             
							 await conn.sendMessage(from, buttonMessage )
				}
//____________________________________________menu___________________________________________________________\\
break
case 'help': case 'panel': case 'menu': case 'allmenu': case 'listmenu':{
await conn.sendMessage(from, { react: { text: `📝`, key: mek.key }})  
	const helpmenu = `
*✗ʀᴜɴᴛɪᴍᴇ :* _${runtime(process.uptime())}_
*✗ᴅᴀᴛᴇ :* _${thisDay},_ _${day}_
*✗ᴛɪᴍᴇ :* _${date1}_

*━━━〈  ⭕ Group ⭕  〉━━━*	

*━━━〈  🔍 Search 🔍  〉━━━*
🎭.play
🎭.song
🎭.video
🎭.apk
🎭.img
*━━━〈  📥 Downloader 📥  〉━━━*
💈.yt
💈.ytv
💈.song
💈.video
💈.ytdl
💈.ytmp3
💈.ytmp4
💈.fb
💈.tiktok
💈.ig
💈.twitter
💈.apk
💈.dapk
💈.mediafire  
💈.ehi  
*━━━〈  🛠️ Tools 🛠️  〉━━━*
⚙️.ping
⚙️.runtime
⚙️.restart
*━━━〈  ☄ Conerters ☄  〉━━━*
🪄.sticker
🪄.attp
🪄.pemoji
`
	let buttonshelpm = [
	{buttonId: `${prefix } owner`, buttonText: {displayText: 'Bot Owner'}, type: 1},
	{buttonId: `${prefix } ping`, buttonText: {displayText: 'Speed'}, type: 1}]
				   let buttonMessage = {
					text: helpmenu,
					footer: config.FOOTER,
					templateButtons: buttonshelpm   
				   }
			   conn.sendMessage(from, buttonMessage,{ quoted:mek })
				   }
				   
   break
			//-------------------------------------------------------------------rbg--------------------------------------------------
			case 'rbg': case 'grb':{
			reply(`wait`)			
			let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
			let media = await download(quoted)
			reply(`rbg`)	
			if (/image/.test(mime)) {
			let anu = await TelegraPh(media)
			} else if (!/image/.test(mime)) {
			let anu = await UploadFileUgu(media)
			}
			var rb =  await getBuffer(`https://violetics.pw/api/media/removebg?apikey=2d50-2587-536f&img=${util.format(anu)}`)
			conn.sendMessage(mek.chat, { image: { url: rb }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted: mek }).catch((err) => reply(jsonformat('*error*')))

}

			break		
//........................................................Settings................................................................\\

case 'owner' : {
	conn.sendMessage(from, { react: { text: `🙇‍♂️`, key: mek.key }})  
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:` + config.OWNER_NAME + `\n`
            + 'TEL;type=CELL;type=VOICE;waid=' + config.OWNER_NUMBER + ':+' + config.OWNER_NUMBER + '\n' 
            + 'END:VCARD'
 await conn.sendMessage(from,{ contacts: { displayName: config.OWNER_NAME , contacts: [{ vcard }]  }} , { quoted: mek })
  }
break	
case 'restart': {         
	if (!isowner) throw reply('only for owner')          
	reply('*Restarting conn....*')
	exec(`npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs`)    
	}
break			
	case 'runtime':{          
		conn.sendMessage(from, { react: { text: `⚙️`, key: mek.key }})
		 reply (`${runtime(process.uptime())}`)
		}
		break  	
		case 'qr': case 'qrcode':

		reply(`Running repl....Please wait until repl.it responds...`)						
		var replqr =  await getBuffer(`https://astro-qr.astromdqr.repl.co/`)
								   var qrbutton = [
				{buttonId: `${prefix} qr`, buttonText: {displayText: `Re-run Repl`}, type: 1}
				]
			  let bmffg = {
			   image: replqr,
			   caption:  `*Scan the qr within 10-15 seconds...*`,
			  footer: `Asto-MD QR GEN`,
			  buttons: qrbutton,
			  headerType: 4
			  }     
					await conn.sendMessage(from, bmffg,{ quoted:mek }).catch(err => {
							return('Error!')
						})
		break
		case 'url' : case 'tourl': {
	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
			let media = await conn.downloadAndSaveMediaMessage(quoted)
			if (/image/.test(mime)) {
				let anu = await TelegraPh(media)
				reply(util.format(anu))
			} else if (!/image/.test(mime)) {
				let anu = await UploadFileUgu(media)
				reply('*ʏᴏᴜʀ ᴅɪʀᴇᴄᴛ ʟɪɴᴋ*\n\n'+util.format(anu))
			}
			await fs.unlinkSync(media)
		}
		break
//______________________group setting cmd________________________________________________

case 'kick': {
			if (isBotAdmins) return reply(`*You Must Admin*`)
	let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	await conn.groupParticipantsUpdate(mek.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
			if (!isBotAdmins) return reply(`*You Must Admin*`)
	let users = mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	await conn.groupParticipantsUpdate(mek.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	//-----------------------------------------------------ehi---------------------------------------
	case 'ehi': {
await conn.sendMessage(from, { react: { text: `🗂️`, key: mek.key }})
await reply (`*Please Wait Im Uploading Ehi Files 🗂️*`)         
let ehi = 'https://github.com/vihangayt0/server-/raw/main/Ehi/facebook.ehi'
let ehi1 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/imo.ehi'
let ehi2 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/instergram.ehi'
let ehi3 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/twitter.ehi'
let ehi4 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/whatsapp.ehi'
let ehi5 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/youtube.ehi'
let ehi6 = 'https://github.com/vihangayt0/server-/raw/main/Ehi/zero.ehi'
await conn.sendMessage(from, { document: { url: ehi }, mimetype: 'application/octet-stream', fileName: `🗂️ FaceBook.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi1 }, mimetype: 'application/octet-stream', fileName: `🗂️ Imo.ehi `}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi2 }, mimetype: 'application/octet-stream', fileName: `🗂️ Instergram.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi3 }, mimetype: 'application/octet-stream', fileName: `🗂️ Twitter.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi4 }, mimetype: 'application/octet-stream', fileName: `🗂️ Whatsapp.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi5 }, mimetype: 'application/octet-stream', fileName: `🗂️ Youtube.ehi`}, { quoted: mek })
await conn.sendMessage(from, { document: { url: ehi6 }, mimetype: 'application/octet-stream', fileName: `🗂️ Zero.ehi`}, { quoted: mek })}
           break 
	//------------------------------------------sticker----------------------------------------------------
	case 'sticker' :
        case 's' :
        case 'stic' :
			conn.sendMessage(from, { react: { text: '💈', key: mek.key }})
          const v = sms(conn , mek)
          const isQuotedViewOnce = v.quoted ? (v.quoted.type === 'viewOnceMessage') : false
	        const isQuotedImage = v.quoted ? ((v.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'imageMessage') : false)) : false
	        const isQuotedVideo = v.quoted ? ((v.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (v.quoted.msg.type === 'videoMessage') : false)) : false
          if ((v.type === 'imageMessage') || isQuotedImage) { 
          const cstic = await conn.sendMessage(from , { text: 'Please Wait Im Creating You\'re Sticker' }, { quoted: mek } )
          var nameJpg = getRandom('')
	        isQuotedImage ? await v.quoted.download(nameJpg) : await v.download(nameJpg)
	        var stik = await imageToWebp(nameJpg + '.jpg')
	        writeExif(stik, {packname: pushname, author: ''})
		      .then(x => v.replyS(x))
          await conn.sendMessage(from, { delete: cstic.key })
          }else if ((v.type === 'videoMessage') || isQuotedVideo) {
	       const cstic = await conn.sendMessage(from , { text: 'Please Wait Im Creating You\'re Sticker' }, { quoted: mek } )  
	       var nameMp4 = getRandom('')
	       isQuotedVideo ? await v.quoted.download(nameMp4) : await v.download(nameMp4)
         writeExif(stik, {packname: pushname , author: ''})
		     .then(x => v.replyS(x))
         await conn.sendMessage(from, { delete: cstic.key })
         } else {
	       v.reply("*Need Image Or 1-15 Duration Video")
        }
              break 
		
	//_____________________________________________img down____________________________________________________
	case 'gimage': case 'img': case 'googleimage':{
		conn.sendMessage(from, { react: { text: '🖼️', key: mek.key }})
if (!args[0]) return reply("Enter a search term to get Google Image!")
reply (`*Plz Wait I\'m Uploading 5 Images Of ${q}*`)
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
img1 = n[0].url
img2 = n[1].url
img3 = n[2].url
img4 = n[3].url
img5 = n[4].url
conn.sendMessage(from, { image: { url: img1 }, jpegThumbnail:buf, caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img2 }, jpegThumbnail:buf, caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img3 }, jpegThumbnail:buf, caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img4 }, jpegThumbnail:buf, caption: `` }, { quoted: mek })
conn.sendMessage(from, { image: { url: img5 }, jpegThumbnail:buf, caption: `` }, { quoted: mek })
})
}
break
//........................................................Youtube................................................................\\

				case 'play': case 'yt': {     
    conn.sendMessage(from, { react: { text: '🔍', key: mek.key }})
    if (!q) return reply('Example : ' + prefix + command + ' lelena')
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
let buttons = [
{buttonId: prefix + 'ytmp4 ' +  anu.url + ' 360p', buttonText: {displayText: 'VIDEO'}, type: 1},
{buttonId: '.ytmp3 ' + anu.url + ' 128kbps', buttonText: {displayText: 'AUDIO'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: '┌───[🐉🐉Astro-MD🐉🐉]\n\n  *YOUTUBE DOWNLODER*\n\n│🧚🏻‍♀️ᴛɪᴛʟᴇ: ' + anu.title + '\n\n│ 👀ᴠɪᴇᴡs: ' + anu.views + '\n\n│🖇️ᴜʀʟ: ' + anu.url + '\n\n└───────────◉',
footer: 'sᴇʟᴇᴄᴛ ꜰᴏʀᴍᴀᴛ:',
buttons: buttons,
headerType: 4,
}
conn.sendMessage(from, buttonMessage, { quoted: mek })
}
break
					case 'song':  {
            
    conn.sendMessage(from, { react: { text: '🎧', key: mek.key }})
    if (!q) return reply('Example : ' + prefix + command + ' lelena')
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
let buttons = [
{buttonId: prefix + 'ytdoc ' +  anu.url , buttonText: {displayText: 'DOCUMENT'}, type: 1},
{buttonId: prefix + 'ytmp3 ' + anu.url , buttonText: {displayText: 'AUDIO'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: '┌───[🐉Astro-MD🐉]\n\n  *SONG DOWNLODER*\n\n│🎧sᴏɴɢ: ' + anu.title + '\n\n│ 👀ᴠɪᴇᴡs: ' + anu.views + '\n\n│🖇️ᴜʀʟ: ' + anu.url + '\n\n└───────────◉',
footer: 'sᴇʟᴇᴄᴛ ꜰᴏʀᴍᴀᴛ:',
buttons: buttons,
headerType: 4,
}
conn.sendMessage(from, buttonMessage, { quoted: mek })
}
break
					
					
case 'video':  {

  conn.sendMessage(from, { react: { text: '📽️', key: mek.key }})
  if (!q) return reply('Example : ' + prefix + command + ' lelena')
  let yts = require("yt-search")
  let search = await yts(q)
  let anu = search.videos[0]
  let buttons = [
  {buttonId: prefix + 'video360 ' +  anu.url, buttonText: {displayText: '360p'}, type: 1},
  {buttonId: prefix + 'video480 ' + anu.url, buttonText: {displayText: '480p'}, type: 1},
  {buttonId: prefix + 'video720 ' + anu.url, buttonText: {displayText: '720p'}, type: 1}
  ]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: '┌───[🐉Astro-MD🐉]\n\n  *YT VIDEO DOWNLODER*\n\n│📽️ᴠɪᴅᴇᴏ: ' + anu.title + '\n\n│ 👀ᴠɪᴇᴡs: ' + anu.views + '\n\n│🖇️ᴜʀʟ: ' + anu.url + '\n\n└───────────◉',
  footer: 'sᴇʟᴇᴄᴛ Qᴜᴀʟɪᴛʏ:',
  buttons: buttons,
  headerType: 4,
  }
  conn.sendMessage(from, buttonMessage, { quoted: mek})
  }
                              break
                                          case 'ytmp4': {
                   await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key }})
                   if ( !q.includes('youtu') ) return await conn.sendMessage(from , { text: '*Need yt link*' }, { quoted: mek } )  
                              let { ytv } = require('./lib/y2mate')
                                     let quality = args[1] ? args[1] : '360p'
                                     let media = await ytv(q, quality)
                                     
                                   const load =reply(`*🔄 Downloding ${pushname} your video...*`)
                   const vid = await conn.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: media.title + '.mp4', caption: config.CAPTION }, { quoted: mek })
                  await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
                   conn.sendMessage(from, { react: { text: `🎞️`, key: vid.key }})
                                 }
                                 break
                                  case 'video2': {
                                  await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key }})
                                  if ( !q.includes('youtu') ) return await conn.sendMessage(from , { text: '*Need yt link*' }, { quoted: mek} )  
                                  youtubedl(q).catch(_ => youtubedlv2(q)).then(({ video }) => {
                                    video['720p'].download().then(console.log).catch(console.error)
                                  })
                                  const yt = await youtubedl(q).catch(async () => await  youtubedlv2(q))
                                  const dl_url = await yt.video['720p'].download()
                                  const sz = await yt.video['720p'].fileSize
                                  const tt = await yt.video['360p'].title 
                                 
                                  const load =reply(`*🔄 Downloding ${pushname} your video...*`)
                  await conn.sendMessage(from, { video: { url: dl_url }, mimetype: 'video/mp4', fileName: 'media.title.mp4', caption: tt }, { quoted: mek})
                  await conn.sendMessage(from,{delete : load.key })  
                  await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
                                      }
break
case 'ytdoc': {
   await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key }})
   if ( !q.includes('youtu') ) return await conn.sendMessage(from , { text: '*Need yt link*' }, { quoted: mek } )  
             let { yta } = require('./lib/y2mate')
                     let quality = args[1] ? args[1] : '256kbps'
                     let media = await yta(q, quality)
                    
   const docdown = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_DOWN }, { quoted: mek } )
   await conn.sendMessage(from, { delete: docdown.key })
   const docup = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
   const doc= await conn.sendMessage(from, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: media.title + '.mp3' }, { quoted: mek })
   await  conn.sendMessage(from, { delete: docup.key })
   await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
   conn.sendMessage(from, { react: { text: `🎼`, key: doc.key }})
                 }
                 break
case 'tr': {
   await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key }})
   if ( !q.includes('youtu') ) return await conn.sendMessage(from , { text: '*Need yt link*' }, { quoted: mek } )  
             let { yta } = require('./lib/y2mate')
                     let quality = args[1] ? args[1] : '256kbps'
                     let media = await yta(q, quality)
                    
   const docdown = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_DOWN }, { quoted: mek } )
   await conn.sendMessage(from, { delete: docdown.key })
   const docup = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
   const doc= await conn.sendMessage(from, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: media.title + '.mp3', caption: 'hii' }, { quoted: mek })
   await  conn.sendMessage(from, { delete: docup.key })
   await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
   conn.sendMessage(from, { react: { text: `🎼`, key: doc.key }})
                 }
                 break
                 case 'ytmp3': {
                   await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key }})
                   if ( !q.includes('youtu') ) return await conn.sendMessage(from , { text: '*Need yt link*' }, { quoted: mek } )  
                             let { yta } = require('./lib/y2mate')
                                     let quality = args[1] ? args[1] : '256kbps'
                                     let media = await yta(q, quality)
                                    
                   const auddown = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_DOWN }, { quoted: mek } )
                   await conn.sendMessage(from, { delete: auddown.key })
                   const audup = await conn.sendMessage(from , { text: pushname + ' ' + config.SONG_UP }, { quoted: mek } )
                   const au = await conn.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: media.title + '.mp3' }, { quoted: mek })
                   await  conn.sendMessage(from, { delete: audup.key })
                   await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
                   conn.sendMessage(from, { react: { text: `🎼`, key: au.key }})
                                 }
                                 break
//__________________________________________ig_tiktok_tw____________________________________________
case 'twiter' : case 'ig': case 'igvid' : case 'fb': case 'getvid': {
            
    await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
    if (!q) return await conn.sendMessage(from , { text: '*Need Link*' }, { quoted: mek } )    
let anu = await fetchJson('https://raw.githubusercontent.com/vihangayt0/server-/main/settings.json')
var buf = await getBuffer(anu.THUMB) 
const download = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_DOWN }, { quoted: mek } )
let bicil = require('@bochilteam/scraper')

let urlnya = q

bicil.savefrom(urlnya)

.then(async(result) => {	  	                                	                      	            

for(let i of result.url) {		

if(i.url.includes('mp4')){		           			    				

let link = await getBuffer(i.url)
await conn.sendMessage(from, { delete: download.key })	
const uplode = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_UP }, { quoted: mek } )

conn.sendMessage(from, { video: link, jpegThumbnail:buf,caption: `${config.CAPTION}` }, { quoted: mek }) 
await conn.sendMessage(from, { delete: uplode.key })    
    await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})          

}

}

}).catch((err) => reply('*SORRY I CANT DOWNLOAD ❗*'))

}	
break
case 'tiktok': {
    await conn.sendMessage(from, { react: { text: `⬆️`, key: mek.key }})
    if (!q) return await conn.sendMessage(from , { text: '*Need Link*' }, { quoted: mek } )           
     let bocil = require('@bochilteam/scraper')   
     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
     bocil.tiktokdlv3(`${q}`).then(async (video) => {           
       const up = await conn.sendMessage(from , { text: pushname + ' ' + config.VIDEO_UP }, { quoted: mek } )
       await conn.sendMessage(from, { video: { url: video.video.no_watermark },caption: `${config.CAPTION}`}, { quoted: mek }) 
       await conn.sendMessage(from,{delete : up.key })  
       await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
       }).catch((err) => {
		reply('*SORRY I CANT DOWNLOAD ❗*')})
  }
  break
  //__________________________________________________________apk down_____________________________________
  case 'apk' :
    case 'findapk':{
       if (!q) return reply(`*Need Name*\n\n*EG:* _.apk whatsapp_`)
       let search = await fetchJson('https://bobiz-api.herokuapp.com/api/playstore?q=' + q)
let link = search[0].link
let name = search[0].title
let data = await fetchJson(`https://bobiz-api.herokuapp.com/api/apk?url=https://play.google.com${link}`)
let buttons = [
{buttonId: `${prefix}dapk https://play.google.com${link}`, buttonText: {displayText: '📩 Download Apk 📩'}, type: 1}
]
let buttonMessage = {
image: { url: data.icon },
caption: `*╭──[📂 PLAYSTORE DOWN 📂]─◎*
*╭─────────────◎*
*│🚀 App Name :* _${name}_
*│🧑🏻‍💻 Company :* _${data.developer}_
*│⭐ Ratings :* _${data.ratings}_
*│🔎 Apk Url :* _https://play.google.com${link}_
*╰─────────────◎*`,
footer: `${config.FOOTER}`,
buttons: buttons,
headerType: 4,
}
conn.sendMessage(from, buttonMessage, { quoted: mek })        
}     
break
case 'dapk':      
try {
if(!q) return await conn.sendMessage(from , { text: 'need app link' }, { quoted: mek } ) 
await conn.sendMessage(from, { react: { text: `🔄`, key: mek.key }})
    const load_d = await conn.sendMessage(from , { text: pushname + ' ' + config.FILE_DOWN}, { quoted: mek } )
    await  conn.sendMessage(from, { delete: load_d.key })
    const load_u = await conn.sendMessage(from , { text: pushname + ' ' + config.FILE_UP}, { quoted: mek } )
    if (!args[0]) return reply(`Example: ${prefix + command} `)
let apk = `https://apk-dl2.herokuapp.com/api/apk-dl?url=`+ q
let data = await fetchJson(`https://bobiz-api.herokuapp.com/api/apk?url=`+ q)
const U = await conn.sendMessage(from, {document: { url: apk }, mimetype: `application/vnd.android.package-archive`, fileName: `${data.name}.apk`}, {quoted: mek}) 
await conn.sendMessage(from, { react: { text: `📁`, key: U.key }})     
await  conn.sendMessage(from, { delete: load_u.key })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }})
} catch(e) {
 reply(`*ERROR*`)
}           
//__________________________mfire__-_____________________
break
case "mediafire" : case "mfire" :  {
	if (!q) return await conn.sendMessage(from , { text: 'need mediafire link' }, { quoted: mek } )
	if (!q.includes('mediafire.com/file')) return await conn.sendMessage(from , { text: 'need mediafire link' }, { quoted: mek } )
	const data = await axios.get('https://bobiz-api.herokuapp.com/api/mfire?url=' + q)
	const file = data.data
if ( file.filesize > 150000) return await conn.sendMessage(from , { text: 'max size reached' }, { quoted: mek } )
const fileup = await conn.sendMessage(from , { text: pushname + config.FILE_DOWN }, { quoted: mek } )
await conn.sendMessage(from, { delete: fileup.key })
const filedown = await conn.sendMessage(from , { text: pushname + config.FILE_UP }, { quoted: mek } )
const doc = await conn.sendMessage(from , { document : { url : file.url  } , mimetype : file.ext , fileName : file.filename } , { quoted: mek })
await conn.sendMessage(from, { delete: filedown.key })	
	} 
	
		  
	  break
	  case 'ping':{     
		const start = new Date().getTime()
		const end = new Date().getTime()
		await reply('```Pong``` ' + (end - start) + ' *MS*' )
		}
		break  
default:
					if (isowner && body.startsWith('>')) {
						try {
							await reply(util.format(await eval(`(async () => {${body.slice(1)}})()`)))
						} catch(e) {
							await reply(util.format(e))
						}
					}
					
			}
			
		} catch (e) {
			const isError = String(e)
			console.log(isError)
		}
	})
}

connectToWA()
