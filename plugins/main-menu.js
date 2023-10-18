import moment from 'moment-timezone';

let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`;
  let pp = './Abhi.jpg';
  let more = String.fromCharCode(8206);
  let readMore = more.repeat(850);
  let currentTime = moment.tz('Asia/Kolkata').format('HH:mm');
  let greeting = 'Good Morning☀️';

  if (currentTime >= '12:00' && currentTime < '17:00') {
    greeting = 'Good Afternoon🌞';
  } else if (currentTime >= '17:00' && currentTime < '20:00') {
    greeting = 'Good Evening🌆';
  } else if (currentTime >= '20:00' || currentTime < '04:00') {
    greeting = 'Good Night🌃';
  }

  let user = await conn.getName(who); // Get the name of the user
  let lkr = `╭───❮ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄* ❯
│ *${greeting}*, ${user}, ${botname} ${ownername}
│ _${usedPrefix}ping_
│ _${usedPrefix}uptime_
│ _${usedPrefix}blocklist_
╰─────────────⦁`;
  conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] });
  m.react('📃');
};

handler.help = ['allmenu'];
handler.tags = ['main'];
handler.command = ['allmenu', 'menu'];

export default handler
