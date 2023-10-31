const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.quizgame = conn.quizgame || {};
  let quizGameData = conn.quizgame[key] || {
    currentQuestion: -1,
    questions: [
      { category: 'General Knowledge', question: 'What is the capital of France?', answer: 'Paris' },
      { category: 'General Knowledge', question: 'How many continents are there on Earth?', answer: '7' },
      { category: 'Science', question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    ],
  };

  conn.quizgame[key] = quizGameData;
  const { currentQuestion, questions } = quizGameData;

  if (args[0] === 'start') {
    if (currentQuestion < questions.length - 1) {
      conn.quizgame[key].currentQuestion++;
      return askQuestion(conn, m.chat, key);
    } else {
      return conn.reply(m.chat, '🏳️ No more questions to ask. The Quiz game is completed.', m);
    }
  }

  if (currentQuestion >= 0 && currentQuestion < questions.length) {
    const userAnswer = args.join(' ').toLowerCase();
    if (userAnswer) {
      const correctAnswer = questions[currentQuestion].answer.toLowerCase();
      if (userAnswer === correctAnswer) {
        if (currentQuestion < questions.length - 1) {
          conn.quizgame[key].currentQuestion++;
          return askQuestion(conn, m.chat, key);
        } else {
          delete conn.quizgame[key];
          return conn.reply(m.chat, '🎉 Congratulations! You completed the Quiz game!', m);
        }
      } else {
        return conn.reply(m.chat, '❌ Incorrect answer. Try again!', m);
      }
    } else {
      return conn.reply(m.chat, '❓ Please provide an answer to the current question.', m);
    }
  } else {
    return conn.reply(m.chat, '🏁 The Quiz game is not started. Use *"start"* to begin the quiz game.', m);
  }
};

function askQuestion(conn, chatId, key) {
  const { currentQuestion, questions } = conn.quizgame[key];
  if (currentQuestion >= 0 && currentQuestion < questions.length) {
    const question = questions[currentQuestion].question;
    const category = questions[currentQuestion].category;
    return conn.reply(chatId, `📝 Category: ${category}\nQuestion: ${question}`, null, {
      contextInfo: {
        mentionedJid: [conn.user.jid],
      },
    });
  }
}

handler.help = ['start', '[answer]'];
handler.tags = ['game'];
handler.command = /^quiz$/i;

export default handler;
