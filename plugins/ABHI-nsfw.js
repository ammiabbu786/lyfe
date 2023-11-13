let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://raw.githubusercontent.com/AbhishekSuresh2/ABHISHEK-SER/blob/main/media/voice/test.mp3"
    let url = "https://github.com.com/AbhishekSuresh2/ABHISHEK-SER"
    let murl = "https://instagram.com/abhishek_ser?igshid=NGxoaTl3bTJwMmJh"
    let hash = global.botname
    let img = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png"
    let num = "919074692450"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "test",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷|   ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler
