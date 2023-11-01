// Modify the function to set background music (BGM)
const setBGM = (conn, text, m) => {
  const audioUrl = text.trim(); // Assume text contains the audio link
  // Validate the audio link here, e.g., check if it's an MP3 or MP4 link

  // Store the BGM URL for later use (you can use a global variable or a database)
  const bgmUrl = audioUrl;

  // You can set the BGM URL in your bot's settings or a database for future use
  // Example: botSettings.bgmUrl = bgmUrl;

  conn.reply(m.chat, `Background music has been set to the provided link.`, m);
};

// Modify the handler to handle setting BGM
const handlePluginCommand = async (m, { conn, text, isOwner }) => {
  if (text.startsWith('setbgm')) {
    const bgmLink = text.replace('setbgm', '').trim();
    setBGM(conn, bgmLink, m);
  } else if (text === 'get') {
    // If the user enters "plugin get", show the specified text
    conn.reply(m.chat, 'hi plugins hi link hi', m);
  } else if (text.startsWith('list')) {
    listInstalledPlugins(conn, m);
  } else if (text.startsWith('remove')) {
    const name = text.replace('remove', '').trim();
    if (name) {
      removePluginByName(conn, name, m);
    } else {
      conn.reply(m.chat, 'Please provide the name of the plugin you want to remove.', m);
    }
  } else {
    installPlugin(conn, text, isOwner, m);
  }
};

// Update the help and tags for the modified command
handlePluginCommand.help = [
  'plugin <url> - Install a plugin from the given URL.',
  'setbgm <audio_link> - Set background music using an audio link.',
  'plugin list - List installed plugins.',
  'plugin remove <name> - Remove an installed plugin by name.'
];
handlePluginCommand.tags = ['owner'];

// Command names can remain the same
handlePluginCommand.command = ['plugin', 'setbgm'];

export default handlePluginCommand;
