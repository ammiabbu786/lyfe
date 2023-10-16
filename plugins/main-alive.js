let handler = async (m, { conn, text, usedPrefix, command }) => {

  // Sound
  let name = m.pushName || conn.getName(m.sender);
  var vn = "https://raw.githubusercontent.com/AbhishekSuresh2/ABHISHEK-SER/main/src/mp3/Abhi.mp3";
  let url = "https://github.com/AbhishekSuresh2/ABHISHEK-SER;
  let murl = "https://github.com/AbhishekSuresh2/ABHISHEK-SER";
  let smallImg = "https://cdn.wallpapersafari.com/71/19/7ZfcpT_small.png";
  let mainImg = "https://cdn.wallpapersafari.com/71/19/7ZfcpT.png";

  let con = {
    key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  };

  let doc = {
    audio: {
      url: vn
    },
    mimetype: 'audio/mp4',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: "ABHISHEK-SER",

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: "I AM ALIVE",
        body: "GURU BOT",
        thumbnailUrl: smallImg, // Small image
        sourceUrl: 'https://github.com/AbhishekSuresh2/ABHI-TEST-IT/edit/main/plugins/main-alive.js',
        mediaType: 1,
        renderLargerThumbnail: false,
        mediaUrl: mainImg // Main image
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: con });

}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler;
