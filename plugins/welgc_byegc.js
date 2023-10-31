const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.quizgame = conn.quizgame || {};
  let quizGameData = conn.quizgame[key] || {
    currentQuestion: 0,
    questions: [
      { question: 'What is the capital of France?', answer: 'Paris' },
      { question: 'How many continents are there on Earth?', answer: '7' },
      { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    ],
  };
  conn.quizgame[key] = quizGameData;
  const { currentQuestion, questions } = quizGameData;

  if (args[0] === 'start') {
    conn.quizgame[key].currentQuestion = 0;
    return askQuestion(conn, m.chat, key);
  }

  if (currentQuestion < questions.length) {
    const userAnswer = args[0];
    if (userAnswer) {
      const correctAnswer = questions[currentQuestion].answer.toLowerCase();
      if (userAnswer.toLowerCase() === correctAnswer) {
        conn.quizgame[key].currentQuestion++;
        if (currentQuestion < questions.length) {
          return askQuestion(conn, m.chat, key);
        }
      }
    }
  }

  delete conn.quizgame[key];
  return conn.reply(m.chat, '🏁 The Quiz game is completed. Use *"start"* to begin a new quiz game.', m);
};

function askQuestion(conn, chatId, key) {
  const { currentQuestion, questions } = conn.quizgame[key];
  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion].question;
    return conn.reply(chatId, `📝 Question ${currentQuestion + 1}: ${question}`, null, {
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
