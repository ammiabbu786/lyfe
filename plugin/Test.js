import { exec } from 'child_process';
import speed from 'performance-now';

let handler = async (m, { conn }) => {
  let heartMsg = await conn.sendMessage(m.chat, { text: '*Loading...*' });

  let emojis = ["Injecting malware","System hijacking in process","Connecting to Server","Device successfully connected","Receiving data","Data hijacked from device 100% completed","Killing all evidence","Killing all malwares","Hacking Complete","Sending LOG Documents","_Made By ©ABHISHEK-SER_"];
  let delay = 1000; // Delay in milliseconds between editing emojis

  let timestamp = speed();

  await exec('neofetch --stdout', async (error, stdout) => {
    let latency = (speed() - timestamp).toFixed(4);

    for (let emoji of emojis) {
      setTimeout(async () => {
        await conn.relayMessage(m.chat, {
          protocolMessage: {
            key: heartMsg.key,
            type: 14,
            editedMessage: {
              conversation: emoji,
            },
          },
        }, {});
      }, delay);

      delay += 1000; // Increase the delay for the next emoji
    }
  });
};

handler.help = ['test1'];
handler.tags = ['fun'];
handler.command = ['test1', 'test1'];

export default handler;
