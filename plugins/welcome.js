conn.on('group-participants-update', async (m) => {
  if (m.action === 'add') {
    let groupId = m.jid;
    let addedMembers = m.participants;
    
    for (let participant of addedMembers) {
      // Replace 'YourWelcomeMessage' with your desired welcome message.
      let welcomeMessage = `Welcome to the group, @${participant.split('@')[0]}! 🎉`;
      
      // You can customize the ad reply content here.
      let adReply = {
        title: "Welcome Message",
        body: welcomeMessage,
        thumbnailUrl: "https://i.ibb.co/b2qG4DZ/57649e05a287.jpg", // URL of the welcome image
        sourceUrl: "https://example.com/group-link", // URL of your group link
        mediaType: 1, // 1 for image
        renderLargerThumbnail: true
      };

      // Send the welcome message with the ad reply.
      await conn.sendMessage(groupId, welcomeMessage, MessageType.text, {
        quoted: adReply,
        contextInfo: { mentionedJid: [participant] }
      });
    }
  }
});
