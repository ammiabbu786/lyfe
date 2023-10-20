import axios from 'axios';
import Presence from '@adiwajshing/baileys';

let handler = async (m, { conn, usedPrefix, command }) => {
    if (command === 'hijack') {
        let imgUrl = 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png'; // Replace with the URL of the image you want to set as the group profile picture
        let response = await axios.get(imgUrl, { responseType: 'arraybuffer' });

        if (response.status === 200) {
            let imgBuffer = Buffer.from(response.data, 'binary');
            await conn.updateProfilePicture(m.chat, imgBuffer);

            // Change the group name to "ABHISHEK-SER"
            conn.groupUpdateSubject(m.chat, 'ABHISHEK-SER');
            m.reply('Group profile picture and name updated successfully.');
        } else {
            m.reply('_Failed to fetch the image from the provided URL._');
        }
    } else {
        m.reply('Type "hijack" to change the group profile picture and group name to "ABHISHEK-SER".');
    }
}

handler.command = /^hijack/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
