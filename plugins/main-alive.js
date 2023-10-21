import { exec } from 'child_process';
import speed from 'performance-now';

let handler = async (m, { conn }) => {
  // Create the poll options
  let pollOptions = [
    { text: 'Option 1' },
    { text: 'Option 2' },
  ];

  // Create the poll message
  let pollMessage = {
    poll: {
      question: 'Choose an option:',
      options: pollOptions,
    },
  };

  let aliveMsg = await conn.sendMessage(m.chat, pollMessage, 'poll');

  let timestamp = speed();

  await exec('neofetch --stdout', async (error, stdout) => {
    let latency = (speed() - timestamp).toFixed(4);

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: aliveMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*🌟Alive!* ${latency} ms`,
        },
      },
    });
  });
};

handler.help = ['alive']
handler.tags = ['main']
handler.command = ['alive']

export default handler
