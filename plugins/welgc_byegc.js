const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.quizgame = conn.quizgame || {};
  let quizGameData = conn.quizgame[key] || {
    currentQuestion: -1,
    selectedCategory: null,
    questions: [
      { category: 'General Knowledge', question: 'What is the capital of France?', answer: 'Paris' },
      { category: 'General Knowledge', question: 'How many continents are there on Earth?', answer: '7' },
      { category: 'Science', question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    ],
  };

  conn.quizgame[key] = quizGameData;
  const { currentQuestion, questions, selectedCategory } = quizGameData;

  if (args[0] === 'start') {
    if (!selectedCategory) {
      return showCategories(conn, m.chat, key);
    } else if (currentQuestion < questions.length - 1) {
      conn.quizgame[key].currentQuestion++;
      return askQuestion(conn, m.chat, key);
    } else {
      return conn.reply(m.chat, '🏳️ No more questions to ask. The Quiz game is completed.', m);
    }
  }

  if (args[0] === 'category' && args[1]) {
    const requestedCategory = args[1].toLowerCase();
    if (questions.some(q => q.category.toLowerCase() === requestedCategory)) {
      conn.quizgame[key].selectedCategory = requestedCategory;
      conn.quizgame[key].currentQuestion = -1;
      return askQuestion(conn, m.chat, key);
    } else {
      return conn.reply(m.chat, `❌ The category "${requestedCategory}" is not available. Please choose a valid category.`, m);
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
    return conn.reply(m.chat, '🏁 The Quiz game is not started. Use *"start"* to begin the quiz game with a specific category.', m);
  }
};

function askQuestion(conn, chatId, key) {
  const { currentQuestion, questions, selectedCategory } = conn.quizgame[key];
  const categoryQuestions = questions.filter(q => q.category.toLowerCase() === selectedCategory);
  if (currentQuestion >= 0 && currentQuestion < categoryQuestions.length) {
    const question = categoryQuestions[currentQuestion].question;
    const category = categoryQuestions[currentQuestion].category;
    return conn.reply(chatId, `📝 Category: ${category}\nQuestion: ${question}`, null, {
      contextInfo: {
        mentionedJid: [conn.user.jid],
      },
    });
  }
}

function showCategories(conn, chatId, key) {
  const categories = [...new Set(quizGameData.questions.map(q => q.category))];
  const categoryList = categories.map((cat, index) => `${index + 1}. ${cat}`).join('\n');
  return conn.reply(chatId, '📝 Select a category by replying with its number:\n' + categoryList, null, {
    contextInfo: {
      mentionedJid: [conn.user.jid],
    },
  });
}

handler.help = ['start', 'category [category]', '[answer]'];
handler.tags = ['game'];
handler.command = /^quiz$/i;

export default handler;
