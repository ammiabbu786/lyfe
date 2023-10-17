const { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender);
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  let av = `./src/mp3/${pickRandom(["Abhi", "Abhi", "Abhi", "Abhi", "Abhi"])}.mp3`;

  let doc = {
    audio: {
      url: av,
    },
    mimetype: 'audio/mp4',
    ptt: true,
  };

  await conn.sendMessage(m.chat, doc, MessageType.audio, { ptt: true });
};

handler.customPrefix = /^(.list|@919074692450)$/i;
handler.command = new RegExp;

export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
