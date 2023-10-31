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

const usedQuestions = [];

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix
}) => {
    if (text === 'quiz') {
        if (usedQuestions.length === quizQuestions.length) {
            usedQuestions.length = 0;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quizQuestions.length);
        } while (usedQuestions.includes(randomIndex));

        usedQuestions.push(randomIndex);

        const currentQuestion = quizQuestions[randomIndex];
        const quizQuestion = currentQuestion.question;
        const correctAnswer = currentQuestion.correctAnswer;
        const options = currentQuestion.options;

        shuffleArray(options);

        const quizMessage = `📚 Quiz Time!\n\n${quizQuestion}\n\nOptions:\n${options.map((opt, idx) => `${idx + 1}. ${opt}`).join("\n")}\n\nReply with the number of your answer.`;

        conn.sendMessage(m.chat, quizMessage, m);
    } else {
        return; // Do nothing for other commands or messages
    }
}

handler.help = ["quiz"]
handler.tags = ["group"]
handler.command = /^quiz$/i

export default handler;

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
