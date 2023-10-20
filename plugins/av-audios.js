let bgmMap = new Map(); // Map to store the associated BGM with text

let handler = m => m
handler.all = async function (m) {
  if (/^\.setbgm/i.test(m.text)) {
    // Check if the message contains a quoted audio file
    if (m.quoted && m.quoted.mimetype && m.quoted.mimetype.startsWith('audio/')) {
      const text = m.text.split(' ').slice(1).join(' '); // Extract the associated text
      const audioUrl = 'https://raw.githubusercontent.com/AbhishekSuresh2/ABHISHEK-SER/main/src/mp3/Abhi.mp3'; // Use the provided audio URL

      // Store the BGM and associated text in the map
      bgmMap.set(text, audioUrl);

      this.reply(m.chat, `Background audio set for: "${text}"`, m);
    }
  }

  if (/^.bgm/i.test(m.text)) {
    const text = m.text.split(' ').slice(1).join(' ');
    const audioUrl = bgmMap.get(text);

    if (audioUrl) {
      // Send the associated BGM
      this.sendFile(m.chat, audioUrl, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    } else {
      this.reply(m.chat, `Background audio not found for: "${text}"`, m);
    }
  }

  return !0;
}

export default handler;
