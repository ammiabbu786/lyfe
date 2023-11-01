const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.numbergame = conn.numbergame || {};
  let numberGameData = conn.numbergame[key] || {
    round: 0,
    numberToGuess: 0,
    players: [],
    currentPlayer: null,
    attempts: 0,
    gameStartTimeout: null, // Timeout for automatic game start
  };
  conn.numbergame[key] = numberGameData;
  const { round, numberToGuess, players, currentPlayer, attempts, gameStartTimeout } = numberGameData;
  const guess = args[0];

  const roundRanges = [
    { min: 1, max: 10 },
    { min: 30, max: 50 },
    { min: 60, max: 80 },
    // Define more ranges for rounds 4, 5, and 6 as needed
  ];

  if (args[0] === 'start') {
    if (round >= 6) {
        return conn.reply(m.chat, '🏁 *All rounds have been completed.*', m);
    }
    if (numberToGuess !== 0) {
        return conn.reply(m.chat, '⚠️ *Game already in progress.*', m);
    }

    numberGameData.numberToGuess = getRandomNumber(roundRanges[round].min, roundRanges[round].max);
    numberGameData.players = [];
    numberGameData.currentPlayer = null;
    numberGameData.attempts = 0;
    clearTimeout(gameStartTimeout); // Clear any existing timeout

    // Start a 15-second timer for automatic game start
    numberGameData.gameStartTimeout = setTimeout(() => {
        if (players.length >= 2) {
            numberGameData.currentPlayer = players[0];
            conn.reply(m.chat, `🏁 Round ${round + 1} has started! Guess a number between ${roundRanges[round].min}-${roundRanges[round].max}. It's @${currentPlayer.split('@')[0]}'s turn to guess.`, m);
        } else {
            conn.reply(m.chat, '⚠️ Not enough players joined. Starting a new game.', m);
        }
    }, 15000);

    return conn.reply(m.chat, `🎮 *Number Guessing Game - Round ${round + 1} started.*\nPlayers can join using *join* command.\nAutomatic game start in 15 seconds.\nUse *startgame* to begin manually.`, m);
}

  if (args[0] === 'join') {
    const senderId = m.sender;
    if (!players.includes(senderId)) {
      players.push(senderId);
      return conn.reply(m.chat, '🙌 @' + senderId.split('@')[0] + ' joined the game!', m);
    } else {
      return conn.reply(m.chat, '🙅‍♂️ *You have already joined this game.*', m);
    }
  }

  if (args[0] === 'startgame') {
    if (players.length < 2) {
      return conn.reply(m.chat, '⚠️ *At least two players are required to start the game.*', m);
    }
    if (numberToGuess !== 0) {
      return conn.reply(m.chat, '⚠️ *Game already in progress.*', m);
    }
    numberGameData.currentPlayer = players[0];
    clearTimeout(gameStartTimeout); // Clear the game start timeout
    return conn.reply(m.chat, `🏁 Round ${round + 1} has started! Guess a number between ${roundRanges[round].min}-${roundRanges[round].max}. It's @${currentPlayer.split('@')[0]}'s turn to guess.`, m);
  }

  if (numberToGuess !== 0 && currentPlayer === m.sender && guess !== undefined) {
    const playerGuess = parseInt(guess);
    if (!isNaN(playerGuess)) {
      numberGameData.attempts++;
      if (playerGuess === numberToGuess) {
        if (round >= 5) {
          delete conn.numbergame[key];
          return conn.reply(m.chat, '🎉 @' + currentPlayer.split('@')[0] + ` guessed the number ${numberToGuess} in ${attempts} attempts! All rounds have been completed.`, m);
        } else {
          numberGameData.round++;
          numberGameData.numberToGuess = 0;
          conn.reply(m.chat, `🎉 @${currentPlayer.split('@')[0]} guessed the number ${numberToGuess} in ${attempts} attempts! Round ${round + 1} completed.`, m);
          return conn.reply(m.chat, '🏁 *Next round is starting...*', m);
        }
      } else if (playerGuess < numberToGuess) {
        const nextPlayerIndex = (players.indexOf(currentPlayer) + 1) % players.length;
        numberGameData.currentPlayer = players[nextPlayerIndex];
        return conn.reply(m.chat, `🔽 @${currentPlayer.split('@')[0]}, try a higher number. It's @${currentPlayer.split('@')[0]}'s turn.`, m);
      } else {
        const nextPlayerIndex = (players.indexOf(currentPlayer) + 1) % players.length;
        numberGameData.currentPlayer = players[nextPlayerIndex];
        return conn.reply(m.chat, `🔼 @${currentPlayer.split('@')[0]}, try a lower number. It's @${currentPlayer.split('@')[0]}'s turn.`, m);
      }
    } else {
      return conn.reply(m.chat, '❌ Please enter a valid number.', m);
    }
  }

  if (args[0] === 'stop') {
    delete conn.numbergame[key];
    clearTimeout(gameStartTimeout); // Clear the game start timeout
    return conn.reply(m.chat, '🏳️ *Number Guessing Game stopped.*', m);
  }

  if (args[0] === 'help') {
    return conn.reply(m.chat, '🌟 *Number Guessing Game Commands:*\n\n' +
      'Type *start* to begin a new game.\n' +
      'Type *join* to join the game.\n' +
      'Type *startgame* to start the game (requires at least two players).\n' +
      'Type a number to make a guess.\n' +
      'Type *stop* to end the game.', m);
  }

  return conn.reply(m.chat, '❓ Invalid command. Use *"help"* to see the available commands.', m);
};

// Implement the getRandomNumber function as needed.

// Function to get a random number within the specified range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

handler.help = ['numbergame [number]', 'numbergame start', 'numbergame join', 'numbergame startgame', 'numbergame stop'];
handler.tags = ['game'];
handler.command = /^numbergame$/i;

export default handler;
