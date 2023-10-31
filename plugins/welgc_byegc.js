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
    }
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
            usedQuestions.length = 0; // Reset used questions when all questions have been used
        }

        // Select the next question from the shuffled array
        const currentQuestion = quizQuestions[usedQuestions.length];
        usedQuestions.push(usedQuestions.length);

        const quizQuestion = currentQuestion.question;
        const correctAnswer = currentQuestion.correctAnswer;
        const options = currentQuestion.options;

        // Display the question and options as a single message
        let quizMessage = `📚 Quiz Time!\n\n${quizQuestion}\n\nOptions:\n`;
        options.forEach((option, index) => {
            quizMessage += `${index + 1}. ${option}\n`;
        });

        // Send the quiz message to the chat
        await conn.sendMessage(m.chat, quizMessage);

        // Listen for replies and check if it's the correct answer
        conn.onMessage(m.chat, async (msg) => {
            if (msg.text) {
                const selectedOption = parseInt(msg.text);
                if (!isNaN(selectedOption) && selectedOption >= 1 && selectedOption <= options.length) {
                    if (options[selectedOption - 1] === correctAnswer) {
                        // Correct answer
                        await conn.reply(m.chat, '✅ Correct answer!', m);
                    } else {
                        // Incorrect answer
                        await conn.reply(m.chat, '❌ Incorrect answer. Try again!', m);
                    }
                }
            }
        });
    } else {
        // Handle other commands or messages here
        await conn.reply(m.chat, '❓ Invalid command. Use *"quiz"* to start a quiz game.', m);
    }
}

handler.help = ["quiz"]
handler.tags = ["group"]
handler.command = /^(quiz)$/i

export default handler;
