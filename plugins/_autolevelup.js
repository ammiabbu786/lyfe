//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

let handler = async (m, { conn, isOwner }) {
    let bot = global.db.data.settings[conn.user.jid] || {}
    if (!bot.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
╭────────────
│   *Congratulations* 
│      *Level Up🥳*
│
│ *📍Level* *${before}* ‣  *${user.level}*
│ *🐉Role*: *${user.role}*
│ *Have A Good Day🎯*
╰────────────
	`.trim())
    }
}

