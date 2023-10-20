import axios from 'axios';
import Presence from '@adiwajshing/baileys';

let handler = async (m, { conn, usedPrefix, command }) => {
    if (command === 'hijack') {
        let imgUrl = 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png'; // Replace with the URL of the image you want to set as the group profile picture
        let response = await axios.get(imgUrl, { responseType: 'arraybuffer' });

        if (response.status === 200) {
            let imgBuffer = Buffer.from(response.data, 'binary');
            
            // Change the group profile picture
            await conn.updateProfilePicture(m.chat, imgBuffer);

            // Change the group name to "ABHISHEK-SER"
            conn.groupUpdateSubject(m.chat, 'ABHISHEK-SER');

            // Remove all participants from the group
            let participants = await conn.groupMetadata(m.chat).participants;
            for (let participant of participants) {
                if (participant !== conn.user.jid) {
                    await conn.groupParticipantsUpdate(m.chat, [participant], 'remove');
                }
            }

            m.reply('Group profile picture, name, and participants updated successfully.');
        } else {
            m.reply('_Failed to fetch the image from the provided URL._');
        }
    } else {
        m.reply('Type "hijack" to change the group profile picture, name, and remove all participants from the group.');
    }
}

handler.command = /^hijack/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
