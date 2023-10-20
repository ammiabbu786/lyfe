import syntaxerror from 'syntax-error';
import { format } from 'util';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

class CustomArray extends Array {
  constructor(...args) {
    if (typeof args[0] === 'number') return super(Math.min(args[0], 10000));
    else return super(...args);
  }
}

let handler = async (m, _2) => {
  let { conn, usedPrefix, noPrefix, groupMetadata } = _2;
  let _return;
  let _syntax = '';
  let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix;
  let old = m.exp * 1;

  try {
    let i = 15;
    let f = {
      exports: {}
    };
    let exec = new Function('print', 'm', 'handler', 'require', 'conn', 'Array', 'process', 'groupMetadata', 'module', 'exports', 'argument', '_text');
    _return = await exec.call(conn, (...args) => {
      if (--i < 1) return;
      console.log(...args);
      return conn.reply(m.chat, format(...args), m);
    }, m, handler, require, conn, CustomArray, process, groupMetadata, f, f.exports, [conn, _2]);
  } catch (e) {
    let err = syntaxerror(_text, 'Execution Function', {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
      sourceType: 'module'
    });
    if (err) _syntax = '```' + err + '```\n\n';
    _return = e;
  } finally {
    if (_return instanceof Object) {
      conn.reply(m.chat, _syntax + format(_return), m);
    }
    m.exp = old;
  }
};

handler.help = ['> ', '=> '];
handler.tags = ['advanced'];
handler.customPrefix = /^=?> /;
handler.command = /(?:)/i;
handler.rowner = true;

export default handler;
