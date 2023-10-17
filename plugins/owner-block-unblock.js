let handler = async (m, { conn, text, command }) => {

  if (!isOwner) {
    return conn.reply(m.chat, 'You are not authorized to clear messages.', m);
  }

  // Check the command, e.g., .clear chat or .clear group
  if (command === 'clear') {
    // Check if it's a chat or group
    if (m.isGroup) {
      // Delete all messages in the group
      await conn.clearChat(m.chat.id);
      conn.reply(m.chat, 'Group messages cleared.', m);
    } else {
      // Clear the chat for one-on-one conversation
      await conn.clearChat(m.chat.id);
      conn.reply(m.chat, 'Chat cleared.', m);
    }
  }
}

handler.command = /^clear$/i;
handler.owner = true

export default handler;
