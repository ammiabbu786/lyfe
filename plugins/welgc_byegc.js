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

const usedQuestions = []; // To keep track of used questions

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    // Check if the user wants to start a quiz game
    if (command === 'quiz') {
        // Check if all questions have been used
        if (usedQuestions.length === quizQuestions.length) {
            usedQuestions.length = 0; // Reset used questions when all questions have been used
        }

        // Select the next question from the shuffled array
        const currentQuestion = quizQuestions[usedQuestions.length];
        usedQuestions.push(usedQuestions.length);

        const quizQuestion = currentQuestion.question;
        const correctAnswer = currentQuestion.correctAnswer;
        const options = currentQuestion.options;

        // Shuffle the options for randomness
        shuffleArray(options);

        // Create the poll message with the quiz question
        const pollMessage = {
            name: `📚 Quiz Time!`,
            question: quizQuestion,
            values: [correctAnswer, ...options],
            multiselect: false,
            selectableCount: 1
        }

        // Send the quiz poll to the chat
        await conn.sendMessage(m.chat, {
            poll: pollMessage
        });
    } else {
        // Handle other commands or messages here
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
