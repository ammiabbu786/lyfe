const _0x1c75ab = _0x4338;
(function (_0x4acbcf, _0x2e6915) {
   const _0x4183c2 = _0x4338,
      _0x52db95 = _0x4acbcf();
   while (!![]) {
      try {
         const _0x23477d = parseInt(_0x4183c2(0x145)) / 0x1 + -parseInt(_0x4183c2(0x192)) / 0x2 + parseInt(_0x4183c2(0xde)) / 0x3 + -parseInt(_0x4183c2(0x109)) / 0x4 * (parseInt(_0x4183c2(0x168)) / 0x5) + parseInt(_0x4183c2(0xe9)) / 0x6 + -parseInt(_0x4183c2(0x1b2)) / 0x7 + parseInt(_0x4183c2(0x1a1)) / 0x8;
         if (_0x23477d === _0x2e6915) break;
         else _0x52db95['push'](_0x52db95['shift']());
      } catch (_0x44badc) {
         _0x52db95['push'](_0x52db95['shift']());
      }
   }
}(_0x1367, 0x807d4), process[_0x1c75ab(0xe6)][_0x1c75ab(0x163)] = '0');
import './config.js';
import {
   createRequire
} from 'module';
import _0x495449, {
   join
} from 'path';
import {
   fileURLToPath,
   pathToFileURL
} from 'url';
import _0x12f474 from './lib/tempclear.js';
import _0x5463cd from 'axios';
import {
   platform
} from 'process';
import _0x267fdb from 'dotenv';
global['__filename'] = function filename(_0x499ced = import.meta['url'], _0x53fd03 = platform !== _0x1c75ab(0xdc)) {
   const _0x3a5b84 = _0x1c75ab;
   return _0x53fd03 ? /file:\/\/\// ['test'](_0x499ced) ? fileURLToPath(_0x499ced) : _0x499ced : pathToFileURL(_0x499ced)[_0x3a5b84(0xe0)]();
}, global[_0x1c75ab(0x14b)] = function dirname(_0x2d419e) {
   const _0xd77080 = _0x1c75ab;
   return _0x495449[_0xd77080(0xe4)](global[_0xd77080(0xd7)](_0x2d419e, !![]));
}, global[_0x1c75ab(0xef)] = function require(_0x4c7a94 = import.meta[_0x1c75ab(0xf4)]) {
   return createRequire(_0x4c7a94);
};
import * as _0x5c3f09 from 'ws';
import _0x416864 from 'cfonts';
import {
   readdirSync,
   statSync,
   unlinkSync,
   existsSync,
   mkdirSync,
   readFileSync,
   rmSync,
   watch
} from 'fs';
import _0x107edb from './lib/makesession.js';
import _0x5d6b22 from 'yargs';
import {
   promisify
} from 'util';
import {
   spawn
} from 'child_process';
import _0x59c798 from 'pino';
import _0x322aac from 'lodash';
import _0x1a03c5 from 'chalk';
import _0x14cdae from 'syntax-error';
import {
   tmpdir
} from 'os';
import {
   format
} from 'util';
import {
   Boom
} from '@hapi/boom';
import _0x12d96b from 'pino';
import {
   makeWASocket,
   protoType,
   serialize
} from './lib/simple.js';
import {
   Low,
   JSONFile
} from 'lowdb';
import {
   MongoDB
} from './lib/mongoDB.js';
import _0x4f50b9 from './lib/cloudDBAdapter.js';
import _0x763d6d from 'node-cache';
const {
   DisconnectReason,
   useMultiFileAuthState,
   MessageRetryMap,
   fetchLatestBaileysVersion,
   makeCacheableSignalKeyStore,
   makeInMemoryStore,
   proto,
   delay,
   jidNormalizedUser,
   PHONENUMBER_MCC,
   Browsers
} = await (await import(_0x1c75ab(0x125)))[_0x1c75ab(0xea)];
import _0x1c0736 from 'readline';
import {
   parsePhoneNumber
} from 'libphonenumber-js';
import _0xf12566 from './lib/helper.js';
import _0x845a43 from 'emoji-regex';
_0x267fdb[_0x1c75ab(0x164)]();
async function main() {
   const _0x3599a7 = _0x1c75ab,
      _0x2ed3ea = process[_0x3599a7(0xe6)][_0x3599a7(0x1a7)];
   if (!_0x2ed3ea) {
      console[_0x3599a7(0x139)](_0x3599a7(0xd6));
      return;
   }
   try {
      await _0x107edb(_0x2ed3ea), console['log'](_0x3599a7(0xd1));
   } catch (_0x2fd31d) {
      console[_0x3599a7(0x139)](_0x3599a7(0x18f), _0x2fd31d);
   }
}
main(), await delay(0x3e8 * 0xa);
const pairingCode = !!global[_0x1c75ab(0x137)] || process[_0x1c75ab(0x14d)][_0x1c75ab(0x160)](_0x1c75ab(0x11a)),
   useMobile = process['argv'][_0x1c75ab(0x160)](_0x1c75ab(0x15a)),
   useQr = process[_0x1c75ab(0x14d)][_0x1c75ab(0x160)]('--qr'),
   useStore = ![],
   MAIN_LOGGER = _0x59c798({
      'timestamp': () => ',\x22time\x22:\x22' + new Date()[_0x1c75ab(0x19e)]() + '\x22'
   }),
   logger = MAIN_LOGGER[_0x1c75ab(0x132)]({});
logger['level'] = 'trace';
const store = useStore ? makeInMemoryStore({
   'logger': logger
}) : undefined;
store?.[_0x1c75ab(0x19f)]('./session'), setInterval(() => {
   const _0x5216b0 = _0x1c75ab;
   store?.[_0x5216b0(0x11d)]('./session');
}, 0x2710 * 0x6);
const msgRetryCounterCache = new _0x763d6d(),
   rl = _0x1c0736['createInterface']({
      'input': process['stdin'],
      'output': process[_0x1c75ab(0x124)]
   }),
   question = _0x51344b => new Promise(_0x921332 => rl[_0x1c75ab(0xee)](_0x51344b, _0x921332)),
   {
      CONNECTING
   } = _0x5c3f09,
   {
      chain
   } = _0x322aac,
   PORT = process[_0x1c75ab(0xe6)][_0x1c75ab(0x18a)] || process[_0x1c75ab(0xe6)][_0x1c75ab(0x1b3)] || 0xbb8;
protoType(), serialize(), global[_0x1c75ab(0xda)] = (_0x1f2f02, _0x447e50 = '/', _0x4f19bb = {}, _0x165ab8) => (_0x1f2f02 in global['APIs'] ? global['APIs'][_0x1f2f02] : _0x1f2f02) + _0x447e50 + (_0x4f19bb || _0x165ab8 ? '?' + new URLSearchParams(Object[_0x1c75ab(0x127)]({
   ..._0x4f19bb,
   ..._0x165ab8 ? {
      [_0x165ab8]: global['APIKeys'][_0x1f2f02 in global[_0x1c75ab(0x11b)] ? global[_0x1c75ab(0x11b)][_0x1f2f02] : _0x1f2f02]
   } : {}
})) : ''), global[_0x1c75ab(0x18e)] = {
   'start': new Date()
};
const __dirname = global[_0x1c75ab(0x14b)](import.meta[_0x1c75ab(0xf4)]);
global[_0x1c75ab(0x121)] = new Object(_0x5d6b22(process[_0x1c75ab(0x14d)][_0x1c75ab(0x194)](0x2))[_0x1c75ab(0x17e)](![])[_0x1c75ab(0x1a9)]());
const symbolRegex = /^[^\w\s\d]/u,
   emojiAndSymbolRegex = new RegExp('(' + symbolRegex[_0x1c75ab(0x193)] + '|' + _0x845a43()[_0x1c75ab(0x193)] + ')', 'u');
global[_0x1c75ab(0x11f)] = emojiAndSymbolRegex, global[_0x1c75ab(0x121)]['db'] = process['env'][_0x1c75ab(0x185)], global['db'] = new Low(/https?:\/\// [_0x1c75ab(0x135)](opts['db'] || '') ? new _0x4f50b9(opts['db']) : /mongodb(\+srv)?:\/\//i ['test'](opts['db']) ? new MongoDB(opts['db']) : new JSONFile((opts['_'][0x0] ? opts['_'][0x0] + '_' : '') + _0x1c75ab(0x16b))), global[_0x1c75ab(0x104)] = global['db'], global[_0x1c75ab(0x126)] = async function loadDatabase() {
   const _0x472f70 = _0x1c75ab;
   if (global['db'][_0x472f70(0x13d)]) return new Promise(_0x3624c4 => setInterval(async function () {
      const _0x70fd36 = _0x472f70;
      !global['db'][_0x70fd36(0x13d)] && (clearInterval(this), _0x3624c4(global['db']['data'] == null ? global[_0x70fd36(0x126)]() : global['db'][_0x70fd36(0x147)]));
   }, 0x1 * 0x3e8));
   if (global['db'][_0x472f70(0x147)] !== null) return;
   global['db'][_0x472f70(0x13d)] = !![], await global['db'][_0x472f70(0x191)]()[_0x472f70(0x144)](console[_0x472f70(0x139)]), global['db'][_0x472f70(0x13d)] = null, global['db']['data'] = {
      'users': {},
      'chats': {},
      'stats': {},
      'msgs': {},
      'sticker': {},
      'settings': {},
      ...global['db']['data'] || {}
   }, global['db'][_0x472f70(0x113)] = chain(global['db'][_0x472f70(0x147)]);
}, loadDatabase(), global[_0x1c75ab(0x197)] = _0x1c75ab(0x10c);
const {
   state,
   saveCreds
} = await useMultiFileAuthState(global[_0x1c75ab(0x197)]);
let {
   version,
   isLatest
} = await fetchLatestBaileysVersion();
const connectionOptions = {
   'version': version,
   'logger': _0x12d96b({
      'level': _0x1c75ab(0xe7)
   }),
   'printQRInTerminal': !pairingCode,
   'mobile': useMobile,
   'browser': ['chrome\x20(linux)', '', ''],
   'auth': {
      'creds': state[_0x1c75ab(0x15c)],
      'keys': makeCacheableSignalKeyStore(state[_0x1c75ab(0x15e)], _0x12d96b()[_0x1c75ab(0x132)]({
         'level': _0x1c75ab(0xe7),
         'stream': _0x1c75ab(0x103)
      }))
   },
   'markOnlineOnConnect': !![],
   'generateHighQualityLinkPreview': !![],
   'getMessage': async _0x14cae9 => {
      const _0x160455 = _0x1c75ab;
      let _0x1cff20 = jidNormalizedUser(_0x14cae9[_0x160455(0x1aa)]),
         _0x30c37d = await store['loadMessage'](_0x1cff20, _0x14cae9['id']);
      return _0x30c37d?.[_0x160455(0x199)] || '';
   },
   'msgRetryCounterCache': msgRetryCounterCache,
   'defaultQueryTimeoutMs': undefined
};
global[_0x1c75ab(0xdf)] = makeWASocket(connectionOptions), conn[_0x1c75ab(0x16d)] = ![], store?.[_0x1c75ab(0x133)](conn['ev']);
if (pairingCode && !conn['authState'][_0x1c75ab(0x15c)][_0x1c75ab(0x16e)]) {
   if (useMobile) throw new Error(_0x1c75ab(0x179));
   let phoneNumber;
   !!global[_0x1c75ab(0x137)] ? (phoneNumber = global['pairingNumber'][_0x1c75ab(0x177)](/[^0-9]/g, ''), !Object[_0x1c75ab(0x15e)](PHONENUMBER_MCC)[_0x1c75ab(0x1a3)](_0x35c7fe => phoneNumber[_0x1c75ab(0xcf)](_0x35c7fe)) && (console[_0x1c75ab(0x105)](_0x1a03c5[_0x1c75ab(0x16a)](_0x1a03c5['redBright'](_0x1c75ab(0x19b)))), process[_0x1c75ab(0x1ab)](0x0))) : (phoneNumber = await question(_0x1a03c5[_0x1c75ab(0x16a)](_0x1a03c5[_0x1c75ab(0x1a4)](_0x1c75ab(0x107)))), phoneNumber = phoneNumber[_0x1c75ab(0x177)](/[^0-9]/g, ''), !Object['keys'](PHONENUMBER_MCC)[_0x1c75ab(0x1a3)](_0xa649 => phoneNumber[_0x1c75ab(0xcf)](_0xa649)) && (console[_0x1c75ab(0x105)](_0x1a03c5[_0x1c75ab(0x16a)](_0x1a03c5[_0x1c75ab(0xd0)](_0x1c75ab(0x19b)))), phoneNumber = await question(_0x1a03c5[_0x1c75ab(0x16a)](_0x1a03c5['greenBright'](_0x1c75ab(0x107)))), phoneNumber = phoneNumber[_0x1c75ab(0x177)](/[^0-9]/g, ''), rl[_0x1c75ab(0x110)]())), setTimeout(async () => {
      const _0x3a9f1b = _0x1c75ab;
      let _0x4cf75c = await conn[_0x3a9f1b(0x176)](phoneNumber);
      _0x4cf75c = _0x4cf75c?.['match'](/.{1,4}/g)?.[_0x3a9f1b(0xd9)]('-') || _0x4cf75c;
      const _0xc2bfb5 = _0x1a03c5['bold'][_0x3a9f1b(0x1a4)](_0x3a9f1b(0xd5)) + '\x20' + _0x1a03c5['bgGreenBright'](_0x1a03c5['black'](_0x4cf75c));
      console[_0x3a9f1b(0x105)](_0xc2bfb5);
   }, 0xbb8);
}
if (useMobile && !conn['authState']['creds']['registered']) {
   const {
      registration
   } = conn['authState'][_0x1c75ab(0x15c)] || {
      'registration': {}
   };
   if (!registration[_0x1c75ab(0x13e)]) {
      console[_0x1c75ab(0x105)]('ðŸ“¨\x20' + _0x1a03c5['redBright']('Please\x20Type\x20Your\x20WhatsApp\x20Number') + ':');
      let phoneNumber = await question(_0x1c75ab(0x150) + _0x1a03c5['cyan'](_0x1c75ab(0x131)) + ':\x20');
      phoneNumber = phoneNumber[_0x1c75ab(0x177)](/[^0-9]/g, ''), !Object[_0x1c75ab(0x15e)](PHONENUMBER_MCC)[_0x1c75ab(0x1a3)](_0x1532d9 => phoneNumber[_0x1c75ab(0xcf)](_0x1532d9)) && (console[_0x1c75ab(0x105)](_0x1c75ab(0xf5) + _0x1a03c5[_0x1c75ab(0xd0)](_0x1c75ab(0x1af)) + ':'), console[_0x1c75ab(0x105)](_0x1c75ab(0x195) + _0x1a03c5['redBright'](_0x1c75ab(0x11c)) + ':'), phoneNumber = await question('\x20\x20\x20' + _0x1a03c5[_0x1c75ab(0x108)](_0x1c75ab(0x131)) + ':\x20'), phoneNumber = phoneNumber[_0x1c75ab(0x177)](/[^0-9]/g, '')), registration[_0x1c75ab(0x13e)] = '+' + phoneNumber;
   }
   const phoneNumber = parsePhoneNumber(registration[_0x1c75ab(0x13e)]);
   if (!phoneNumber[_0x1c75ab(0x14c)]()) conn[_0x1c75ab(0x101)][_0x1c75ab(0x139)](_0x1c75ab(0x143) + registration[_0x1c75ab(0x13e)]);
   registration[_0x1c75ab(0x13e)] = phoneNumber[_0x1c75ab(0x161)]('E.164'), registration[_0x1c75ab(0xd2)] = phoneNumber['countryCallingCode'], registration[_0x1c75ab(0x106)] = phoneNumber[_0x1c75ab(0x15d)];
   const mcc = PHONENUMBER_MCC[phoneNumber[_0x1c75ab(0x1a2)]];
   registration[_0x1c75ab(0xdd)] = mcc;
   async function enterCode() {
      const _0x2bd7d2 = _0x1c75ab;
      try {
         console['log'](_0x2bd7d2(0x195) + _0x1a03c5[_0x2bd7d2(0xd0)](_0x2bd7d2(0xdb)) + ':');
         const _0x1bec80 = await question(_0x2bd7d2(0x150) + _0x1a03c5[_0x2bd7d2(0x108)](_0x2bd7d2(0x11e)) + ':\x20'),
            _0x14c853 = await conn[_0x2bd7d2(0x173)](_0x1bec80[_0x2bd7d2(0x177)](/[^0-9]/g, '')[_0x2bd7d2(0xd3)]()[_0x2bd7d2(0x167)]());
         console[_0x2bd7d2(0x105)]('ðŸ’¬\x20' + _0x1a03c5[_0x2bd7d2(0xd0)](_0x2bd7d2(0x155))), console[_0x2bd7d2(0x105)](_0x14c853), rl[_0x2bd7d2(0x110)]();
      } catch (_0x360ad1) {
         conn['logger']['error'](_0x2bd7d2(0x114), _0x360ad1), await askOTP();
      }
   }
   async function askOTP() {
      const _0x4b35a7 = _0x1c75ab;
      console['log']('ðŸ“¨\x20' + _0x1a03c5['redBright'](_0x4b35a7(0x15f)));
      let _0x39c5cf = await question(_0x4b35a7(0x150) + _0x1a03c5[_0x4b35a7(0x108)](_0x4b35a7(0x136)) + ':\x20');
      _0x39c5cf = _0x39c5cf['replace'](/["']/g, '')[_0x4b35a7(0xd3)]()['toLowerCase']();
      if (_0x39c5cf !== _0x4b35a7(0x178) && _0x39c5cf !== _0x4b35a7(0x170)) return await askOTP();
      registration[_0x4b35a7(0x1ad)] = _0x39c5cf;
      try {
         await conn[_0x4b35a7(0x138)](registration), await enterCode();
      } catch (_0x13ea08) {
         conn[_0x4b35a7(0x101)][_0x4b35a7(0x139)](_0x4b35a7(0x10e), _0x13ea08), await askOTP();
      }
   }
   await askOTP();
}
conn[_0x1c75ab(0x101)][_0x1c75ab(0xfb)](_0x1c75ab(0x183));
!opts[_0x1c75ab(0x135)] && (global['db'] && setInterval(async () => {
   const _0x181218 = _0x1c75ab;
   if (global['db'][_0x181218(0x147)]) await global['db'][_0x181218(0x17b)]();
   if (opts[_0x181218(0x16f)] && (global['support'] || {})[_0x181218(0x10a)]) tmp = [os[_0x181218(0x1b4)](), _0x181218(0x18d)], tmp[_0x181218(0x152)](_0x363334 => cp[_0x181218(0x14e)]('find', [_0x363334, _0x181218(0xfc), '3', _0x181218(0x102), 'f', _0x181218(0x174)]));
}, 0x1e * 0x3e8));

function _0x4338(_0x42c35e, _0x456bd8) {
   const _0x1367ff = _0x1367();
   return _0x4338 = function (_0x43383f, _0x19bd16) {
      _0x43383f = _0x43383f - 0xce;
      let _0x528c2b = _0x1367ff[_0x43383f];
      return _0x528c2b;
   }, _0x4338(_0x42c35e, _0x456bd8);
}
if (opts['server'])(await import(_0x1c75ab(0x189)))['default'](global[_0x1c75ab(0xdf)], PORT);

function runCleanup() {
   const _0x2223c3 = _0x1c75ab;
   _0x12f474()[_0x2223c3(0x18c)](() => {
      const _0x368c47 = _0x2223c3;
      console['log'](_0x368c47(0x159));
   })['catch'](_0x3be246 => {
      const _0x52c430 = _0x2223c3;
      console['error'](_0x52c430(0xce), _0x3be246);
   })[_0x2223c3(0xe5)](() => {
      setTimeout(runCleanup, 0x3e8 * 0x3c * 0x2);
   });
}
runCleanup();

function purgeSession() {
   const _0x4c88ee = _0x1c75ab;
   let _0xb19564 = [];
   const _0x2f0572 = readdirSync(_0x4c88ee(0x140)),
      _0x2a4de8 = _0x2f0572[_0x4c88ee(0xed)](_0x418d16 => {
         const _0x3bb2a8 = _0x4c88ee;
         return _0x418d16[_0x3bb2a8(0xcf)](_0x3bb2a8(0x142));
      });
   _0xb19564 = [..._0xb19564, ..._0x2a4de8], _0x2a4de8['forEach'](_0x4aacdf => {
      const _0x330b21 = _0x4c88ee;
      unlinkSync(_0x330b21(0x112) + _0x4aacdf);
   });
}
async function connectionUpdate(_0x49c2ae) {
   const _0x361f9c = _0x1c75ab,
      {
         connection: _0x528083,
         lastDisconnect: _0x1dafcb,
         isNewLogin: _0x3d4bff,
         qr: _0x23ad14
      } = _0x49c2ae;
   global['stopped'] = _0x528083;
   if (_0x3d4bff) conn[_0x361f9c(0x16d)] = !![];
   const _0x23d465 = _0x1dafcb?.[_0x361f9c(0x139)]?.['output']?.['statusCode'] || _0x1dafcb?.[_0x361f9c(0x139)]?.[_0x361f9c(0x19d)]?.[_0x361f9c(0x162)]?.['statusCode'];
   _0x23d465 && _0x23d465 !== DisconnectReason['loggedOut'] && conn?.['ws'][_0x361f9c(0x19a)] == null && conn[_0x361f9c(0x101)][_0x361f9c(0xfb)](await global[_0x361f9c(0x181)](!![])[_0x361f9c(0x144)](console['error']));
   if (global['db'][_0x361f9c(0x147)] == null) loadDatabase();
   !pairingCode && !useMobile && useQr && _0x23ad14 != 0x0 && _0x23ad14 != undefined && conn[_0x361f9c(0x101)][_0x361f9c(0xfb)](_0x1a03c5[_0x361f9c(0xe8)](_0x361f9c(0x116)));
   if (_0x528083 === _0x361f9c(0xf3)) {
      const {
         jid: _0x17e69f,
         name: _0x45c545
      } = conn[_0x361f9c(0x17d)];
      let _0x484d07 = _0x361f9c(0x14a) + _0x45c545 + _0x361f9c(0x17f),
         _0x4ea8b5 = conn[_0x361f9c(0xff)](_0x17e69f, {
            'text': _0x484d07,
            'mentions': [_0x17e69f]
         }, {
            'quoted': null
         });
      conn[_0x361f9c(0x101)][_0x361f9c(0xfb)](_0x1a03c5[_0x361f9c(0xe8)]('\x0aðŸš©\x20R\x20E\x20A\x20D\x20Y'));
   }
   _0x528083 == _0x361f9c(0x110) && (conn[_0x361f9c(0x101)][_0x361f9c(0x139)](_0x1a03c5['yellow'](_0x361f9c(0x122))), process[_0x361f9c(0xec)](_0x361f9c(0x149)));
}
process['on'](_0x1c75ab(0x187), console[_0x1c75ab(0x139)]);
let isInit = !![],
   handler = await import(_0x1c75ab(0xf7));
global[_0x1c75ab(0x181)] = async function (_0x5c4367) {
   const _0x1420d8 = _0x1c75ab;
   try {
      const _0x6050b = await import(_0x1420d8(0x14f) + Date[_0x1420d8(0x10f)]())[_0x1420d8(0x144)](console[_0x1420d8(0x139)]);
      if (Object[_0x1420d8(0x15e)](_0x6050b || {})[_0x1420d8(0xf6)]) handler = _0x6050b;
   } catch (_0x3746cd) {
      console['error'];
   }
   if (_0x5c4367) {
      const _0x5b396c = global['conn'][_0x1420d8(0x18b)];
      try {
         global[_0x1420d8(0xdf)]['ws'][_0x1420d8(0x110)]();
      } catch {}
      conn['ev'][_0x1420d8(0x12d)](), global[_0x1420d8(0xdf)] = makeWASocket(connectionOptions, {
         'chats': _0x5b396c
      }), isInit = !![];
   }!isInit && (conn['ev'][_0x1420d8(0x10d)]('messages.upsert', conn[_0x1420d8(0x196)]), conn['ev']['off'](_0x1420d8(0x15b), conn[_0x1420d8(0xf8)]), conn['ev'][_0x1420d8(0x10d)](_0x1420d8(0x157), conn[_0x1420d8(0xe1)]), conn['ev'][_0x1420d8(0x10d)](_0x1420d8(0xd4), conn[_0x1420d8(0x1a6)]), conn['ev']['off']('message.delete', conn['onDelete']), conn['ev'][_0x1420d8(0x10d)](_0x1420d8(0xe3), conn['presenceUpdate']), conn['ev'][_0x1420d8(0x10d)](_0x1420d8(0x141), conn[_0x1420d8(0x1b0)]), conn['ev']['off'](_0x1420d8(0x10b), conn['credsUpdate']));
   const _0x2592ca = {
      'welcome': 'ðŸ‘‹',
      'bye': 'ðŸ‘‹',
      'promote': _0x1420d8(0x130),
      'demote': 'ðŸ‘¤ðŸ™…â€â™‚ï¸',
      'desc': 'ðŸ“',
      'subject': 'ðŸ“Œ',
      'icon': 'ðŸ–¼ï¸',
      'revoke': 'ðŸ”—',
      'announceOn': 'ðŸ”’',
      'announceOff': 'ðŸ”“',
      'restrictOn': 'ðŸš«',
      'restrictOff': 'âœ…'
   };
   conn[_0x1420d8(0x1ae)] = _0x2592ca[_0x1420d8(0x1ae)] + _0x1420d8(0x180), conn['bye'] = 'ðŸ‘‹\x20GOODBYE\x20@user\x20' + _0x2592ca[_0x1420d8(0xfe)] + _0x1420d8(0x13c), conn[_0x1420d8(0x1b1)] = _0x2592ca[_0x1420d8(0x153)] + '*@user*\x20has\x20been\x20promoted\x20to\x20an\x20admin!', conn[_0x1420d8(0x17a)] = _0x2592ca[_0x1420d8(0x154)] + _0x1420d8(0x17c), conn['sDesc'] = _0x2592ca[_0x1420d8(0xf2)] + _0x1420d8(0xf1), conn[_0x1420d8(0x12b)] = _0x2592ca[_0x1420d8(0x12f)] + '\x20The\x20group\x20title\x20has\x20been\x20changed\x20to:\x0a@group', conn[_0x1420d8(0x146)] = _0x2592ca[_0x1420d8(0x12c)] + _0x1420d8(0x190), conn[_0x1420d8(0x186)] = _0x2592ca['revoke'] + _0x1420d8(0x1ac), conn[_0x1420d8(0x118)] = _0x2592ca[_0x1420d8(0x111)] + _0x1420d8(0x12a), conn['sAnnounceOff'] = _0x2592ca[_0x1420d8(0x115)] + _0x1420d8(0xf9), conn[_0x1420d8(0x184)] = _0x2592ca[_0x1420d8(0x148)] + _0x1420d8(0x129), conn[_0x1420d8(0x158)] = _0x2592ca['restrictOff'] + _0x1420d8(0xe2), conn[_0x1420d8(0x196)] = handler['handler']['bind'](global[_0x1420d8(0xdf)]), conn[_0x1420d8(0xf8)] = handler[_0x1420d8(0xf8)][_0x1420d8(0x133)](global['conn']), conn['participantsUpdate'] = handler['participantsUpdate'][_0x1420d8(0x133)](global[_0x1420d8(0xdf)]), conn['groupsUpdate'] = handler[_0x1420d8(0x1a6)][_0x1420d8(0x133)](global[_0x1420d8(0xdf)]), conn['onDelete'] = handler[_0x1420d8(0x169)]['bind'](global[_0x1420d8(0xdf)]), conn['presenceUpdate'] = handler['presenceUpdate']['bind'](global[_0x1420d8(0xdf)]), conn[_0x1420d8(0x1b0)] = connectionUpdate[_0x1420d8(0x133)](global['conn']), conn[_0x1420d8(0x172)] = saveCreds[_0x1420d8(0x133)](global[_0x1420d8(0xdf)], !![]);
   const _0x546971 = new Date(),
      _0x5a2d0f = new Date(conn['ev']);
   if (_0x546971 >= _0x5a2d0f) {
      const _0xaab4ea = Object['entries'](conn[_0x1420d8(0x18b)])[_0x1420d8(0xed)](([_0x1c70fc, _0x5c10d7]) => !_0x1c70fc['endsWith'](_0x1420d8(0x13a)) && _0x5c10d7[_0x1420d8(0x165)])[_0x1420d8(0x182)](_0x10199f => _0x10199f[0x0]);
   } else {
      const _0x2ff067 = Object[_0x1420d8(0x127)](conn[_0x1420d8(0x18b)])[_0x1420d8(0xed)](([_0x5b2faa, _0x3b9106]) => !_0x5b2faa[_0x1420d8(0x128)](_0x1420d8(0x13a)) && _0x3b9106[_0x1420d8(0x165)])[_0x1420d8(0x182)](_0x1c37f9 => _0x1c37f9[0x0]);
   }
   return conn['ev']['on'](_0x1420d8(0xd8), conn['handler']), conn['ev']['on'](_0x1420d8(0x15b), conn[_0x1420d8(0xf8)]), conn['ev']['on'](_0x1420d8(0x157), conn[_0x1420d8(0xe1)]), conn['ev']['on'](_0x1420d8(0xd4), conn[_0x1420d8(0x1a6)]), conn['ev']['on'](_0x1420d8(0xeb), conn[_0x1420d8(0xfa)]), conn['ev']['on'](_0x1420d8(0xe3), conn['presenceUpdate']), conn['ev']['on'](_0x1420d8(0x141), conn[_0x1420d8(0x1b0)]), conn['ev']['on']('creds.update', conn['credsUpdate']), isInit = ![], !![];
};
const pluginFolder = global[_0x1c75ab(0x14b)](join(__dirname, _0x1c75ab(0x1a8))),
   pluginFilter = _0x67171b => /\.js$/ [_0x1c75ab(0x135)](_0x67171b);

function _0x1367() {
   const _0x4ff457 = ['\x0aconnection\x20closed....\x20Trying\x20to\x20Restart', 'warn', 'stdout', '@whiskeysockets/baileys', 'loadDatabase', 'entries', 'endsWith', '\x20Edit\x20Group\x20Info\x20has\x20been\x20restricted\x20to\x20admins\x20only!', '\x20The\x20group\x20is\x20now\x20*CLOSED*!\x0aOnly\x20admins\x20can\x20send\x20messages.', 'sSubject', 'icon', 'removeAllListeners', '\x0aDeleted\x20plugin\x20-\x20\x27', 'subject', 'ðŸ‘¤ðŸ‘‘', '-\x20Number', 'child', 'bind', '-filter_complex', 'test', '-\x20Method', 'pairingNumber', 'requestRegistrationCode', 'error', '@g.us', 'reload', '\x0a\x0aSee\x20you\x20later!', 'READ', 'phoneNumber', 'sort', './session', 'connection.update', 'pre-key-', '\x0aInvalid\x20phone\x20number:\x20', 'catch', '247760whcJGp', 'sIcon', 'data', 'restrictOn', 'reset', 'HaiðŸ¤©', '__dirname', 'isValid', 'argv', 'spawn', './handler.js?update=', '\x20\x20\x20', 'ffmpeg', 'forEach', 'promote', 'demote', 'Successfully\x20registered\x20your\x20phone\x20number.', 'ffprobe', 'group-participants.update', 'sRestrictOff', 'Temporary\x20file\x20cleanup\x20completed.', '--mobile', 'messages.update', 'creds', 'nationalNumber', 'keys', 'What\x20method\x20do\x20you\x20want\x20to\x20use?\x20\x22sms\x22\x20or\x20\x22voice\x22', 'includes', 'format', 'payload', 'NODE_TLS_REJECT_UNAUTHORIZED', 'config', 'isChats', '\x0aStored\x20Sessions\x20Cleared\x20âœ…', 'toLowerCase', '2728235YXFnDT', 'deleteUpdate', 'bgBlack', 'database.json', '\x0aSyntax\x20error\x20while\x20loading\x20\x27', 'isInit', 'registered', 'autocleartmp', 'voice', 'freeze', 'credsUpdate', 'register', '-delete', 'webp', 'requestPairingCode', 'replace', 'sms', 'Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api', 'sdemote', 'write', '*@user*\x20is\x20no\x20longer\x20an\x20admin.', 'user', 'exitProcess', '\x20✅\x20You\x20Have\x20Successfully\x20Deployed\x20ABHISHEK-SER\x0aJoin\x20My\x20Support\x20Group\x20For\x20Any\x20Query\x0a\x20https://chat.whatsapp.com/BOLb0ICN3sAJ5dloRBw5VD', '\x20Hello\x20@user!\x0a\x0aðŸŽ‰\x20*WELCOME*\x20to\x20the\x20group\x20@group!\x0a\x0aðŸ“œ\x20Please\x20read\x20the\x20*DESCRIPTION*\x20@desc.', 'reloadHandler', 'map', '\x0aWaiting\x20For\x20Login\x0a', 'sRestrictOn', 'DATABASE_URL', 'sRevoke', 'uncaughtException', '-loglevel', './server.js', 'PORT', 'chats', 'then', 'tmp', 'timestamp', 'Error:', '\x20The\x20group\x20icon\x20has\x20been\x20updated!', 'read', '1167838PAgiyL', 'source', 'slice', 'ðŸ“¨\x20', 'handler', 'authFolder', '\x0aUpdated\x20plugin\x20-\x20\x27', 'message', 'socket', 'Start\x20with\x20your\x20country\x27s\x20WhatsApp\x20code,\x20Example\x20:\x2062xxx', 'func', 'output', 'toJSON', 'readFromFile', 'cyanBright', '6024624wYolLs', 'countryCallingCode', 'some', 'greenBright', 'plugins', 'groupsUpdate', 'SESSION_ID', './plugins/index', 'parse', 'remoteJid', 'exit', '\x20The\x20group\x20link\x20has\x20been\x20changed\x20to:\x0a@revoke', 'method', 'welcome', 'Start\x20with\x20your\x20country\x27s\x20WhatsApp\x20code,\x20Example\x2062xxx', 'connectionUpdate', 'spromote', '2723329rpbDtr', 'SERVER_PORT', 'tmpdir', 'An\x20error\x20occurred\x20during\x20temporary\x20file\x20cleanup:', 'startsWith', 'redBright', 'processTxtAndSaveCredentials\x20completed.', 'phoneNumberCountryCode', 'trim', 'groups.update', 'Your\x20Pairing\x20Code:', 'Environment\x20variable\x20not\x20found.', '__filename', 'messages.upsert', 'join', 'API', 'Please\x20Enter\x20Your\x20OTP\x20Code', 'win32', 'phoneNumberMobileCountryCode', '1005351zterGP', 'conn', 'toString', 'participantsUpdate', '\x20Edit\x20Group\x20Info\x20is\x20now\x20available\x20to\x20all\x20participants!', 'presence.update', 'dirname', 'finally', 'env', 'fatal', 'yellow', '4253700upAXpG', 'default', 'message.delete', 'send', 'filter', 'question', '__require', 'race', '\x20The\x20group\x20description\x20has\x20been\x20updated\x20to:\x0a@desc', 'desc', 'open', 'url', 'ðŸ’¬\x20', 'length', './handler.js', 'pollUpdate', '\x20The\x20group\x20is\x20now\x20*OPEN*!\x0aAll\x20participants\x20can\x20send\x20messages.', 'onDelete', 'info', '-amin', 'color', 'bye', 'sendMessage', 'magick', 'logger', '-type', 'store', 'DATABASE', 'log', 'phoneNumberNationalNumber', 'Please\x20type\x20your\x20WhatsApp\x20number\x20:\x20', 'cyan', '4PLFOUY', 'find', 'creds.update', 'session', 'off', '\x0aFailed\x20to\x20request\x20registration\x20code.\x20Please\x20try\x20again.\x0a', 'now', 'close', 'announceOn', './session/', 'chain', '\x0aFailed\x20to\x20register\x20your\x20phone\x20number.\x20Please\x20try\x20again.\x0a', 'announceOff', '\x0aLogging\x20in....', 'all', 'sAnnounceOn', '-hide_banner', '--pairing-code', 'APIs', 'Please\x20type\x20your\x20WhatsApp\x20number', 'writeToFile', '-\x20Code', 'prefix', 'localeCompare', 'opts'];
   _0x1367 = function () {
      return _0x4ff457;
   };
   return _0x1367();
}
global[_0x1c75ab(0x1a5)] = {};
async function filesInit() {
   const _0x33dac0 = _0x1c75ab;
   for (const _0x147901 of readdirSync(pluginFolder)[_0x33dac0(0xed)](pluginFilter)) {
      try {
         const _0x4b7abc = global[_0x33dac0(0xd7)](join(pluginFolder, _0x147901)),
            _0x33b9bf = await import(_0x4b7abc);
         global[_0x33dac0(0x1a5)][_0x147901] = _0x33b9bf[_0x33dac0(0xea)] || _0x33b9bf;
      } catch (_0x125b63) {
         conn[_0x33dac0(0x101)][_0x33dac0(0x139)](_0x125b63), delete global[_0x33dac0(0x1a5)][_0x147901];
      }
   }
}
filesInit()[_0x1c75ab(0x18c)](_0x2f10a6 => Object[_0x1c75ab(0x15e)](global[_0x1c75ab(0x1a5)]))[_0x1c75ab(0x144)](console['error']), global[_0x1c75ab(0x13b)] = async (_0x41ecfe, _0x57db6c) => {
   const _0x32cb0c = _0x1c75ab;
   if (pluginFilter(_0x57db6c)) {
      const _0x3c089f = global[_0x32cb0c(0xd7)](join(pluginFolder, _0x57db6c), !![]);
      if (_0x57db6c in global[_0x32cb0c(0x1a5)]) {
         if (existsSync(_0x3c089f)) conn[_0x32cb0c(0x101)][_0x32cb0c(0xfb)](_0x32cb0c(0x198) + _0x57db6c + '\x27');
         else return conn[_0x32cb0c(0x101)][_0x32cb0c(0x123)](_0x32cb0c(0x12e) + _0x57db6c + '\x27'), delete global[_0x32cb0c(0x1a5)][_0x57db6c];
      } else conn[_0x32cb0c(0x101)][_0x32cb0c(0xfb)]('\x0aNew\x20plugin\x20-\x20\x27' + _0x57db6c + '\x27');
      const _0x125576 = _0x14cdae(readFileSync(_0x3c089f), _0x57db6c, {
         'sourceType': 'module',
         'allowAwaitOutsideFunction': !![]
      });
      if (_0x125576) conn[_0x32cb0c(0x101)][_0x32cb0c(0x139)](_0x32cb0c(0x16c) + _0x57db6c + '\x27\x0a' + format(_0x125576));
      else try {
         const _0x3e71f2 = await import(global[_0x32cb0c(0xd7)](_0x3c089f) + '?update=' + Date[_0x32cb0c(0x10f)]());
         global[_0x32cb0c(0x1a5)][_0x57db6c] = _0x3e71f2['default'] || _0x3e71f2;
      } catch (_0x534334) {
         conn[_0x32cb0c(0x101)][_0x32cb0c(0x139)]('\x0aError\x20require\x20plugin\x20\x27' + _0x57db6c + '\x0a' + format(_0x534334) + '\x27');
      } finally {
         global[_0x32cb0c(0x1a5)] = Object['fromEntries'](Object[_0x32cb0c(0x127)](global[_0x32cb0c(0x1a5)])[_0x32cb0c(0x13f)](([_0x2c3d0f], [_0x3ca807]) => _0x2c3d0f[_0x32cb0c(0x120)](_0x3ca807)));
      }
   }
}, Object['freeze'](global[_0x1c75ab(0x13b)]), watch(pluginFolder, global['reload']), await global[_0x1c75ab(0x181)]();
async function _quickTest() {
   const _0x22c964 = _0x1c75ab,
      _0x581c89 = await Promise[_0x22c964(0x117)]([spawn(_0x22c964(0x151)), spawn(_0x22c964(0x156)), spawn(_0x22c964(0x151), [_0x22c964(0x119), _0x22c964(0x188), _0x22c964(0x139), _0x22c964(0x134), _0x22c964(0xfd), '-frames:v', '1', '-f', _0x22c964(0x175), '-']), spawn('convert'), spawn(_0x22c964(0x100)), spawn('gm'), spawn('find', ['--version'])][_0x22c964(0x182)](_0xce1403 => {
         const _0x1941d9 = _0x22c964;
         return Promise[_0x1941d9(0xf0)]([new Promise(_0x5dde1e => {
            _0xce1403['on']('close', _0x20ecf8 => {
               _0x5dde1e(_0x20ecf8 !== 0x7f);
            });
         }), new Promise(_0x2b742a => {
            const _0x56cb68 = _0x1941d9;
            _0xce1403['on'](_0x56cb68(0x139), _0x3f16b6 => _0x2b742a(![]));
         })]);
      })),
      [_0x15a6bc, _0x5579e6, _0x254614, _0x7499d1, _0x21dc55, _0x591cb5, _0x20d2b2] = _0x581c89,
      _0x9b06cf = global['support'] = {
         'ffmpeg': _0x15a6bc,
         'ffprobe': _0x5579e6,
         'ffmpegWebp': _0x254614,
         'convert': _0x7499d1,
         'magick': _0x21dc55,
         'gm': _0x591cb5,
         'find': _0x20d2b2
      };
   Object[_0x22c964(0x171)](global['support']);
}
const actions = [{
   'func': purgeSession,
   'message': _0x1c75ab(0x166)
}];
for (const action of actions) {
   setInterval(async () => {
      const _0x1fd05c = _0x1c75ab;
      if (stopped === _0x1fd05c(0x110) || !conn || !conn[_0x1fd05c(0x17d)]) return;
      await action[_0x1fd05c(0x19c)](), console[_0x1fd05c(0x105)](_0x1a03c5[_0x1fd05c(0x1a0)](action[_0x1fd05c(0x199)] + '\x0a'));
   }, 0xa * 0x3c * 0x3e8);
}
_quickTest()[_0x1c75ab(0x144)](console[_0x1c75ab(0x139)]);
