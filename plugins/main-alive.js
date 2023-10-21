let handler = async (m, { conn, text, usedPrefix, command }) => {
  // To get sender's name
  let name = m.pushName || conn.getName(m.sender);
  
  // Define the content
  let mainImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png"; // Main image URL
  let smallImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png"; // Small image URL
  let smallText = "I'M Alive Now"; // Small text
  let mainText = "𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁"; // Main text
  let audioUrl = "https://raw.githubusercontent.com/AbhishekSuresh2/ABHISHEK-SER/main/src/mp3/Abhi.mp3"; // Audio URL
  // Construct the message
  let con = {
    key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) },
    message: {
      contactMessage: {
        displayName: `${name}`, // Replace with the desired display name
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
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

  // Create the poll options
  let pollOptions = [
    { text: "Menu", vote: 0 },
    { text: "Owner", vote: 0 }
  ];

  // Construct the poll message
  let pollMessage = {
    text: "Choose an option:",
    buttons: pollOptions,
    options: {
      isGroup: false,
    }
  };

  // Send the poll message
  conn.sendMessage(m.chat, pollMessage, { quoted: con, contextInfo: { mentionedJid: [m.sender] } });
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler;
