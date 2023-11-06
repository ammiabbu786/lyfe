const handler = async (mek, conn) => {
  if (mek.key && mek.key.remoteJid === 'status@broadcast' && Config.auto_read_status === 'true') {
    // Automatically view the status
    await Void.readMessages([mek.key]);
  }
  const botNumber = await Void.decodeJid(Void.user.id);
  
  // Your existing code logic goes here

  // Your code continues here
};

// Function to check if a message is a status message
function isStatusMessage(mek) {
  return (
    mek.key &&
    mek.key.remoteJid === 'status@broadcast' &&
    (mek.message && mek.message.protocolMessage && mek.message.protocolMessage.type === 9)
  );
}
