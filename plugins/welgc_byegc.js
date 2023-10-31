let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    // Check if the user wants to start a quiz game
    if (text.toLowerCase() === 'quiz') {
        // Generate a random quiz question and answer options
        const quizQuestion = "What is the capital of France?";
        const correctAnswer = "Paris";
        const options = ["Paris", "London", "Berlin", "Madrid"];

        // Shuffle the options for randomness
        shuffleArray(options);

        // Create the poll message
        const pollMessage = {
            name: `📚 Quiz Time!`,
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

// Function to shuffle the answer options randomly.
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
