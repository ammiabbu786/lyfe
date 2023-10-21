let handler = async (m, { conn, text, usedPrefix, command }) => {
    // To get sender's name
    let name = m.pushName || conn.getName(m.sender);

    // Define the content
    let mainImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png";
    let smallImg = "https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png";
    let smallText = "I'M Alive Now";
    let mainText = "𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁";
    let audioUrl = "https://raw.githubusercontent.com/AbhishekSuresh2/ABHISHEK-SER/main/src/mp3/Abhi.mp3";

    // Construct the message
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
                thumbnailUrl: smallImg,
                sourceUrl: 'https://github.com/AbhishekSuresh2/ABHISHEK-SER',
                mediaType: 1,
                renderLargerThumbnail: false,
                mediaUrl: mainImg
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
