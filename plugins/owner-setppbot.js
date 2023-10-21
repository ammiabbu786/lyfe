let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (text === 'setpp') {
        // Send a poll with options "alive" and "ping"
        const pollMessage = {
            name: '*Polling Request By* ' + m.name,
            values: ['Alive', 'Ping'],
            multiselect: false,
            selectableCount: 1
        };

        await conn.sendMessage(m.chat, {
            poll: pollMessage
        });
    } else {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || q.mediaType || '';
        if (/image/.test(mime)) {
            let img = await q.download();
            if (!img) throw '*REPLY TO AN IMAGE.*';
            await conn.updateProfilePicture(conn.user.jid, img).then(_ => m.reply('_Updated Profile Pic✅_'));
        } else {
            // Handle it as a poll request
            // Split the message text using the '|' character and slice the array to remove the first element.
            let a = text.split("|").slice(1);
            if (!a[1]) throw "Format\n" + usedPrefix + command + " Is ABHISHEK-SER Bot Is Good? |Yes|No";
            if (a.length > 2) throw "Too many options, Format\n" + usedPrefix + command + " Is ABHISHEK-SER Bot Is Good? |Yes|No";
            // Check for duplicate options in the poll.
            if (checkDuplicate(a)) throw "Duplicate options in the message!";
            let cap = "*Polling Request By* " + m.name + "\n*Message:* " + text.split("|")[0];

            const pollMessage = {
                name: cap,
                values: a,
                multiselect: false,
                selectableCount: 1
            };

            await conn.sendMessage(m.chat, {
                poll: pollMessage
            });
        }
    }
}

handler.command = /^setpp/i;
handler.group = false;
handler.owner = true;
handler.botAdmin = false;

export default handler;

// Function to check for duplicate elements in an array.
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}
