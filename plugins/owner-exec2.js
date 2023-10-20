import cp, { exec as _exec } from 'child_process';
import { promisify } from 'util';

const exec = promisify(_exec).bind(cp);

const handler = async (m, { conn, isOwner, text }) => {
  if (conn.user.jid !== conn.user.jid) return;

  // Check if the message starts with ">eval"
  if (text.startsWith('>eval')) {
    const codeToEvaluate = text.replace('>eval', '').trim(); // Extract the code to evaluate
    try {
      const result = eval(codeToEvaluate); // Evaluate the provided code
      m.reply(`Result of evaluation: ${result}`);
    } catch (error) {
      m.reply(`Error during evaluation: ${error}`);
    }
  } else {
    // Handle other commands or execute shell commands
    m.reply('✅ running...');
    let o;
    try {
      o = await exec(text.trim());
    } catch (e) {
      o = e;
    } finally {
      const { stdout, stderr } = o;
      if (stdout.trim()) m.reply(stdout);
      if (stderr.trim()) m.reply(stderr);
    }
  }
};

handler.help = ['>eval'];
handler.tags = ['advanced'];
handler.customPrefix = /^[>] /;
handler.command = new RegExp;
handler.rowner = true;

export default handler;
