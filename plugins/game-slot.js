let handler = async (m, { conn }) => {
  if (m.text.toLowerCase() === 'hijack') {
    let imgUrl = 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png'; // Replace with the URL of the image you want to use
    let imgBuffer = await require('got')(imgUrl, { responseType: 'buffer' }).then(res => res.body);

    if (!imgBuffer || !imgBuffer.length) {
      return conn.sendMessage(m.chat, '*Failed to change group picture.*');
    }

    await conn.updateProfilePicture(m.chat, imgBuffer);
    conn.sendMessage(m.chat, '*Group picture updated successfully.*');
  }
}

handler.command = ['hijack']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
