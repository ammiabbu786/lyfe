let handler = async (m, { conn, text }) => {
  if (m.quoted && m.quoted.fileSha256) {
    try {
      // Download and save the image
      let media = await conn.downloadAndSaveMediaMessage(m.quoted);
      // Set it as the bot's profile picture
      await setFullProfilePicture(conn, media, m);
      // Respond to the user
      await conn.reply(m.chat, "_Profile Picture Updated_", m);
    } catch (e) {
      console.error(e);
      conn.reply(m.chat, "_An error occurred while setting the profile picture._", m);
    }
  } else {
    conn.reply(m.chat, "_Please reply to an image to set it as the profile picture._", m);
  }
}

async function setFullProfilePicture(conn, image, m) {
  const jimp = await Jimp.read(image);
  const min = jimp.getWidth();
  const max = jimp.getHeight();
  const cropped = jimp.crop(0, 0, min, max);

  const img = await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG);

  await conn.updateProfilePicture(conn.user.jid, img);
}

handler.help = ['fullpp']
handler.tags = ['main']
handler.command = /^(fullpp)$/i

export default handler;
