const goodMorningMessages = [
  "Good morning! Have a wonderful day.",
  "Rise and shine! It's a new day.",
  "Wishing you a bright and cheerful morning.",
  // Add more Good Morning messages here
];

const goodNightMessages = [
  "Good night! Sweet dreams.",
  "Sleep tight and have a peaceful night.",
  "Wishing you a restful night's sleep.",
  // Add more Good Night messages here
];

// Your command handler
const handleMessages = async (m, { conn, text, usedPrefix, command }) => {
  if (text === "gm") {
    const randomIndex = Math.floor(Math.random() * goodMorningMessages.length);
    const message = goodMorningMessages[randomIndex];
    await conn.sendMessage(m.chat, message, MessageType.text);
  } else if (text === "gn") {
    const randomIndex = Math.floor(Math.random() * goodNightMessages.length);
    const message = goodNightMessages[randomIndex];
    await conn.sendMessage(m.chat, message, MessageType.text);
  }
};

// Assign the command
handleMessages.command = /^(gm|gn)$/i;

export default handleMessages;
