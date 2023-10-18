let handler = async (m, { conn }) => {
    // Define a list of trivia questions and answers
    const triviaQuestions = [
        {
            question: "What is the capital of France?",
            answers: ["Paris"],
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Mars"],
        },
        {
            question: "What is the largest mammal in the world?",
            answers: ["Blue Whale", "blue whale", "whale"],
        },
        // Add more questions here
    ];

    // Define a variable to keep track of the current question
    let currentQuestionIndex = 0;

    // Function to send the next question
    function sendNextQuestion() {
        if (currentQuestionIndex < triviaQuestions.length) {
            const question = triviaQuestions[currentQuestionIndex].question;
            conn.sendMessage(m.chat, `Question: ${question}`, m);
        } else {
            conn.sendMessage(m.chat, "Quiz is over.", m);
        }
    }

    // Function to check the answer
    function checkAnswer(answer) {
        const correctAnswers = triviaQuestions[currentQuestionIndex].answers;
        if (correctAnswers.includes(answer)) {
            conn.sendMessage(m.chat, "Correct answer!", m);
            currentQuestionIndex++;
            sendNextQuestion();
        } else {
            conn.sendMessage(m.chat, "Incorrect answer. Try again.", m);
        }
    }

    // Start the quiz when the "alive" command is triggered
    sendNextQuestion();
}

handler.help = ['alive'];
handler.tags = ['main'];
handler.command = /^(alive)$/i;

export default handler;
