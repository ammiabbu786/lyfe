let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (text.toLowerCase() === 'alive') {
        // Create a poll with predefined settings
        const pollMessage = {
            name: 'Polling Request',
            values: ['test1', 'test2'],
            multiselect: false,
            selectableCount: 1
        };

        // Send a text message as a reply to "alive" before sending the poll
        await conn.sendMessage(m.chat, 'Hi, I am alive now. Please participate in the poll.', m);
        
        // Send the poll
        await conn.sendMessage(m.chat, {
            poll: pollMessage
        });
    }
}

handler.command = /^(alive)$/i;
handler.tags = ['group'];

export default handler;
