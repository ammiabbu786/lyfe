import { exec } from 'child_process';
import fs from 'fs';

let installationInProgress = false;

// Function to install a plugin from a GitHub Gist URL
const installPlugin = (conn, text, isOwner, m) => {
  if (!isOwner) {
    return conn.reply(m.chat, 'This Command Can Only Be Used By The *Creator Of The Bot*', m);
  }

  if (installationInProgress) {
    return conn.reply(m.chat, '*Installation is already in progress. Please wait...*', m);
  }

  if (!text) {
    return conn.reply(m.chat, '*⚠️Please Provide The Url Of Plugin You Want To Install*', m);
  }

  installationInProgress = true;

  conn.reply(m.chat, `*Installing Plugin⬇️*`, m);

  exec(`wget ${text}/raw -O plugins/plugin.js`, (error, stdout, stderr) => {
    installationInProgress = false; // Reset the flag

    if (error) {
      return conn.reply(m.chat, '*Failed To Install The Plugin❌*', m);
    }

    // Read the contents of the installed plugin file
    const pluginFilePath = './plugins/plugin.js';
    try {
      const pluginFileContents = fs.readFileSync(pluginFilePath, 'utf-8');

      // Extract plugin information from the file contents (example: 'export const pluginName = 'My Plugin';')
      const matchPluginName = pluginFileContents.match(/export const pluginName = '([^']+)';/);
      const matchPluginCommand = pluginFileContents.match(/export const pluginCommand = '([^']+)';/);

      if (matchPluginName && matchPluginCommand) {
        const pluginName = matchPluginName[1];
        const pluginCommand = matchPluginCommand[1];

        // Show the plugin name and command only after installation
        conn.reply(m.chat, `*Plugin Installed✅*\n\n*Plugin Name:* ${pluginName}\n*Plugin Command:* ${pluginCommand}`, m);
      } else {
        conn.reply(m.chat, '*⚠️ABHISHEK-SER Bot Does Not Support This Type Of Plugin*', m);
      }
    } catch (e) {
      conn.reply(m.chat, '*Error Reading The Installed Plugin File❌*', m);
    }
  });
}
 else {
    conn.reply(m.chat, '*Invalid Plugin URL❌*', m);
  }
}

// Function to list installed plugins
export function listInstalledPlugins(conn, m) {
  if (installedPlugins.length > 0) {
    const pluginList = installedPlugins.map((plugin, index) => {
      return `Plugin ${index + 1}:\n*Name:* ${plugin.name}\n*Command:* ${plugin.command}\n*Link:* ${plugin.url}`;
    });

    conn.reply(m.chat, `*Installed Plugins:*\n${pluginList.join('\n\n')}`, m);
  } else {
    conn.reply(m.chat, 'No plugins are currently installed.', m);
  }
}

// Function to remove a plugin by name
const removePluginByName = (conn, name, m) => {
  const index = installedPlugins.findIndex((plugin) => plugin.name === name);

  if (index !== -1) {
    installedPlugins.splice(index, 1); // Remove the plugin from the array
    conn.reply(m.chat, `Plugin named "${name}" has been removed.`, m);
  } else {
    conn.reply(m.chat, `No plugin with the name "${name}" found.`, m);
  }
}

// Handler to process .plugin command
const handlePluginCommand = async (m, { conn, text, isOwner }) => {
  if (text === 'get') {
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
}

handlePluginCommand.help = ['plugin <url>', 'plugin list', 'plugin remove <name>'];
handlePluginCommand.tags = ['owner'];
handlePluginCommand.command = ['plugin'];

export default handlePluginCommand;
