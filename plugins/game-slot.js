let handler = async (m, { conn, args, usedPrefix, command }) => {
    let fa = `
Guess the number between 1 and 10 and bet an amount of XP. 

📌 Example:
*${usedPrefix + command}* 100 5

In this example, you're betting 100 XP, and you guess the number is 5.
`.trim();

    if (args.length !== 2) throw fa;
    
    let xpBet = parseInt(args[0]);
    let guess = parseInt(args[1]);
    
    if (isNaN(xpBet) || isNaN(guess) || guess < 1 || guess > 10) throw fa;

    let users = global.db.data.users[m.sender];
    
    if (users.exp < xpBet) throw 'You do not have enough XP to place this bet.';
    
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    
    let end;
    if (randomNumber === guess) {
        end = `🎉 You guessed correctly! You won *+${xpBet * 2} XP*.`;
        users.exp += xpBet;
    } else {
        end = `😞 Sorry, the number was ${randomNumber}. You lost *-${xpBet} XP*.`;
        users.exp -= xpBet;
    }

    return await m.reply(`
       🎲 ┃ *GUESS THE NUMBER* 
     ───────────
       🎲 : ${randomNumber}
     ───────────
        
${end}`); 
};

handler.help = ['guess <bet amount> <number>'];
handler.tags = ['game'];
handler.command = ['guess'];

export default handler;
