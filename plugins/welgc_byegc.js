const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.quizgame = conn.quizgame || {};
  let quizGameData = conn.quizgame[key] || {
    currentQuestion: -1,
    questions: [
      { question: 'What is the capital of France?', answer: 'Paris' },
      { question: 'How many continents are there on Earth?', answer: '7' },
      { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    ],
  };

  conn.quizgame[key] = quizGameData;
  const { currentQuestion, questions } = quizGameData;

  if (args[0] === 'start') {
    conn.quizgame[key].currentQuestion = -1;
    return askRandomQuestion(conn, m.chat, key);
  }

  if (currentQuestion < questions.length) {
    const userAnswer = args[0];
    if (userAnswer) {
      const correctAnswer = questions[currentQuestion].answer.toLowerCase();
      if (userAnswer.toLowerCase() === correctAnswer) {
        conn.quizgame[key].currentQuestion++;
        if (currentQuestion < questions.length - 1) {
          return askRandomQuestion(conn, m.chat, key);
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
    return conn.reply(m.chat, '🏁 The Quiz game is already completed. Use *"start"* to begin a new quiz game.', m);
  }
};

function askRandomQuestion(conn, chatId, key) {
  const { questions } = conn.quizgame[key];
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex].question;
  conn.quizgame[key].currentQuestion = randomIndex;
  return conn.reply(chatId, `📝 Question: ${question}`, null, {
    contextInfo: {
      mentionedJid: [conn.user.jid],
    },
  });
}

handler.help = ['start', '[answer]'];
handler.tags = ['game'];
handler.command = /^quiz$/i;

export default handler;
