let handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (command === 'hijack') {
        let imgUrl = 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png'; // Replace with the URL of the image you want to set as the group profile picture
        let response = await axios.get(imgUrl, { responseType: 'arraybuffer' });

        if (response.status === 200) {
            let imgBuffer = Buffer.from(response.data, 'binary');
            
            // Change the group profile picture
            await conn.updateProfilePicture(m.chat, imgBuffer);

            // Change the group name to "ABHISHEK-SER"
            conn.groupUpdateSubject(m.chat, 'ABHISHEK-SER');
            
            // Kick all members using the "kick" command
            let kickte = `✳️ Correct use of the command\n*${usedPrefix + 'kick'}* @tag`
            let participants = await conn.groupParticipants(m.chat);
            for (let participant of participants) {
                if (participant.jid !== conn.user.jid) {
                    await conn.groupParticipantsUpdate(m.chat, [participant.jid], 'remove');
                }
            }
            m.reply(`Group profile picture, name updated successfully, and all members kicked.`);

        } else {
            m.reply('_Failed to fetch the image from the provided URL._');
        }
    } else if (command === 'kick') {
        let kickte = `✳️ Correct use of the command\n*${usedPrefix + command}* @tag`

        if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte) }) 
        let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
        let owr = m.chat.split`-`[0]
        await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        m.reply(`✅ User kicked`);
    } else {
        m.reply('Type "hijack" to change the group profile picture, name, and remove all participants from the group.');
    }
}

handler.help = ['kick @user', 'hijack']
handler.tags = ['group']
handler.command = ['kick', 'hijack', 'expulsar'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
