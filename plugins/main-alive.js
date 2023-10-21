let pendingAlive = false;

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (text.toLowerCase() === 'alive') {
        // Set the flag to indicate that an "alive" message is pending a response
        pendingAlive = true;

        // Send a text message as a reply to "alive"
        await conn.sendMessage(m.chat, 'Hi, I am alive now. Please participate in the poll. Reply with "1" for .ping or "2" for .menu.', m);
    }
}

// Listen for replies
conn.on('message-new', async (message) => {
    if (pendingAlive && message.message && message.message.text) {
        const replyText = message.message.text;

        if (replyText === '1') {
            // Execute .ping command
            await conn.sendMessage(message.key.remoteJid, `${usedPrefix}ping`, message.key.id);
        } else if (replyText === '2') {
            // Execute .menu command
            await conn.sendMessage(message.key.remoteJid, `${usedPrefix}menu`, message.key.id);
        }

        // Reset the flag
        pendingAlive = false;
    }
});

handler.command = /^(alive)$/i;
handler.tags = ['group'];

export default handler;
