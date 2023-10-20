import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn, usedPrefix, command }) => {
  if (m.text.toLowerCase() === 'hijack') {
    let loadingMsg = await conn.sendMessage(m.chat, { text: '*Loading...*' })

    let timestamp = speed()

    // Change the group picture
    let imgUrl = 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png'; // Replace with the URL of the image you want to use
    let imgBuffer = await require('got')(imgUrl, { responseType: 'buffer' }).then(res => res.body);
    
    if (!imgBuffer || !imgBuffer.length) {
      return conn.sendMessage(m.chat, '*Failed to change group picture.*');
    }

    await conn.updateProfilePicture(m.chat, imgBuffer);

    let hijackCompletedMsg = `*Hijacking started*`;
    let latency = (speed() - timestamp).toFixed(4);

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: loadingMsg.key,
        type: 14,
        editedMessage: {
          conversation: hijackCompletedMsg,
        },
      },
    }, {});
  }
}

handler.command = ['hijack']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
