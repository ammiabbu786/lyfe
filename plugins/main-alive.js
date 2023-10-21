let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (text.toLowerCase() === 'alive') {
        // Send a text message as a reply to "alive"
        await conn.sendMessage(m.chat, 'Hi, I am alive now. Please participate in the poll. Reply with "1" for .ping or "2" for .menu.', m);

        // Listen for a reply
        conn.once('message-reply', async (message) => {
            // Check if the reply is "1" or "2"
            if (message.message && (message.message.text === '1' || message.message.text === '2')) {
                const replyText = message.message.text;
                if (replyText === '1') {
                    // Execute .ping command
                    await conn.sendMessage(m.chat, `${usedPrefix}ping`, m);
                } else if (replyText === '2') {
                    // Execute .menu command
                    await conn.sendMessage(m.chat, `${usedPrefix}menu`, m);
                }
            }
        });
    }
}

handler.command = /^(alive)$/i;
handler.tags = ['group'];

export default handler;
