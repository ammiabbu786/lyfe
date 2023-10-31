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

        // Display the question and options as text messages
        let quizMessage = `📚 Quiz Time!\n\n${quizQuestion}\n\n`;
        options.forEach((option, index) => {
            quizMessage += `${index + 1}. ${option}\n`;
        }

        // Send the quiz message to the chat
        await conn.sendMessage(m.chat, quizMessage);

        // Listen for replies and check if it's the correct answer
        conn.onMessage(m.chat, (msg) => {
            if (msg.text && msg.text.startsWith(usedPrefix) && !msg.isGroup) {
                const selectedOption = parseInt(msg.text.replace(usedPrefix, ""));
                if (selectedOption >= 1 && selectedOption <= options.length) {
                    if (options[selectedOption - 1] === correctAnswer) {
                        // Correct answer
                        conn.reply(msg.chat, '✅ Correct answer!', msg);
                    } else {
                        // Incorrect answer
                        conn.reply(msg.chat, '❌ Incorrect answer. Try again!', msg);
                    }
                }
            }
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
