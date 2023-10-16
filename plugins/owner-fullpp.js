let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!m.reply_message.image) {
    return await conn.reply(m.chat, "_Reply to a photo_", m)
  }

  let media = await conn.downloadAndSaveMediaMessage(m.reply_message)
  await setFullProfilePicture(conn, media, m)
  await conn.reply(m.chat, "_Profile Picture Updated_", m)
}

async function setFullProfilePicture(conn, imagePath, message) {
  const { query } = conn
  const image = await generateFullProfilePicture(imagePath)
  
  const request = {
    to: conn.user.jid,
    type: 'set',
    xmlns: 'w:profile:picture',
    content: [
      {
        tag: 'picture',
        attrs: { type: 'image' },
        content: image
      }
    ]
  }

  await query(request)
}

async function generateFullProfilePicture(imagePath) {
  const jimp = await Jimp.read(imagePath)
  const width = 720
  const height = 720
  const min = Math.min(jimp.getWidth(), jimp.getHeight())
  const left = (jimp.getWidth() - min) / 2
  const top = (jimp.getHeight() - min) / 2
  const image = jimp.clone()
  .crop(left, top, min, min)
  .resize(width, height)
  .getBufferAsync(Jimp.MIME_JPEG)

  return image
}

handler.help = ['fullpp']
handler.tags = ['main']
handler.command = /^(fullpp)$/i

export default handler;
