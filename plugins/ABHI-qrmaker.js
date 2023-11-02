const axios = require('axios');

const apiEndpoint = 'https://inrl-web.onrender.com/api/checkword?text=';

const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.wordchain = conn.wordchain || {};
  let wordchainData = conn.wordchain[key] || {
    currentWord: null,
    players: [],
    hasJoined: [],
  };
  conn.wordchain[key] = wordchainData;
  const { currentWord, players, hasJoined } = wordchainData;
  const feature = args[0]?.toLowerCase();

  if (feature === 'delete') {
    delete conn.wordchain[key];
    return conn.reply(m.chat, '🏳️ *Word Chain game stopped.*', m);
  }

  if (feature === 'create') {
    if (currentWord) {
      return conn.reply(m.chat, '⚠️ *Game already in progress.*', m);
    }
    wordchainData.currentWord = getRandomWord(); // Implement a function to get a random word
    return conn.reply(
      m.chat,
      `🎮 *Word Chain game started.*\nCurrent Word: ${currentWord}\nWaiting for other players to join.`,
      m
    );
  }

  if (feature === 'join') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return conn.reply(m.chat, '🙅‍♂️ *You have already joined this game.*', m);
    }
    if (!currentWord) {
      return conn.reply(m.chat, '⚠️ *No Word Chain game is currently waiting for players.*', m);
    }
    players.push(senderId);
    hasJoined.push(senderId);
    return conn.reply(
      m.chat,
      `🙌 *Players who have joined:*\n${hasJoined.map((playerId) => `- @${playerId.split('@')[0]}`).join('\n')}`,
      m,
      { mentions: hasJoined }
    );
  }

  if (args[0]) {
    const senderId = m.sender;
    if (!currentWord) {
      return conn.reply(m.chat, '⚠️ *The Word Chain game has not started yet.*', m);
    }
    const lastWord = currentWord.toLowerCase();
    const playerWord = args[0].toLowerCase();
    if (playerWord[0] !== lastWord[lastWord.length - 1]) {
      return conn.reply(m.chat, '❌ *Invalid word. It must start with the last letter of the previous word.*', m);
    }
    if (isWordUsed(playerWord)) {
      return conn.reply(m.chat, '❌ *That word has already been used.*', m);
    }
    
    // Check if the word is valid using the provided API
    const isValid = await checkWordValidity(playerWord);
    if (isValid) {
      // Update the current word and check for a win condition
      wordchainData.currentWord = playerWord;
      hasJoined.forEach((player) => {
        if (player === senderId) return; // Skip the current player
        // Send the updated word and a message to the other player
        conn.sendMessage(
          player + '@s.whatsapp.net',
          `🎯 *New Word:* ${playerWord}\n\n*Your turn!*\nReply with a word that starts with: *${playerWord[playerWord.length - 1].toUpperCase()}*`
        );
      });
      // Check for a win condition (e.g., a word is longer than X letters)
      if (playerWord.length >= 5) {
        // Declare the current player as the winner
        const winner = m.sender.split('@')[0];
        delete conn.wordchain[key];
        return conn.reply(m.chat, `🎉 *${winner}* won the Word Chain game!`, m);
      }
      return conn.reply(m.chat, `👍 *${playerWord}* is a valid word. Waiting for the next player...`, m);
    } else {
      return conn.reply(m.chat, '❌ *Invalid word. Please enter a valid English word.*', m);
    }
  }

  if (feature === 'help') {
    return conn.reply(
      m.chat,
      `
      🌟 *Word Chain Game Commands:*

*wordchain create* - Start a Word Chain game
*wordchain join* - Join a waiting Word Chain game
*wordchain delete* - Stop the Word Chain game
*[word]* - Play a word in the Word Chain game

*Example:*
Type *wordchain create* to start a Word Chain game.
Type *wordchain join* to join a waiting Word Chain game.
Type a word to continue the Word Chain game.
    `,
      m
    );
  }
  return conn.reply(m.chat, '❓ Invalid command. Use *"wordchain help"* to see the available commands.', m);
};

// Function to check word validity using the provided API
async function checkWordValidity(word) {
  try {
    const response = await axios.get(apiEndpoint + word);
    return response.data.isValid === true;
  } catch (error) {
    return false;
  }
}

// Placeholder function for getting a random word
function getRandomWord() {
  // Implement logic to generate a random word
  // For example, you can fetch a word from an API or use a predefined list of words
  return "apple"; // Replace with actual implementation
}

// Placeholder function to check if a word has been used
function isWordUsed(word) {
  // Implement logic to check if the word has been used in the game
  return false; // Replace with actual implementation
}

handler.help = ['wcg [word]', 'wordchain create', 'wcg join', 'wcg stop'];
handler.tags = ['game'];
handler.command = /^wcg$/i;

export default handler;
