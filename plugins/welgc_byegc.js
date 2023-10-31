const quizQuestions = [
    {
        question: "What is the capital of France?",
        correctAnswer: "Paris",
        options: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        question: "Which planet is known as the Red Planet?",
        correctAnswer: "Mars",
        options: ["Mars", "Venus", "Jupiter", "Saturn"]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        correctAnswer: "William Shakespeare",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"]
    },
    // Add more quiz questions here
];

// Shuffle the quiz questions array
shuffleArray(quizQuestions);

const userResponses = {}; // To keep track of user responses

// Add a button handling system
conn.on('button', async (button) => {
    if (button.id === 'quiz_response') {
        const quizQuestion = button.data;
        const correctAnswer = userResponses[button.sender][quizQuestion];

        if (button.reply === correctAnswer) {
            conn.sendMessage(button.chatId, '🎉 You win!', button.message);
        } else {
            conn.sendMessage(button.chatId, `❌ You lose. The correct answer is: ${correctAnswer}`, button.message);
        }
    }
});

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    if (command === 'quiz') {
        // Check if the user has already answered this question
        if (userResponses[m.sender]) {
            return conn.reply(m.chat, 'You have already answered this question.', m);
        }

        // Find the next unanswered question
        const currentQuestion = quizQuestions.find((q) => !userResponses[m.sender]?.[q.question]);

        if (!currentQuestion) {
            return conn.reply(m.chat, 'You have completed the quiz. There are no more questions.', m);
        }

        const quizQuestion = currentQuestion.question;
        const correctAnswer = currentQuestion.correctAnswer;
        const options = currentQuestion.options;

        // Shuffle the options for randomness
        shuffleArray(options);

        // Create a poll message for the quiz question
        const pollMessage = {
            name: `📚 Quiz Time!\n\n${quizQuestion}`,
            title: `Quiz Time: ${quizQuestion}`,
            values: [correctAnswer, ...options].map(option => {
                return {
                    buttonId: 'quiz_response',
                    buttonText: option,
                    description: 'Choose this option',
                    data: quizQuestion,
                    isReply: true,
                    reply: option
                };
            }),
            buttons: [
                { buttonId: 'quiz_response', buttonText: 'Skip', description: 'Skip this question', data: quizQuestion, isReply: false }
            ]
        }

        // Send the quiz poll to the chat
        await conn.sendMessage(m.chat, { poll: pollMessage });

        // Store the correct answer for this user
        if (!userResponses[m.sender]) {
            userResponses[m.sender] = {};
        }
        userResponses[m.sender][quizQuestion] = correctAnswer;
    } else {
        return conn.reply(m.chat, '❓ Invalid command. Use *"quiz"* to start a quiz game.', m);
    }
}

handler.help = ["quiz"]
handler.tags = ["group"]
handler.command = /^(quiz)$/i

export default handler;

// Function to shuffle an array randomly
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
