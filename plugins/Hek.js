const { exec } = require('child_process');
const speed = require('performance-now');

let handler = async (m, { conn }) => {
  let loadingPhases = [
    "Injecting malware",
    "System hijacking in process",
    "Connecting to Server",
    "Device successfully connected",
    "Receiving data",
    "Data hijacked from device 100% completed",
    "Killing all evidence",
    "Killing all malwares",
    "Hacking Complete",
    "Sending LOG Documents"
  ];

  let delay = 2000; // Delay in milliseconds between each message
  for (let phase of loadingPhases) {
    await conn.sendMessage(m.chat, '```' + phase + '```', m);
    await sleep(delay);
  }

  // Replace this URL with the desired URL for your log documents
  const logDocumentUrl = 'https://www.mediafire.com/file/zn2nua795y5l2lj/data.zip/file';
  await conn.sendMessage(m.chat, logDocumentUrl, m);
};

handler.help = ['hek'];
handler.tags = ['fun'];
handler.command = ['hek'];

export default handler;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
