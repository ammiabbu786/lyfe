let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
  let stikerwelgc = "./src/welgc.webp";
  let stikerbyegc = "./src/byegc.webp";

  if (command == 'welcomegc') {
    conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, {
      contextInfo: {
        externalAdReply: {
          title: '𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁🎯',
          body: '𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝚄𝚁𝙴𝚂𝙷☘️',
          sourceUrl: `https://github.com/AbhishekSuresh2/ABHISHEK-SER`,
          thumbnail: 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png' // Replace with the URL of the thumbnail image
        }
      }
    });
  }

  if (command == 'byegc') {
    conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, {
      contextInfo: {
        externalAdReply: {
          title: '𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁🎯',
          body: '𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝚄𝚁𝙴𝚂𝙷☘️',
          sourceUrl: `https://github.com/AbhishekSuresh2/ABHISHEK-SER`,
          thumbnail: 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png' // Replace with the URL of the thumbnail image
        }
      }
    });
  }
};

handler.command = ['welcomegc', 'byegc'];

export default handler;

// The pickRandom function is defined but not used in this code.
// If you plan to use it, make sure to define the 'list' variable as well.
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
