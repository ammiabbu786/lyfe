import { exec } from 'child_process';
import speed from 'performance-now';

const handler = async (m, { conn }) => {
  try {
    const pingMsg = await conn.sendMessage(m.chat, { text: '*📡Checking Ping...*' });

    const timestamp = speed();

    exec('neofetch --stdout', async (error, stdout) => {
      if (error) {
        console.error('Error executing neofetch:', error);
        return;
      }

      const latency = (speed() - timestamp).toFixed(4);

      const responseMessage = `*📡Pong!* ${latency} ms`;

      // Replace the poll system with predefined options
      const pollOptions = ['Owner', 'Ping'];
      const pollMessage = await conn.sendPoll(m.chat, responseMessage, pollOptions, { isQuiz: true, duration: 60000 });

      const pollUpdate = await conn.onPollUpdate(pollMessage.key);
      const pollResult = pollUpdate.result;

      const pollVotes = pollResult.options.map(option => `${option.text}: ${option.voters.length} votes`).join('\n');

      const finalResponse = `${responseMessage}\n\n*Poll Results:*\n${pollVotes}`;

      await conn.editMessage(m.chat, pollMessage.key, finalResponse);
    });
  } catch (err) {
    console.error('Error in ping command handler:', err);
  }
};

handler.help = ['ping'];
handler.tags = ['main'];
handler.command = ['ping', 'speed'];

export default handler;
