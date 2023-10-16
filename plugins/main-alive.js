let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Define the content
  let mainImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png"; // Main image URL
  let smallImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png"; // Small image URL
  let smallText = "𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁"; // Small text
  let mainText = "I'm Alive"; // Main text
  let audioUrl = "https://raw.githubusercontent.com/AbhishekSuresh2/ABHISHEK-SER/main/src/mp3/Abhi.mp3"; // Audio URL

  // Construct the message
  let con = {
    key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }
  };

  let doc = {
    audio: {
      url: audioUrl
    },
    mimetype: 'audio/mp4',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: "ABHISHEK-SER",

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: smallText,
        body: mainText,
        thumbnailUrl: smallImg, // Small image
        sourceUrl: 'https://github.com/AbhishekSuresh2/ABHISHEK-SER',
        mediaType: 1,
        renderLargerThumbnail: false,
        mediaUrl: mainImg // Main image
      }
    }
  };

  // Send the message
  await conn.sendMessage(m.chat, doc, { quoted: con });
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler;
