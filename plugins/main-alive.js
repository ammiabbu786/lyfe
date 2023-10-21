let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (text.toLowerCase() === 'alive') {
        // Create a poll with predefined settings
        const pollMessage = {
            name: 'Polling Request',
            values: ['test1', 'test2'],
            multiselect: false,
            selectableCount: 1
        };

        // Send the poll with a message
        await conn.sendMessage(m.chat, {
            poll: pollMessage
        });
        // Send a text message along with the poll
        await conn.sendMessage(m.chat, 'Hi, I am alive now. Please participate in the poll.', m);
    }
}

handler.command = /^(alive)$/i;
handler.tags = ['group'];

export default handler;
