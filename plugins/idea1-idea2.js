const handler = async (m, { conn, text, args }) => {
    // Your group menu system
    if (m.isGroup) {
        const randomSymbol = '✪'; // Change this to your desired symbol
        const cmdGrup = ['idea1', 'idea2']; // Add more commands as needed

        const anu = `✪━ 乂 *Group Menu* 乂 ━✪\n${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v) => `${randomSymbol} ${prefix}` + v).join('\n')}\n╰──────✪`;
        conn.sendPoll(m.chat, anu, ['Owner', 'Ping']);
    }
};

handler.help = ["groupmenu"];
handler.tags = ["group"];
handler.command = /^groupmenu$/i;

export default handler;
