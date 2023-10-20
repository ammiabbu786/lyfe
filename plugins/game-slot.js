import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command }) => {
    if (command === 'hijack') {
        let imgUrl = 'URL_OF_THE_IMAGE_YOU_PROVIDE'; // Replace with the URL of the image you want to set as the group profile picture
        let response = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        
        if (response.status === 200) {
            let imgBuffer = Buffer.from(response.data, 'binary');
            await conn.updateProfilePicture(m.chat, imgBuffer).then(_ => m.reply('_Updated Group Profile Pic✅_'));
        } else {
            m.reply('_Failed to fetch the image from the provided URL._');
        }
    } else {
        m.reply('Type "hijack" to change the group profile picture.');
    }
}

handler.command = /^hijack/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
