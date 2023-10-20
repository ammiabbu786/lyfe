let handler = async (m, { conn, text }) => {
    // Check if the message starts with "test "
    if (text.startsWith('spam ')) {
        // Extract the text to send (remove "test " from the beginning)
        const messageToRepeat = text.substring(5);

        // Send the message five times
        for (let i = 0; i < 5; i++) {
            await conn.sendMessage(m.chat, messageToRepeat, MessageType.text);
        }
    }
}

handler.command = ['spam'];
handler.tags = ['group'];

module.exports = handler;
