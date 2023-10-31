// Define an array of quiz questions and answers
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
            return conn.reply(m.chat, '📚 All quiz questions have been used. Start a new quiz session later.', m);
        }

        // Randomly select an unused quiz question
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quizQuestions.length);
        } while (usedQuestions.includes(randomIndex));

        // Mark the question as used
        usedQuestions.push(randomIndex);

        const currentQuestion = quizQuestions[randomIndex];
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

// Function to shuffle the answer options randomly
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
