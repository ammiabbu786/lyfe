// Define the plugin constants
export const pluginName = 'DALL·E Image Generator';
export const pluginCommand = 'dalle'; // This should match the command in handler.command

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    if (text.toLowerCase() === 'inrl') {
        let result = "This is an example of a poll command. You can create a poll by following this format:\n\n" +
            `${usedPrefix}${command} Is ABHISHEK-SER Bot Good? |Yes|No\n\n` +
            "You can add more options by separating them with a '|'. Remember, the format is important to create a poll.";

        // Send the poll creation command and result as a reply.
        await conn.sendMessage(m.chat, result, m, {
            quoted: m
        });
    }
    else if (text.toLowerCase() === 'inrl poll') {
        // Create a sample poll for demonstration.
        let cap = "*Polling Request By* " + m.name + "\n*Message:* Is ABHISHEK-SER Bot Good?"
        const pollMessage = {
            name: cap,
            values: ["Yes", "No"],
            multiselect: false,
            selectableCount: 1
        }
      
        // Send the sample poll.
        await conn.sendMessage(m.chat, {
            poll: pollMessage
        });
    }
}

handler.help = ["inrl", "inrl poll"];
handler.tags = ["group"];
handler.command = /^inrl$/i;

export default handler;


handler.help = [pluginCommand]; // Use the defined pluginCommand
handler.tags = ['AI'];
handler.command = [pluginCommand]; // Use the defined pluginCommand
export default handler;
