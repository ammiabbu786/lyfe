let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!["sent", "send", "giv", "giv", "gib", "upload", "give", "znt", "znd", "snt", "snd", "snt"].includes(command.toLowerCase())) return;

    // Forward the quoted message
    return await conn.forwardMessage(m.jid, m.quoted, {
      quoted: m.data,
      /*linkPreview: {
        title: "title"
      }*/
    });
  } catch (e) {
    // Handle errors
    await conn.sendMessage(m.chat, e, m);
  }
};

export default handler;

