import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {
  // Send a message to indicate that the bot is alive
  let aliveMsg = await conn.sendMessage(m.chat, { text: '*🟢 I am alive!*' });

  // Perform any additional tasks or checks here

  // Create a poll with options
  const pollOptions = ["Option 1", "Option 2"];
  const pollMessage = {
    poll: {
      title: 'Choose an option:',
      options: pollOptions,
    },
  };

  // Send the poll
  await conn.sendMessage(m.chat, pollMessage, 'poll');

  // Calculate latency
  let timestamp = speed();
  await exec('neofetch --stdout', async (error, stdout) => {
    let latency = (speed() - timestamp).toFixed(4);
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: aliveMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*🟢 I am alive! Latency: ${latency} ms*`,
        },
      },
    }, {});
  });
};

handler.help = ['alive']
handler.tags = ['main']
handler.command = ['alive']

export default handler
