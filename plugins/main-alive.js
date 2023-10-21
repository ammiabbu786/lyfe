let handler = async (m, { conn, text, usedPrefix, command }) => {
    // To get sender's name
    let name = m.pushName || conn.getName(m.sender);

    // Define the content
    let mainImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png";
    let smallImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png";
    let smallText = "I'M Alive Now";
    let mainText = "𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁";
    let audioUrl = "https://raw.githubusercontent.com/AbhishekSuresh2/ABHISHEK-SER/main/src/mp3/Abhi.mp3";

    // Construct the poll message
    let poll = {
        title: "Poll Title",
        options: ["Option 1", "Option 2"],
    };

    let pollMessage = conn.prepareMessage(m.chat, poll, 'poll');
    
    // Construct the main message
    let con = {
        key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) },
        message: {
            contactMessage: {
                displayName: `${name}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        }
    };

    // Send the main message and poll
    await conn.sendMessage(m.chat, con, { quoted: pollMessage });

}

handler.help = ['pollalive']
handler.tags = ['main']
handler.command = /^(pollalive)$/i

export default handler;
