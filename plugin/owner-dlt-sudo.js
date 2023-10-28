import { exec } from 'child_process';
import speed from 'performance-now';

let handler = async (m, { conn }) => {
  let animationMsg = await conn.sendMessage(m.chat, { text: '*Loading...*' });

  let animations = [
    '(\\_/)\n( •.•)\n/>🤍',
    '(\\_/)\n( •.•)\n/>❤️',
    '(\\_/)\n( •.•)\n/>💚',
    '(\\_/)\n( •.•)\n/>🧡',
    '(\\_/)\n( •.•)\n/>💜',
    '(\\_/)\n( •.•)\n/>💙',
  ];

  let delay = 1000; // Delay in milliseconds between editing animations
  let timestamp = speed();

  await exec('neofetch --stdout', async (error, stdout) => {
    let latency = (speed() - timestamp).toFixed(4);

    for (let animation of animations) {
      setTimeout(async () => {
        await conn.relayMessage(m.chat, {
          protocolMessage: {
            key: animationMsg.key,
            type: 14,
            editedMessage: {
              conversation: animation,
            },
          },
        }, {});
      }, delay);

      delay += 1000; // Increase the delay for the next animation
    }
  });
};

handler.help = ['animations'];
handler.tags = ['fun'];
handler.command = ['test'];

export default handler;
