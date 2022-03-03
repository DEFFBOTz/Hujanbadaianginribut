///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///Deffri Gans
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///Deffri Gans
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///Deffri Gans
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///Deffri Gans
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///Deffri Gans
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///Deffri Gans
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///Deffri Gans
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const yts = require( 'yt-search')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { runtime, sleep } = require('./lib/myfunc')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
//SETTING//
autoread = setting.autoread
autocomposing = setting.autocomposing
autorecording = setting.autorecording
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
fake = setting.Fake
pe = 'wa.me/6285954993954?utm_medium=copy_'
faketeks = '©Created By Deffri Gans'
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
AlphaBot = 'Alphabot'
Leyscoders = 'IkyOgiwara'
ZeksKey = 'apivinz'
lolkey = 'RIFQIBOTZ'
// ࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
const fakebc = fs.readFileSync ('./image/fakebc.jpg')
const fakeimage = fs.readFileSync ('./image/deff.jpg')
const thumb = fs.readFileSync("./media/thumb.jpg");
fakeimg = fs.readFileSync('./media/thumb.jpg')

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
		
module.exports = deff = async (deff, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		var timestampi = speed();
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const latensyi = speed() - timestampi
		const botNumber = deff.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? deff.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await deff.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const senderNumber = sender.split("@")[0]
        const hour_now = moment().format('HH:mm:ss')
		const conts = mek.key.fromMe ? deff.user.jid : deff.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? deff.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await deff.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}

//━━━━━━━━━━━━━━━[ Sticker WM ]━━━━━━━━━━━━━━━\\

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif() 

//𓂸𓂸𓂸𓂸𓂺𓂺𓂺[Image]𓂺𓂺𓂺𓂺𓂺𓂺/
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

mess = {
wait: '╔WAIT╛SEDANG DI PROSES',
eror: '╔MAAF╛TERJADI KESALAHAN',
success: '╔DONE╛',
error: {
stick: '╔REPLY STIKER DENGAN BENAR!╛',
Iv: '╔LINK INVALID!╛'
},
only: {
group: '╔MAAF╛FITUR INI HANYA UNTUK DI DALAM GRUP!',
owner: '╔MAAF╛FITUR INI KHUSUS OWNER BOT',
admin: '╔MAAF╛FITUR INI KHUSUS ADMIN GROUP',
Badmin: '╔MAAF╛JADIKAN BOT SEBAGAI ADMIN'
}
}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            deff.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
//BUTTON TEXT//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
deff.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//BUTTON IMAGE//
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await deff.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON VIDEO//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await deff.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON LOCATION//
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}




			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = deff.contacts[from] != undefined ? deff.contacts[from].vname || deff.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Gweh'; if (!author) author = 'Zenix';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})
	          }

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       deff.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       deff.sendMessage(from, hasil, type, options).catch(e => {
	       deff.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = deff.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝐌𝐄𝐍𝐔","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return deff.relayWAMessage(po, {waitForAck: true})
        }
const reply = (teks) => {
deff.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
deff.sendMessage(hehe, teks, text)
}
const fakeyt = (teks) => {
deff.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `${botname}`,
                "mediaType": "10",
                "mediaUrl": `${pe}`,
                "thumbnailUrl": "https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg",
                "thumbnail": fakeimage,
                "sourceUrl": `${pe}`,
},mentionedJid:[sender]}, quoted : mek})
};
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? deff.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : deff.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			deff.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        const fakestatus = (teks) => {
            deff.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/deff.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `Runtime : ${runtime(process.uptime())}`,
                 "title": `Deffri Gans`,
                 'jpegThumbnail': fs.readFileSync("./media/thumb.jpg"),
                        }
	                  } 
                     }
        const fakegroup = (teks) => {
            deff.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/deff.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999,
                            status: 1,
                            surface : 1,
                            message: `Hai Kak ${pushname} ${ucapanWaktu}`, 
                            orderTitle: `${botname}`,
                            thumbnail: thumb, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    deff.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const hideTag = async function(from, text){
           let anu = await deff.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           deff.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./media/deff.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
fakeyt(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
deff.groupRemove(from, [kic]).catch((e) => { fakeyt(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
fakeyt('Tandai telah dibaca\n'.repeat(300))
fakeyt(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
deff.groupRemove(from, [sender])
}     

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

if (autoread){
deff.chatRead(from, "read")
} else if (autocomposing) {
deff.updatePresence(from, Presence.composing)
} else if (autorecording) {
deff.updatePresence(from, Presence.recording)
}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam🌑'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌒'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🏝️'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️☀️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam💫'
}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇//

switch(command) {

case 'menu':
teks = `hai Saya ${botname} 👋

┏━➤ *INFO BOT* 
*┃┃* Creator Bot : Deffri Gans
*┃┃* Nama Owner : ${ownername}
*┃┃* Nama Bot : ${botname}
*┃┃* Prefix : Multi Prefix
*┃┃* Baterai : Unlimited%
*┃┃* Speed : ${latensyi.toFixed(4)} second
*┃┃* Language : Javascript
*┃┗━━━━━━━━*
*┃◗ Thanks To Allah S.W.T*
*┃◗ Thank To Ortu*
*┃◗ Thank To Zero YT7*
*┃◗ Thank To zeeone ofc*
*┃◗ Thank To My Zenixx*
*┃◗ Thank To Herman Channel*
*┃◗ Thank To Firra Cans BOTz*
*┃◗ Thank To Hadi Official*
*┃◗ Thanks To All Creator BOTz*
*┗━━━━━━━ •*`
img = fs.readFileSync('./image/deff.jpg')
trans = `Dilarang Spam Bot!! Jeda Minimal 5detik Spam/Call Auto Baned!.Mohon Hargai Creator Bot\nRuntime : ${runtime(process.uptime())}`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'MENU' }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIP' }, type: 1 }
        ]
        sendButImage(from, teks, trans, img, but, {quoted: ftrol})
break
case 'allmenu':
menunya = `⌜𝐺𝑅𝑂𝑈𝑃 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}antilink _on|off_
🦟ꦿ ${prefix}antivirtex _on|off_
🦟ꦿ ${prefix}welcome _on|off_
🦟ꦿ ${prefix}group _buka|tutup_
🦟ꦿ ${prefix}promote _@tag|reply_
🦟ꦿ ${prefix}demote _@tag|reply_
🦟ꦿ ${prefix}add _628xx_
🦟ꦿ ${prefix}kick _@tag|reply
🦟ꦿ ${prefix}setpp _reply|cap_
🦟ꦿ ${prefix}setdesc _teks_
🦟ꦿ ${prefix}setname _teks_
🦟ꦿ ${prefix}hidetag _teks_
🦟ꦿ ${prefix}linkgrup
🦟ꦿ ${prefix}infogrup
🦟ꦿ ${prefix}listonline
🦟ꦿ ${prefix}resetlinkgrup

⌜𝑆𝑇𝐼𝐶𝐾𝐸𝑅 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}stiker _reply foto_
🦟ꦿ ${prefix}ttp _text_
🦟ꦿ ${prefix}semoji 🗿
🦟ꦿ ${prefix}attp _text_
🦟ꦿ ${prefix}toimg _reply stiker_
🦟ꦿ ${prefix}patrick

⌜𝑂𝑊𝑁𝐸𝑅 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}owner
🦟ꦿ ${prefix}bc _Teks_
🦟ꦿ ${prefix}exif

⌜𝐼𝑆𝐿𝐴𝑀 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}listsurah
🦟ꦿ ${prefix}alquran
🦟ꦿ ${prefix}jadwalsholat
🦟ꦿ ${prefix}asmaulhusna
🦟ꦿ ${prefix}alquranaudio
🦟ꦿ ${prefix}kisahnabi

⌜𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}play _judul_
🦟ꦿ ${prefix}ytmp3 _send link yt_
🦟ꦿ ${prefix}ytmp4 _send link yt_
🦟ꦿ ${prefix}tiktok _send link tt_
🦟ꦿ ${prefix}tiktoknowm _send link tt_
🦟ꦿ ${prefix}tiktokwm _send link tt_

⌜𝑇𝐴𝐺 𝑀𝐸𝑁??⌟
🦟ꦿ ${prefix}ganteng
🦟ꦿ ${prefix}cantik
🦟ꦿ ${prefix}jelek
🦟ꦿ ${prefix}goblok
🦟ꦿ ${prefix}bego
🦟ꦿ ${prefix}pinter
🦟ꦿ ${prefix}jago
🦟ꦿ ${prefix}nolep
🦟ꦿ ${prefix}monyet 	 
🦟ꦿ ${prefix}babi
🦟ꦿ ${prefix}beban
🦟ꦿ ${prefix}baik
🦟ꦿ ${prefix}jahat
🦟ꦿ ${prefix}anjing
🦟ꦿ ${prefix}haram
🦟ꦿ ${prefix}kontol
🦟ꦿ ${prefix}pakboy
🦟ꦿ ${prefix}pakgirl
🦟ꦿ ${prefix}wibu
🦟ꦿ ${prefix}hebat
🦟ꦿ ${prefix}sadboy
🦟ꦿ ${prefix}sadgirl 

⌜𝐴𝑁𝐼𝑀𝐸 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}husbu
🦟ꦿ ${prefix}loli
🦟ꦿ ${prefix}milf
🦟ꦿ ${prefix}waifu

⌜𝑀𝐴𝐾𝐸𝑅 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}blackpink
🦟ꦿ ${prefix}neon
🦟ꦿ ${prefix}greenneon
🦟ꦿ ${prefix}advanceglow
🦟ꦿ ${prefix}futureneon
🦟ꦿ ${prefix}sandwriting
🦟ꦿ ${prefix}sandsummer
🦟ꦿ ${prefix}sandengraved
🦟ꦿ ${prefix}metaldark
🦟ꦿ ${prefix}neonlight
🦟ꦿ ${prefix}holographic
🦟ꦿ ${prefix}text1917
🦟ꦿ ${prefix}minion
🦟ꦿ ${prefix}deluxesilver
🦟ꦿ ${prefix}newyearcard
🦟ꦿ ${prefix}bloodfrosted
🦟ꦿ ${prefix}halloween
🦟ꦿ ${prefix}jokerlogo
🦟ꦿ ${prefix}fireworksparkle
🦟ꦿ ${prefix}natureleaves
🦟ꦿ ${prefix}bokeh
🦟ꦿ ${prefix}toxic
🦟ꦿ ${prefix}strawberry
🦟ꦿ ${prefix}box3d
🦟ꦿ ${prefix}roadwarning
🦟ꦿ ${prefix}breakwall
🦟ꦿ ${prefix}icecold
🦟ꦿ ${prefix}luxury
🦟ꦿ ${prefix}cloud
🦟ꦿ ${prefix}summersand
🦟ꦿ ${prefix}horrorblood
🦟ꦿ ${prefix}thunder
🦟ꦿ ${prefix}8bit _Teks1&Teks2_
🦟ꦿ ${prefix}pornhub _Teks1&Teks2_
🦟ꦿ ${prefix}glitch _Teks1&Teks2_
🦟ꦿ ${prefix}glitch2 _Teks1&Teks2_
🦟ꦿ ${prefix}layered _Teks1&Teks2_
🦟ꦿ ${prefix}3dsteel _Teks1&Teks2_
🦟ꦿ ${prefix}realistic _Teks1&Teks2_
🦟ꦿ ${prefix}lionlogo _Teks1&Teks2_
🦟ꦿ ${prefix}ninjalogo _Teks1&Teks2_
🦟ꦿ ${prefix}wolf _Teks1&Teks2_
🦟ꦿ ${prefix}wolf2 _Teks1&Teks2_
🦟ꦿ ${prefix}halloween2 _Teks1&Teks2_
🦟ꦿ ${prefix}marvel _Teks1&Teks2_
🦟ꦿ ${prefix}marvel2 _Teks1&Teks2_
🦟ꦿ ${prefix}cinematichorror _Teks1&Teks2_
🦟ꦿ ${prefix}avengers _Teks1&Teks2_
🦟ꦿ ${prefix}graffiti3 _Teks1&Teks2_
🦟ꦿ ${prefix}captainamerica _Teks1&Teks2_
🦟ꦿ ${prefix}girlneko _Teks1&Teks2_
🦟ꦿ ${prefix}sadboy _Teks1&Teks2_
🦟ꦿ ${prefix}kaneki _Teks1&Teks2_
🦟ꦿ ${prefix}rem _Teks1&Teks2_
🦟ꦿ ${prefix}lolimaker _Teks1&Teks2_
🦟ꦿ ${prefix}gura _Teks1&Teks2_
`
img = fs.readFileSync('./image/deff.jpg')
trans = `halo Ka ${pushname} 👋`
but = [
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'Sewa Bot' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 }
        ]
        sendButImage(from, trans, menunya, img, but, {quoted: ftrol})
                  break
case 'simpelmenu':
case 'command':
case 'listmenu':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: 'DEFFBOTz',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Menunya disini`,
 sections: [
                     {
                      "title": `${tanggal}`,
 rows: [
                           {
                        "title": "--->Owner Menu[🤴]",
                       "description" :"Menampilkan Menu Owner",
                       "rowId": `${prefix}ownermenu`
                           },
                           {                         
                              "title": "--->Maker Menu[📝]",
                              "description" :"Menampilkan Menu Maker",
                              "rowId": `${prefix}makermenu`
                           },
                           {                         
                              "title": "--->Kerang Menu[🐚]",
                              "description" :"Menampilkan Menu Kerang",
                              "rowId": `${prefix}kerangmenu`
                           },
                           {                         
                              "title": "--->Random Menu[🌏]",
                              "description" :"Menampilkan Menu Random",
                              "rowId": `${prefix}randommenu`
                           },
                           {                         
                              "title": "--->Download Menu[📤]",
                              "description" :"Menampilkan Menu Download",
                              "rowId": `${prefix}downloadmenu`
                           },
                           {                         
                              "title": "--->Hewan Menu[🦊]",
                              "description" :"Menampilkan Menu Hewan",
                              "rowId": `${prefix}hewanmenu`
                           },
                           {                         
                              "title": "--->Sound Menu[🎧]",
                              "description" :"Menampilkan Menu Sound",
                              "rowId": `${prefix}soundmenu`
                           },
                           {                         
                              "title": "--->Sticker Menu[🗿]",
                              "description" :"Menampilkan Menu Sticker",
                              "rowId": `${prefix}stickermenu`
                           },
                           {                         
                              "title": "--->Group Menu[🐣]",
                              "description" :"Menampilkan Menu Grup",
                              "rowId": `${prefix}groupmenu`
                           },
                        ]
                     }],
 listType: 1
}
deff.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
break
case 'groupmenu':
menunya = `⌜𝐺𝑅𝑂𝑈𝑃 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}antilink _on|off_
🦟ꦿ ${prefix}antivirtex _on|off_
🦟ꦿ ${prefix}welcome _on|off_
🦟ꦿ ${prefix}group _buka|tutup_
🦟ꦿ ${prefix}promote _@tag|reply_
🦟ꦿ ${prefix}demote _@tag|reply_
🦟ꦿ ${prefix}add _628xx_
🦟ꦿ ${prefix}kick _@tag|reply
🦟ꦿ ${prefix}setpp _reply|cap_
🦟ꦿ ${prefix}setdesc _teks_
🦟ꦿ ${prefix}setname _teks_
🦟ꦿ ${prefix}hidetag _teks_
🦟ꦿ ${prefix}linkgrup
🦟ꦿ ${prefix}infogrup
🦟ꦿ ${prefix}listonline
🦟ꦿ ${prefix}resetlinkgrup
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'stickermenu':
menunya = `⌜𝑆𝑇𝐼𝐶𝐾𝐸𝑅 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}stiker _reply foto_
🦟ꦿ ${prefix}ttp _text_
🦟ꦿ ${prefix}semoji 🗿
🦟ꦿ ${prefix}attp _text_
🦟ꦿ ${prefix}toimg _reply stiker_
🦟ꦿ ${prefix}patrick
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ownermenu':
menunya = `⌜𝑂𝑊𝑁𝐸𝑅 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}owner
🦟ꦿ ${prefix}bc _Teks_
🦟ꦿ ${prefix}exif
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'islamicmenu':
menunya = `⌜𝐼𝑆𝐿𝐴𝑀 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}listsurah
🦟ꦿ ${prefix}alquran
🦟ꦿ ${prefix}jadwalsholat
🦟ꦿ ${prefix}asmaulhusna
🦟ꦿ ${prefix}alquranaudio
🦟ꦿ ${prefix}kisahnabi
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':
menunya = `⌜𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}play _judul_
🦟ꦿ ${prefix}ytmp3 _send link yt_
🦟ꦿ ${prefix}ytmp4 _send link yt_
🦟ꦿ ${prefix}tiktok _send link tt_
🦟ꦿ ${prefix}tiktoknowm _send link tt_
🦟ꦿ ${prefix}tiktokwm _send link tt_
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'tagmenu':
menunya = `⌜𝑇𝐴𝐺 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}ganteng
🦟ꦿ ${prefix}cantik
🦟ꦿ ${prefix}jelek
🦟ꦿ ${prefix}goblok
🦟ꦿ ${prefix}bego
🦟ꦿ ${prefix}pinter
🦟ꦿ ${prefix}jago
🦟ꦿ ${prefix}nolep
🦟ꦿ ${prefix}monyet 	 
🦟ꦿ ${prefix}babi
🦟ꦿ ${prefix}beban
🦟ꦿ ${prefix}baik
🦟ꦿ ${prefix}jahat
🦟ꦿ ${prefix}anjing
🦟ꦿ ${prefix}haram
🦟ꦿ ${prefix}kontol
🦟ꦿ ${prefix}pakboy
🦟ꦿ ${prefix}pakgirl
🦟ꦿ ${prefix}wibu
🦟ꦿ ${prefix}hebat
🦟ꦿ ${prefix}sadboy
🦟ꦿ ${prefix}sadgirl 
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'animemenu':
menunya = `⌜𝐴𝑁𝐼𝑀𝐸 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}husbu
🦟ꦿ ${prefix}loli
🦟ꦿ ${prefix}milf
??ꦿ ${prefix}waifu
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makermenu':
menunya = `⌜𝑀𝐴𝐾𝐸𝑅 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}blackpink
🦟ꦿ ${prefix}neon
🦟ꦿ ${prefix}greenneon
🦟ꦿ ${prefix}advanceglow
🦟ꦿ ${prefix}futureneon
🦟ꦿ ${prefix}sandwriting
🦟ꦿ ${prefix}sandsummer
🦟ꦿ ${prefix}sandengraved
🦟ꦿ ${prefix}metaldark
🦟ꦿ ${prefix}neonlight
??ꦿ ${prefix}holographic
🦟ꦿ ${prefix}text1917
🦟ꦿ ${prefix}minion
🦟ꦿ ${prefix}deluxesilver
🦟ꦿ ${prefix}newyearcard
🦟ꦿ ${prefix}bloodfrosted
🦟ꦿ ${prefix}halloween
🦟ꦿ ${prefix}jokerlogo
??ꦿ ${prefix}fireworksparkle
🦟ꦿ ${prefix}natureleaves
🦟ꦿ ${prefix}bokeh
🦟ꦿ ${prefix}toxic
🦟ꦿ ${prefix}strawberry
🦟ꦿ ${prefix}box3d
🦟ꦿ ${prefix}roadwarning
🦟ꦿ ${prefix}breakwall
🦟ꦿ ${prefix}icecold
🦟ꦿ ${prefix}luxury
🦟ꦿ ${prefix}cloud
🦟ꦿ ${prefix}summersand
🦟ꦿ ${prefix}horrorblood
🦟ꦿ ${prefix}thunder
🦟ꦿ ${prefix}8bit _Teks1&Teks2_
🦟ꦿ ${prefix}pornhub _Teks1&Teks2_
🦟ꦿ ${prefix}glitch _Teks1&Teks2_
🦟ꦿ ${prefix}glitch2 _Teks1&Teks2_
🦟ꦿ ${prefix}layered _Teks1&Teks2_
🦟ꦿ ${prefix}3dsteel _Teks1&Teks2_
🦟ꦿ ${prefix}realistic _Teks1&Teks2_
🦟ꦿ ${prefix}lionlogo _Teks1&Teks2_
🦟ꦿ ${prefix}ninjalogo _Teks1&Teks2_
🦟ꦿ ${prefix}wolf _Teks1&Teks2_
🦟ꦿ ${prefix}wolf2 _Teks1&Teks2_
🦟ꦿ ${prefix}halloween2 _Teks1&Teks2_
🦟ꦿ ${prefix}marvel _Teks1&Teks2_
🦟ꦿ ${prefix}marvel2 _Teks1&Teks2_
🦟ꦿ ${prefix}cinematichorror _Teks1&Teks2_
🦟ꦿ ${prefix}avengers _Teks1&Teks2_
🦟ꦿ ${prefix}graffiti3 _Teks1&Teks2_
🦟ꦿ ${prefix}captainamerica _Teks1&Teks2_
🦟ꦿ ${prefix}girlneko _Teks1&Teks2_
🦟ꦿ ${prefix}sadboy _Teks1&Teks2_
🦟ꦿ ${prefix}kaneki _Teks1&Teks2_
🦟ꦿ ${prefix}rem _Teks1&Teks2_
🦟ꦿ ${prefix}lolimaker _Teks1&Teks2_
🦟ꦿ ${prefix}gura _Teks1&Teks2_
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'hewanmenu':
menunya = `⌜ _HEWAN MENU_ ⌟
🦟ꦿ ${prefix}fox
🦟ꦿ ${prefix}panda
🦟ꦿ ${prefix}panda2
🦟ꦿ ${prefix}koala
🦟ꦿ ${prefix}bird
🦟ꦿ ${prefix}cat
🦟ꦿ ${prefix}dog
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'soundmenu':
menunya = `⌜𝑆𝑂𝑈𝑁𝐷 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}sound1
🦟ꦿ ${prefix}sound2
🦟ꦿ ${prefix}sound3
🦟ꦿ ${prefix}sound4
🦟ꦿ ${prefix}sound5
🦟ꦿ ${prefix}sound6
🦟ꦿ ${prefix}sound7
🦟ꦿ ${prefix}sound8
🦟ꦿ ${prefix}sound9
🦟ꦿ ${prefix}sound10
🦟ꦿ ${prefix}sound11
🦟ꦿ ${prefix}sound12
🦟ꦿ ${prefix}sound13
🦟ꦿ ${prefix}sound14
🦟ꦿ ${prefix}sound15
🦟ꦿ ${prefix}sound16
🦟ꦿ ${prefix}sound17
🦟ꦿ ${prefix}sound18
🦟ꦿ ${prefix}sound19
🦟ꦿ ${prefix}sound20
🦟ꦿ ${prefix}sound21
🦟ꦿ ${prefix}sound22
🦟ꦿ ${prefix}sound23
🦟ꦿ ${prefix}sound24
🦟ꦿ ${prefix}sound25
🦟ꦿ ${prefix}sound26
🦟ꦿ ${prefix}sound27
🦟ꦿ ${prefix}sound28
🦟ꦿ ${prefix}sound29
🦟ꦿ ${prefix}sound30
🦟ꦿ ${prefix}sound31
🦟ꦿ ${prefix}sound32
🦟ꦿ ${prefix}sound33
🦟ꦿ ${prefix}sound34
🦟ꦿ ${prefix}sound35
🦟ꦿ ${prefix}sound36
🦟ꦿ ${prefix}sound37
🦟ꦿ ${prefix}sound38
🦟ꦿ ${prefix}sound39
🦟ꦿ ${prefix}sound40
🦟ꦿ ${prefix}sound41
🦟ꦿ ${prefix}sound42
🦟ꦿ ${prefix}sound43
🦟ꦿ ${prefix}sound44
🦟ꦿ ${prefix}sound45
🦟ꦿ ${prefix}sound46
🦟ꦿ ${prefix}sound47
🦟ꦿ ${prefix}sound48
🦟ꦿ ${prefix}sound49
🦟ꦿ ${prefix}sound50
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'kerangmenu':
menunya = `⌜𝐾𝐸𝑅𝐴𝑁𝐺 𝑀𝐸𝑁𝑈⌟
🦟ꦿ ${prefix}apakah [query]
🦟ꦿ ${prefix}bisakah [query]
🦟ꦿ ${prefix}kapankah [query]
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break
case 'sewa':
case 'sewabot':
daftar = `Halo ka ${pushname}
━━━━━ • ஜ • ❈ • ஜ • ━━━━━
Sementara Dalam Pengembangan
BOT free Add To Group
❗ *NOTE*
Gunakan Bot Dengan Bijak,
Jangan Spam Command BOT
Gunakan Command Sebutuhnya aja
Wajib Izin Owner Untuk Add BOT Ke gc
Jangan Asal Masukin Group

‼️‼️
_Jika Melanggar Peraturan Diatas BOT Otomatis Keluar Dari Group Dan Gak Balik Lagi!_

BOT Tydak Respon Berarti Fitur Lagi Error Atau BOT Sedang Offline
━━━━━ • ஜ • ❈ • ஜ • ━━━━━
`
deff.sendMessage(from, daftar, text, {quoted: ftrol})
                  break
//Khusus Sound ygy+

case 'sound1':
satu = fs.readFileSync('./sound/sound1.mp3');
deff.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./sound/sound2.mp3');
deff.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./sound/sound3.mp3');
deff.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./sound/sound4.mp3');
deff.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./sound/sound5.mp3');
deff.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./sound/sound6.mp3');
deff.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./sound/sound7.mp3');
deff.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./sound/sound8.mp3');
deff.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./sound/sound9.mp3');
deff.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./sound/sound10.mp3');
deff.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./sound/sound11.mp3');
deff.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./sound/sound12.mp3');
deff.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./sound/sound13.mp3');
deff.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./sound/sound14.mp3');
deff.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./sound/sound15.mp3');
deff.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./sound/sound16.mp3');
deff.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./sound/sound17.mp3');
deff.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
delapanbelas = fs.readFileSync('./sound/sound18.mp3');
deff.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./sound/sound19.mp3');
deff.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./sound/sound20.mp3');
deff.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./sound/sound21.mp3');
deff.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./sound/sound22.mp3');
deff.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./sound/sound23.mp3');
deff.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./sound/sound24.mp3');
deff.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./sound/sound25.mp3');
deff.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./sound/sound26.mp3');
deff.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./sound/sound27.mp3');
deff.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./sound/sound28.mp3');
deff.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./sound/sound29.mp3');
deff.sendMessage(from, duasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./sound/sound30.mp3');
deff.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./sound/sound31.mp3');
deff.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./sound/sound32.mp3');
deff.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./sound/sound33.mp3');
deff.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./sound/sound34.mp3');
deff.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./sound/sound35.mp3');
deff.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./sound/sound35.mp3');
deff.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./sound/sound36.mp3');
deff.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./sound/sound37.mp3');
deff.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./sound/sound38.mp3');
deff.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./sound/sound39.mp3');
deff.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./sound/sound40.mp3');
deff.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./sound/sound41.mp3');
deff.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./sound/sound42.mp3');
deff.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./sound/sound43.mp3');
deff.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./sound/sound44.mp3');
deff.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./sound/sound45.mp3');
deff.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./sound/sound46.mp3');
deff.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./sound/sound47.mp3');
deff.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./sound/sound48.mp3');
deff.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./sound/sound49.mp3');
deff.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./sound/sound50.mp3');
deff.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

//Khusus Kerang Ajaib Disini YGY

case 'kapankah':
				if (args.length < 1) return deff.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Kemarin','Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					deff.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await (sender)
					break
case 'bisakah':
		if (args.length < 1) return deff.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapak kau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					deff.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await (sender)
					break
case 'apakah':
           if (args.length < 1) return deff.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi','Mungkin']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					deff.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await (sender)
					break

//----> 2 TEXT <----//

case '8bit':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'pornhub':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'layered':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case '3dsteel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'halloween2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'cinematichorror':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'captainamerica':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'girlneko':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'sadboy':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'kaneki':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'rem':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lolimaker':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'gura':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'sticker':
					case 'stiker':
					case 's':
					fakeyt(`Membuat Sticker...`)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await deff.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											deff.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await deff.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											deff.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'ttp':  
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp 𖨇𝐻𝑒𝑟𝑚𝑎𝑛᭄ 𝐵𝑜𝑡𝑧𓅂 Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    deff.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
          case 'attp':
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           deff.sendMessage(from, buffer, sticker, { quoted: mek })
            break          
            case 'toimg':
			if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await deff.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
deff.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
case 'patrick':
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=172e5b27c5299af6bfdb45b1`)
			deff.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
case 'semoji':
       case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch { 
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=172e5b27c5299af6bfdb45b1`)
              await deff.sendMessage(from, ini_buffer, sticker, { quoted: ftrol })
              break
case 'y':
fakeyt(`y`)
break
case 'tomp3':
    deff.updatePresence(from, Presence.composing)
    if (!isQuotedVideo) return reply('Reply Video Nya Kak')
    reply(mess.wait)
    encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    mediad = await deff.downloadAndSaveMediaMessage(encmediad)
    ran = getRandom('.mp4')
    exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
       fs.unlinkSync(mediad)
       if (err) return reply(mess.error.api)
       mhee = fs.readFileSync(ran)
       deff.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 234, quoted: mek })
       fs.unlinkSync(ran)
    })
    break
//══════════[ EXIF NYA GAN ]════════════════════════════//
           case 'exif':
                      if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				     break
case 'runtime':
				fakeyt(`${runtime(process.uptime())}`)
				break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
deff.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
fakeyt(`_Tuh kontak Owner Ku_`)
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await deff.chats.all()
             if (isMedia && !deff.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(deff).replace('quotedM','m')).message.extendedTextMessage.contextInfo : deff
             bc100 = await deff.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             deff.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             deff.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${botname}`,
			"buttons": [
			{"buttonId": `${prefix}y`,
			"buttonText": {"displayText": "Okeh Bangg"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakebc,
			}}, MessageType.buttonsMessage )
}
             fakeyt('Suksess broadcast')
}
             break
case 'SCRIP':
case 'sc':
case 'script':
	        deff.sendMessage(from, 'Bot Ini Menggunakan Sc free Dan Tydak Diperjual Beli kan',MessageType.text, {quoted: ftrol})
	         break

//islamic Menu:*

case 'listsurah':{
    get = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=172e5b27c5299af6bfdb45b1`)
    get_result = get.result
    ini_txt = 'List Surah:\n'
    for (var x in get_result) {
        ini_txt += `${x}. ${get_result[x]}\n`
    }
    fakeyt(ini_txt)
    }
    break
case 'alquran':{
    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=172e5b27c5299af6bfdb45b1`
    quran = await fetchJson(urls)
    result = quran.result
    ayat = result.ayat
    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
    for (var x of ayat) {
        arab = x.arab
        nomor = x.ayat
        latin = x.latin
        indo = x.indonesia
        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
    }
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    fakeyt(ini_txt)}
    break
case 'asmaulhusna':{
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=172e5b27c5299af6bfdb45b1`)
    get_result = get_result.result
    ini_txt = `No : ${get_result.index}\n`
    ini_txt += `Latin: ${get_result.latin}\n`
    ini_txt += `Arab : ${get_result.ar}\n`
    ini_txt += `Indonesia : ${get_result.id}\n`
    ini_txt += `English : ${get_result.en}`
    fakeyt(ini_txt)}
    break
case 'kisahnabi':{
    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=172e5b27c5299af6bfdb45b1`)
    get_result = get_result.result
    ini_txt = `Name : ${get_result.name}\n`
    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
    ini_txt += `Umur : ${get_result.age}\n`
    ini_txt += `Tempat : ${get_result.place}\n`
    ini_txt += `Story : \n${get_result.story}`
    fakeyt(ini_txt)}
    break
case 'alquranaudio':{
    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
    surah = args[0]
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=172e5b27c5299af6bfdb45b1`)
    await deff.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: 'audio/mpeg' })
    }
    break
case 'jadwalsholat':{
    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
    daerah = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=172e5b27c5299af6bfdb45b1`)
    get_result = get_result.result
    ini_txt = `Wilayah : ${get_result.wilayah}\n`
    ini_txt += `Tanggal : ${get_result.tanggal}\n`
    ini_txt += `Sahur : ${get_result.sahur}\n`
    ini_txt += `Imsak : ${get_result.imsak}\n`
    ini_txt += `Subuh : ${get_result.subuh}\n`
    ini_txt += `Terbit : ${get_result.terbit}\n`
    ini_txt += `Dhuha : ${get_result.dhuha}\n`
    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
    ini_txt += `Ashar : ${get_result.ashar}\n`
    ini_txt += `Maghrib : ${get_result.imsak}\n`
    ini_txt += `Isya : ${get_result.isya}`
    fakeyt(ini_txt)}
    break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

case 'welcome':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (args.length < 1) return fakeyt(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return fakeyt('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return fakeyt('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return fakeyt(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return fakeyt(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
case 'gc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args[0] === 'buka') {
fakeyt(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
deff.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
fakeyt(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
deff.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
linkgc = await deff.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
deff.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
deff.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
deff.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
deff.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
deff.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
deff.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case "kick":
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return fakeyt("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
deff.groupRemove(from, mentioned);
fakeyt(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
deff.groupRemove(from, [anu]);
fakeyt(mess.success);
} else {
deff.groupRemove(from, mentioned);
fakeyt(mess.success);
}
break;
case 'tagall':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
deff.groupUpdateSubject(from, `${body.slice(9)}`)
deff.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
deff.groupUpdateDescription(from, `${body.slice(9)}`)
deff.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await deff.downloadMediaMessage(encmedia)
deff.updateProfilePicture(from, media)
.then((res) => fakeyt(jsonformat(res)))
.catch((err) => fakeyt(jsonformat(err)))
} else {
fakeyt(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return fakeyt(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return fakeyt(mess.only.group)
try {
var pic = await deff.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
deff.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
json = ['action', 'inviteReset', from]
deff.query({json, expect200: true})
fakeyt('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return fakeyt(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(deff.chats.get(ido).presences), deff.user.jid]
deff.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
fakeyt(`${e}`)
}
break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
				   if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiidc = groupMembers
		  const kosstc = groupMembers
		  const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
		  teks = `Yang Ter${command} Disini Adalah Si @${akuutc.jid.split('@')[0]}`
		  jds.push(akuutc.jid)
		  mentions(teks, jds, true)
	      break	

//══════════[ ANIMASI HEWAN ]════════════════════════════//
                   case 'fox':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'dog':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'cat':
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda1':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'bird': 
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'koala':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
              
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'waifu':
fakeyt(mess.wait)
waifu = await getBuffer(`https://tyz-api.herokuapp.com/randomimg/waifu`)
deff.sendMessage(from, waifu, image, { quoted: froxx})
break
case 'husbu':
fakeyt(mess.wait)
husbu = await getBuffer(`https://tyz-api.herokuapp.com/randomimg/husbu`)
deff.sendMessage(from, husbu, image, { quoted: froxx})
break
case 'loli':
fakeyt(mess.wait)
loli = await getBuffer(`https://tyz-api.herokuapp.com/randomimg/loli`)
deff.sendMessage(from, loli, image, { quoted: froxx})
break
case 'milf':
fakeyt(mess.wait)
milf = await getBuffer(`https://tyz-api.herokuapp.com/randomimg/milf`)
deff.sendMessage(from, milf, image, { quoted: froxx})
break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
                    // Maker Menu //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                fakeyt(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Deffri Gans`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=172e5b27c5299af6bfdb45b1&text=${ini_txt}`)
                    deff.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'play':
              if (!q) return reply('Linknya?')
             reply(mess.wait)
             res = await yts(`q`)
			bgst = `©DEFFBOTz`
			   thumbInfo = ` 
*Youtube Download*
 *🦈 Judul :* ${res.all[0].title}
 *🐬 ID Video :* ${res.all[0].videoId}
 *🐋 Diupload Pada :* ${res.all[0].ago}
 *🦈 Views :* ${res.all[0].views}
 *🐬 Durasi :* ${res.all[0].timestamp}
 *🐋 Channel :* ${res.all[0].author.name}
 *🎣 Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
deff.sendMessage(from, { contentText: `${thumbInfo}`, footerText: `${bgst}`, buttons: [{ buttonId: `${prefix}ytmp3 ${res.all[0].url}`, buttonText: { displayText: 'AUDIO' }, type: 1 },{ buttonId: `${prefix}ytmp4 ${res.all[0].url}`, buttonText: { displayText: 'VIDEO' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ytmp3':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`?? Title : ${res[0].judul}\`\`\`
\`\`\`🦈 Ext : MP3\`\`\`
\`\`\`🦈 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: ftrol}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: ftrol, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
case 'ytmp4':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            fakeyt(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🦈 Title : ${res[0].judul}\`\`\`
\`\`\`🦈 Ext : MP4\`\`\`
\`\`\`🦈 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: freply, mimetype: 'video/mp4', filename: res[0].output})
})
            break
case 'ttnowm': 
      case 'tiktoknowm':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
case 'tiktokdl': 
       case 'ttdl':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
case 'tiktok':
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              reply(mess.wait)
              bgst =`Jangan Lupa Subscribe Yt DEFFBOTz\n Helpme tu 1k subscriber`
              kntl =`Silahkan pilihan media yg mau di download kak:v`
              deff.sendMessage(from, { contentText: `${kntl}`, footerText: `${bgst}`, buttons: [{ buttonId: `${prefix}tiktoknowm ${q}`, buttonText: { displayText: '🎥NO WM' }, type: 1 },{ buttonId: `${prefix}ttdl ${q}`, buttonText: { displayText: '🎥WM' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
				
default:
            if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }        
          if (budy.includes(`bot`)) {
                  reply(`yah Ada Apa yah Kak?`)
                  }        
         if (budy.includes(`Bot`)) {
                  reply(`Yah Ada Apa Yah Kak?`)
                  }        
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
	
    
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE Deffri Gans✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇