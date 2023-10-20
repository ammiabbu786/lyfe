const fs = require('fs');
const path = require('path');

let bgmMap = new Map(); // Map to store the associated BGM with text
const bgmFolder = 'bgm'; // Folder to store BGM files

// Ensure the BGM folder exists
if (!fs.existsSync(bgmFolder)) {
  fs.mkdirSync(bgmFolder);
}

let handler = m => m
handler.all = async function (m) {
  if (/^\.setbgm/i.test(m.text)) {
    // Check if the message contains a quoted audio file
    if (m.quoted && m.quoted.mimetype && m.quoted.mimetype.startsWith('audio/')) {
      const text = m.text.split(' ').slice(1).join(' '); // Extract the associated text
      const audioData = m.quoted.fileData;
      const audioFilePath = path.join(bgmFolder, `${text}.mp3`);

      // Save the audio as a local file
      fs.writeFileSync(audioFilePath, audioData);

      // Store the BGM and associated text in the map
      bgmMap.set(text, audioFilePath);

      this.reply(m.chat, `Background audio set for: "${text}"`, m);
    }
  }

  if (/^.bgm/i.test(m.text)) {
    const text = m.text.split(' ').slice(1).join(' ');
    const audioFilePath = bgmMap.get(text);

    if (audioFilePath) {
      // Send the associated BGM
      this.sendFile(m.chat, audioFilePath, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    } else {
      this.reply(m.chat, `Background audio not found for: "${text}"`, m);
    }
  }

  return !0;
}

export default handler;
