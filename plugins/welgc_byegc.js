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

// Create an empty object to store user responses
const userResponses = {};

let handler = async (m, { conn, text, command }) => {
    if (command === 'quiz') {
        // Check if the user has already answered the current question
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

        // Create the poll message with the title including "Quiz Time" and the quiz question
        const pollMessage = {
            name: `📚 Quiz Time!\n\n${quizQuestion}`,
            title: `Quiz Time: ${quizQuestion}`,
            values: [correctAnswer, ...options],
            multiselect: false,
            selectableCount: 1
        }

        // Send the quiz poll to the chat
        const pollResponse = await conn.sendMessage(m.chat, { poll: pollMessage });

        // Store the correct answer for this user
        userResponses[m.sender] = { [quizQuestion]: correctAnswer };

        // Delay for a while to allow user response
        await new Promise(resolve => setTimeout(resolve, 20000));

        // Check if the user has responded with the correct answer
        if (userResponses[m.sender][quizQuestion] === correctAnswer) {
            conn.reply(m.chat, '🎉 You win!', m);
        } else {
            conn.reply(m.chat, `❌ You lose. The correct answer is: ${correctAnswer}`, m);
        }
    } else {
        return conn.reply(m.chat, '❓ Invalid command. Use *"quiz"* to start a quiz game.', m);
    }
}

handler.help = ["quiz"]
handler.tags = ["group"]
handler.command = /^(quiz)$/i

export default handler;

