const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.numbergame = conn.numbergame || {};
  let numberGameData = conn.numbergame[key] || {
    currentRound: 0,
  };
  conn.numbergame[key] = numberGameData;
  const { currentRound } = numberGameData;
  const feature = args[0]?.toLowerCase();

  if (currentRound < 3) {
    // Continue with the Word Chain game
    // (You can reuse the existing Word Chain logic here)
    // ...
  } else if (currentRound >= 3) {
    // Transition to the number guessing game
    if (feature === 'stop') {
      delete conn.numbergame[key];
      return conn.reply(m.chat, '🏳️ *Number Guessing game stopped.*', m);
    }

    if (feature === 'start') {
      const min = 1;
      const max = 10;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      return conn.reply(m.chat, `🎮 *Number Guessing game started.*\nI'm thinking of a number between ${min} and ${max}. Guess the number!`, m);
    }

    if (!isNaN(feature)) {
      const guess = parseInt(feature);
      const min = 20;
      const max = 30;
      const correctNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      if (guess === correctNumber) {
        delete conn.numbergame[key];
        return conn.reply(m.chat, `🎉 Congratulations! You guessed the correct number (${correctNumber}). You won the Number Guessing game!`, m);
      } else {
        return conn.reply(m.chat, '❌ Incorrect guess. Try again!', m);
      }
    }

    if (feature === 'help') {
      return conn.reply(m.chat, '🌟 *Number Guessing Game Commands:*\n\n*numbergame start* - Start the Number Guessing game\n*numbergame stop* - Stop the Number Guessing game\n*[number]* - Make a guess in the Number Guessing game', m);
    }
  }
  
  return conn.reply(m.chat, '❓ Invalid command. Use *"numbergame help"* to see the available commands.', m);
};

handler.help = ['numbergame [number]', 'numbergame start', 'numbergame stop'];
handler.tags = ['game'];
handler.command = /^$/i;

export default handler;
