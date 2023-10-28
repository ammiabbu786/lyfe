let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (text === 'alive') {
    // Define the content
    let mainImg = "https://cdn.wallpapersafari.com/71/19/7ZfcpT.png"; // Main image URL
    let smallImg = "https://cdn.wallpapersafari.com/71/19/7ZfcpT_small.png"; // Small image URL
    let smallText = "ABHISHEK-SER"; // Small text
    let mainText = "I'm Alive"; // Main text
    let audioUrl = "https://raw.githubusercontent.com/Kai0071/A17/master/Assets/audio/🔥.mp3"; // Audio URL

    // Create a poll
    const poll = {
      name: 'Choose an option',
      options: ['test1', 'test2'],
      selectableCount: 1, // Allow choosing only one option
    };

    // Construct the message
    let con = {
      key: {
        fromMe: false,
        participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
      },
      message: {
        contactMessage: {
          displayName: "Your Name", // Replace with the desired display name
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:Your Name\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        },
      },
    };

    let doc = {
      audio: {
        url: audioUrl,
      },
      mimetype: 'audio/mp4',
      ptt: true,
      waveform: [100, 0, 100, 0, 100, 0, 100],
      fileName: "Guru",
      poll: poll, // Add the poll to the message

      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: smallText,
          body: mainText,
          thumbnailUrl: smallImg, // Small image
          sourceUrl: 'https://chat.whatsapp.com/F3sB3pR3tClBvVmlIkqDJp',
          mediaType: 1,
          renderLargerThumbnail: true,
          mediaUrl: mainImg, // Main image
        },
      },
    };

    // Send the message with the poll
    await conn.sendMessage(m.chat, doc, { quoted: con });
  }
}

handler.help = ['inrl'];
handler.tags = ['main'];
handler.command = /^(inrl)$/i;

export default handler;
