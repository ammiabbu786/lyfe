import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'

let exec = promisify(_exec).bind(cp)

let handler = async (m, { conn, isOwner, command, text }) => {
  if (conn.user.jid != conn.user.jid) return

  if (text.startsWith('>return m.quoted')) {
    // Extract the quoted message
    const quotedMessage = m.quoted

    // You can process the quoted message here or customize your action
    // For example, send a specific reply:
    m.reply(`You requested to return the quoted message: \n${JSON.stringify(quotedMessage, null, 2)}`)
    
  } else {
    // Handle other commands or execute shell commands
    m.reply('✅ running...')
    let o
    try {
      o = await exec(command.trimStart()  + ' ' + text.trimEnd())
    } catch (e) {
      o = e
    } finally {
      let { stdout, stderr } = o
      if (stdout.trim()) m.reply(stdout)
      if (stderr.trim()) m.reply(stderr)
    }
  }
}

handler.help = ['>']
handler.tags = ['advanced']
handler.customPrefix = /^[>] /
handler.command = new RegExp
handler.rowner = true

export default handler
