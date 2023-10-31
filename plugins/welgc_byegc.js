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
    usedPrefix
}) => {
    // Check if the user wants to start a quiz game
    if (text.toLowerCase() === 'quiz') {
        // Check if all questions have been used
        if (usedQuestions.length === quizQuestions.length) {
            usedQuestions.length = 0; // Reset used questions when all questions have been used
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

        // Create the quiz message
        const quizMessage = `📚 Quiz Time!\n\n${quizQuestion}\n\nOptions:\n${options.map((opt, idx) => `${idx + 1}. ${opt}`).join("\n")}\n\nReply with the number of your answer.`;

        // Send the quiz message to the chat
        conn.sendMessage(m.chat, quizMessage, m);
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
