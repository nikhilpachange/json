const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Lisbon", "Rome"],
        answer: "Berlin"
    }
];

const quizDiv = document.getElementById('quiz');
quizData.forEach((quiz, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `<h3>${quiz.question}</h3>`;
    quiz.options.forEach(option => {
        questionDiv.innerHTML += `<input type="radio" name="question${index}" value="${option}"> ${option}<br>`;
    });
    quizDiv.appendChild(questionDiv);
});

document.getElementById('submit').addEventListener('click', () => {
    let score = 0;
    quizData.forEach((quiz, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === quiz.answer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${quizData.length}`;
});
