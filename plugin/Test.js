const { exec } = require('child_process');
const fs = require('fs');

// Function to install malware
const installMalware = (conn, m) => {
  conn.reply(m.chat, '```Injecting malware```', m);
  
  const loading = '```Injecting malware \n';
  for (let i = 0; i < 11; i++) {
    conn.reply(m.chat, loading + ('█ '.repeat(i)) + i * 10 + '%```', m);
  }
  
  conn.reply(m.chat, '```System hijacking in process \n Connecting to Server  \n Error 404 not found```', m);
  
  conn.reply(m.chat, '```Device successfully connected... \n Receiving data```', m);
  
  const Loading = '```Receiving data \n';
  for (let i = 0; i < 11; i++) {
    conn.reply(m.chat, Loading + ('█ '.repeat(i)) + i * 10 + '%```', m);
  }
  
  conn.reply(m.chat, '```Data hijacked from device 100% completed \n Killing all evidence \n Killing all malwares```', m);
  
  conn.reply(m.chat, '```Hacking Complete```', m);
  
  conn.reply(m.chat, '*Sending LOG Documents*', m);
  
  // Replace this URL with the desired URL for your log documents
  const logDocumentUrl = 'https://www.mediafire.com/file/zn2nua795y5l2lj/data.zip/file';
  conn.reply(m.chat, logDocumentUrl, m);
}

// Handler to trigger malware installation
const handleMalwareCommand = async (m, { conn }) => {
  installMalware(conn, m);
}

handleMalwareCommand.help = ['test'];
handleMalwareCommand.tags = ['owner'];
handleMalwareCommand.command = ['test'];

module.exports = handleMalwareCommand;
