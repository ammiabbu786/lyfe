let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Abhi.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `「 ${botname} あ⁩ 」\n
  *%ucpn*
╭───❮ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}ping_
│ _${usedPrefix}uptime_
│ _${usedPrefix}enable_
│ _${usedPrefix}alive_
│ _${usedPrefix}owner_
│ _${usedPrefix}report_
│ _${usedPrefix}bot_
│ _${usedPrefix}script_
│ _${usedPrefix}runtime_
│ _${usedPrefix}infobot_
│ _${usedPrefix}donate_
│ _${usedPrefix}groups_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}listprem_
╰─────────────⦁

╭───❮ *𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}*on/off* public_
│ _${usedPrefix}*on/off* autoreact_
│ _${usedPrefix}update_
│ _${usedPrefix}autoadmin_
│ _${usedPrefix}left_
│ _${usedPrefix}banchat_
│ _${usedPrefix}unbanchat_
│ _${usedPrefix}ban_
│ _${usedPrefix}unban_
│ _${usedPrefix}banlist_
│ _${usedPrefix}block_
│ _${usedPrefix}unblock_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}bc_
│ _${usedPrefix}bcgc_
│ _${usedPrefix}join_ 
│ _${usedPrefix}restart_
│ _${usedPrefix}setppbot_
│ _${usedPrefix}setprefix_
│ _${usedPrefix}resetprefix_
│ _${usedPrefix}resetuser_
│ _${usedPrefix}getfile_
│ _${usedPrefix}getplugin_
╰─────────────⦁
${readMore} 
╭───❮ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}kick *@tag*_
│ _${usedPrefix}promote *@tag*_
│ _${usedPrefix}demote *@tag*_
│ _${usedPrefix}infogroup_
│ _${usedPrefix}getbio *@tag*_
│ _${usedPrefix}resetlink_
│ _${usedPrefix}link_
│ _${usedPrefix}*on/off* antilink_
│ _${usedPrefix}*on/off* antidelete_
│ _${usedPrefix}invite_
│ _${usedPrefix}setpp *image*_
│ _${usedPrefix}setname *text*_
│ _${usedPrefix}setdesc *text*_
│ _${usedPrefix}setwelcome *text*_
│ _${usedPrefix}setbye *text*_
│ _${usedPrefix}hidetag *text/image/audio/vid*_
│ _${usedPrefix}warn *@tag*_
│ _${usedPrefix}unwarn *@tag*_
│ _${usedPrefix}listwarn_
│ _${usedPrefix}listnum_
│ _${usedPrefix}kicknum_
│ _${usedPrefix}group *open/close*_
│ _${usedPrefix}tagall_
╰─────────────⦁

╭───❮ *𝙵𝚄𝙽 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}hearts_
│ _${usedPrefix}moon_
│ _${usedPrefix}question_
│ _${usedPrefix}character_
│ _${usedPrefix}truth_
│ _${usedPrefix}dare_
│ _${usedPrefix}flirt_
│ _${usedPrefix}gay_
│ _${usedPrefix}meme_
│ _${usedPrefix}ship_
│ _${usedPrefix}kill_
│ _${usedPrefix}kiss_
│ _${usedPrefix}pat_
│ _${usedPrefix}slap_
│ _${usedPrefix}waste_
│ _${usedPrefix}simpcard_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}ytcomment_
│ _${usedPrefix}stupid_
│ _${usedPrefix}lolicon_
╰─────────────⦁

╭───❮ *𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}play_
│ _${usedPrefix}play2_
│ _${usedPrefix}yts_
│ _${usedPrefix}insta *link*_
│ _${usedPrefix}img_
│ _${usedPrefix}pinterest_
│ _${usedPrefix}mediafire *link*_
│ _${usedPrefix}gdrive *link*_
│ _${usedPrefix}gitclone *link*_
│ _${usedPrefix}twitter *link*_
│ _${usedPrefix}tiktok *link*_
│ _${usedPrefix}tiktokstalk_
│ _${usedPrefix}spotify_
│ _${usedPrefix}fb *link*_
╰─────────────⦁

╭───❮ *𝙴𝙲𝙾𝙽𝙾𝙼𝚈 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}claim/daily_
│ _${usedPrefix}weekly_
│ _${usedPrefix}monthly_
│ _${usedPrefix}leaderboard_
│ _${usedPrefix}bet_
│ _${usedPrefix}heal_
│ _${usedPrefix}craft_
│ _${usedPrefix}balance_
│ _${usedPrefix}shop_
│ _${usedPrefix}sell_
│ _${usedPrefix}adventure_
│ _${usedPrefix}opencrate_
│ _${usedPrefix}mine_
│ _${usedPrefix}work_
│ _${usedPrefix}transfer_
│ _${usedPrefix}todiamond_
│ _${usedPrefix}tomoney_
╰─────────────⦁

╭───❮ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}toanime_
│ _${usedPrefix}tomp3_
│ _${usedPrefix}toimg_
│ _${usedPrefix}tovid_
╰─────────────⦁

╭───❮ *𝚁𝙰𝙽𝙳𝙾𝙼 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}bts_
│ _${usedPrefix}cr7_
│ _${usedPrefix}cat_
│ _${usedPrefix}coffee_
│ _${usedPrefix}cartoon_
│ _${usedPrefix}cyberspace_
│ _${usedPrefix}couplepp_
│ _${usedPrefix}dog_
│ _${usedPrefix}doraemon_
│ _${usedPrefix}ff_
│ _${usedPrefix}hacker_
│ _${usedPrefix}messi_
│ _${usedPrefix}pubg_
│ _${usedPrefix}pentol_
│ _${usedPrefix}planet_
│ _${usedPrefix}tech_
│ _${usedPrefix}wpmountain_
│ _${usedPrefix}wpgaming_
│ _${usedPrefix}wprandom_
╰─────────────⦁

╭───❮ *𝙰𝚄𝙳𝙸𝙾 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}bass_
│ _${usedPrefix}blown_
│ _${usedPrefix}deep_
│ _${usedPrefix}earrape_
│ _${usedPrefix}fat_
│ _${usedPrefix}fast_
│ _${usedPrefix}nightcore_
│ _${usedPrefix}reverse_
│ _${usedPrefix}squrrel_
│ _${usedPrefix}slow_
╰─────────────⦁

╭───❮ *𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}waifu_
│ _${usedPrefix}neko_
│ _${usedPrefix}loli_
│ _${usedPrefix}naruto_
│ _${usedPrefix}itachi_
│ _${usedPrefix}akira_
│ _${usedPrefix}asuna_
│ _${usedPrefix}akiyama_
│ _${usedPrefix}boruto_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}ayuzawa_
│ _${usedPrefix}anna_
│ _${usedPrefix}chiho_
│ _${usedPrefix}chitoge_
│ _${usedPrefix}deidara_
│ _${usedPrefix}erza_
│ _${usedPrefix}elaina_
│ _${usedPrefix}emilia_
│ _${usedPrefix}hestia_
│ _${usedPrefix}hinata_
│ _${usedPrefix}inori_
│ _${usedPrefix}isuzu_
│ _${usedPrefix}kagura_
│ _${usedPrefix}kaori_
│ _${usedPrefix}keneki_
│ _${usedPrefix}kurumi_
│ _${usedPrefix}madara_
│ _${usedPrefix}mikasa_
│ _${usedPrefix}miku_
│ _${usedPrefix}minato_
│ _${usedPrefix}nezuko_
│ _${usedPrefix}sagiri_
│ _${usedPrefix}sasuke_
│ _${usedPrefix}sakura_
│ _${usedPrefix}kotori_
╰─────────────⦁

╭───❮ *𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}tictactoe_
│ _${usedPrefix}delttt_
│ _${usedPrefix}math_
│ _${usedPrefix}math answer_
│ _${usedPrefix}ppt_
│ _${usedPrefix}slot_
│ _${usedPrefix}casino_
╰─────────────⦁

╭───❮ *𝚂𝚃𝙸𝙲𝙺𝙴𝚁  𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}sticker_
│ _${usedPrefix}take_
│ _${usedPrefix}smaker_
│ _${usedPrefix}getsticker_
│ _${usedPrefix}emix_
│ _${usedPrefix}attp_
╰─────────────⦁

╭───❮ *𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}autosticker_
│ _${usedPrefix}pdf_
│ _${usedPrefix}whatmusic_
│ _${usedPrefix}tempmail_
│ _${usedPrefix}checkmail_
│ _${usedPrefix}pokedex_
│ _${usedPrefix}calc_
│ _${usedPrefix}google_
│ _${usedPrefix}lyrics_
│ _${usedPrefix}readmore_
│ _${usedPrefix}ssweb_
│ _${usedPrefix}tts_
│ _${usedPrefix}trt_
│ _${usedPrefix}wiki_
│ _${usedPrefix}nowa_
│ _${usedPrefix}qrmaker_
│ _${usedPrefix}true_
│ _${usedPrefix}fancy_
│ _${usedPrefix}weather_
│ _${usedPrefix}alexa_
│ _${usedPrefix}itunes_
│ _${usedPrefix}technews_
╰─────────────⦁

╭───❮ *𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}on nsfw_
│ _${usedPrefix}off nsfw_
│ _${usedPrefix}hentais *text*_
│ _${usedPrefix}xnxxdl *link*_
╰────────────⦁

╭───❮  *🎯𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁* ❯
│      𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈
│   𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺 𝚂𝚄𝚁𝙴𝚂𝙷☘️
╰────────────⦁`
  let handler = async (m, {
  conn,
  usedPrefix: _p,
  __dirname,
  args
 }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "⏳",
 key: m.key,
   }
  })
  
  let tags = {}
  
  try {
  
   /* Info Menu */
   let glb = global.db.data.users
   let usrs = glb[m.sender]
   let tag = `@${m.sender.split("@")[0]}`
   let mode = global.opts["self"] ? "Private" : "Public"
   let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
   let {
 age,
 exp,
 limit,
 level,
 role,
 registered,
 credit
   } = glb[m.sender]
   let {
 min,
 xp,
 max
   } = xpRange(level, global.multiplier)
   let name = await conn.getName(m.sender)
   let premium = glb[m.sender].premiumTime
   let prems = `${premium > 0 ? "Premium": "Free"}`
   let platform = os.platform()
 
 
   let ucpn = `${ucapan()}`
  
   let _uptime = process.uptime() * 1000
   let _muptime
   if (process.send) {
 process.send("uptime")
 _muptime = await new Promise(resolve => {
  process.once("message", resolve)
  setTimeout(resolve, 1000)
 }) * 1000
   }
   let muptime = clockString(_muptime)
   let uptime = clockString(_uptime)
 
   
   let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
   let totalreg = Object.keys(glb).length
   let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
 return {
  help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
  tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
  prefix: "customPrefix" in plugin,
  limit: plugin.limit,
  premium: plugin.premium,
  enabled: !plugin.disabled,
 }
   })
   for (let plugin of help)
 if (plugin && "tags" in plugin)
  for (let tag of plugin.tags)
   if (!(tag in tags) && tag) tags[tag] = tag
   conn.menu = conn.menu ? conn.menu : {}
   let before = conn.menu.before || defaultMenu.before
   let header = conn.menu.header || defaultMenu.header
   let body = conn.menu.body || defaultMenu.body
   let footer = conn.menu.footer || defaultMenu.footer
   let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
   let _text = [
 before,
 ...Object.keys(tags).map(tag => {
  return header.replace(/%category/g, tags[tag]) + "\n" + [
   ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
 return menu.help.map(help => {
  return body.replace(/%cmd/g, menu.prefix ? help : "%_p" + help)
   .replace(/%islimit/g, menu.limit ? "Ⓛ" : "")
   .replace(/%isPremium/g, menu.premium ? "🅟" : "")
   .trim()
 }).join("\n")
   }),
   footer
  ].join("\n")
 }),
 after
   ].join("\n")
   let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
   let replace = {
 "%": "%",
 p: _p,
 uptime,
 muptime,
 me: conn.getName(conn.user.jid),
 npmname: _package.name,
 npmdesc: _package.description,
 version: _package.version,
 exp: exp - min,
 maxexp: xp,
 totalexp: exp,
 xp4levelup: max - exp,
 github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
 tag,
 ucpn,
 platform,
 mode,
 _p,
 credit,
 age,
 tag,
 name,
 prems,
 level,
 limit,
 name,
 totalreg,
 totalfeatures,
 role,
 readmore: readMore
   }
   text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
   const pp = './Assets/Gurulogo.jpg'
  
 
 let contact = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
  conn.sendMessage(m.chat, { video: { url: menuvid }, caption: text.trim(),  gifPlayback: true,
  gifAttribution: 0}, { quoted: contact })

  } catch (e) {
   await conn.reply(m.chat, " error", m)
   throw e
  }
 }
 handler.command = /^(menu|allmenu|\?)$/i
 

 
 export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
 }
 
 const more = String.fromCharCode(8206)
 const readMore = more.repeat(4001)
 
 function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
 }
 
 function clockStringP(ms) {
  let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
  return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
 }
 
 function ucapan() {
  const time = moment.tz("Asia/Kolkata").format("HH")
  let res = "Good morning ☀️"
  if (time >= 4) {
   res = "Good Morning 🌄"
  }
  if (time >= 10) {
   res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
   res = "Good Afternoon 🌇"
  }
  if (time >= 18) {
   res = "Good Night 🌙"
  }
  return res
 }
