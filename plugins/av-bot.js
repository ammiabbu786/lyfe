let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender);
  let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
  let av = `./src/mp3/${pickRandom(["Abhi", "Abhi", "Abhi", "Abhi", "Abhi"])}.mp3`;

  // Create an external ad reply
  const adReply = {
    title: "ABI-TITLE",
    body: "ABHI-BODY",
    thumbnailUrl: "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png", // Add a URL for the thumbnail image (if needed)
    sourceUrl: "https://github.com/AbhishekSuresh2/ABHISHEK-SER", // Add a source URL (if needed)
    mediaType: 1, // 1 for image, 2 for video (adjust as needed)
    renderLargerThumbnail: false, // Adjust as needed
    mediaUrl: av, // URL or path to the audio file
  };

  // Send an empty text message with the external ad reply
  conn.sendMessage(m.chat, "", MessageType.extendedText, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: adReply, // Add the external ad reply here
    },
  });
};

handler.customPrefix = /^(.list|@919074692450)$/i;
handler.command = new RegExp;

export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
