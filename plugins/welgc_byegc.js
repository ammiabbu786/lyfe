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

        // Create the poll message with the title and options
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

        // Listen for user's response using a custom message handler
        const responseHandler = (msg) => {
            if (msg.pollMessage && msg.pollMessage.id === pollResponse.poll.id) {
                const selectedOption = msg.pollMessage.values[msg.pollMessage.selectedId];
                if (selectedOption === correctAnswer) {
                    conn.reply(m.chat, '🎉 You win!', m);
                } else {
                    conn.reply(m.chat, `❌ You lose. The correct answer is: ${correctAnswer}`, m);
                }

                // Remove the message listener after handling the response
                conn.off('message', responseHandler);
            }
        }

        // Listen for messages to capture user response
        conn.on('message', responseHandler);
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
