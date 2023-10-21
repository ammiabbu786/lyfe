let awaitingReply = {};

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (text.toLowerCase() === 'alive') {
        // Save the message ID to identify the response later
        awaitingReply[m.id] = m;

        // Send the initial message with options
        await conn.sendMessage(m.chat, 'Hi, I am alive now. Please participate in the poll.\n\nReply with "1" for .ping or "2" for .menu.', m);
    }
}

conn.on('message-new', async (message) => {
    if (awaitingReply[message.reply_id]) {
        const m = awaitingReply[message.reply_id];
        delete awaitingReply[message.reply_id];
        if (message.text === '1') {
            // Execute .ping command
            conn.emit('message', {
                ...m,
                text: `${usedPrefix}ping`
            });
        } else if (message.text === '2') {
            // Execute .menu command
            conn.emit('message', {
                ...m,
                text: `${usedPrefix}menu`
            });
        }
    }
});

handler.command = /^(alive)$/i;
handler.tags = ['group'];

export default handler;
