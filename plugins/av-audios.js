let bgmMap = new Map(); // Map to store the associated BGM with text

let handler = m => m
handler.all = async function (m) {
  if (/^\.setbgm/i.test(m.text)) {
    // Check if the message contains a quoted audio file
    if (m.quoted && m.quoted.mimetype && m.quoted.mimetype.startsWith('audio/')) {
      const text = m.text.split(' ').slice(1).join(' '); // Extract the associated text
      const audioBuffer = await this.downloadMediaMessage(m.quoted); // Get the audio as a buffer

      // Store the BGM and associated text in the map
      bgmMap.set(text, audioBuffer);

      this.reply(m.chat, `Background audio set for: "${text}"`, m);
    }
  }

  if (/^.bgm/i.test(m.text)) {
    const text = m.text.split(' ').slice(1).join(' ');
    const audioBuffer = bgmMap.get(text);

    if (audioBuffer) {
      // Send the associated BGM
      this.sendAudio(m.chat, audioBuffer, m.from, { quoted: m });
    } else {
      this.reply(m.chat, `Background audio not found for: "${text}"`, m);
    }
  }

  return !0;
}

export default handler;
