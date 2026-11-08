const questions = [
    { question: "Ile to jest 7 + 5?", answer: 12 },
    { question: "Ile boków ma sześciokąt?", answer: 6 },
    { question: "Ile to jest 9 × 4?", answer: 36 }
];

function startQuiz() {
    let score = 0;

    for (const question of questions) {
        const answer = prompt(question.question, "");
        if (answer !== null && Number(answer) === question.answer) {
            alert("Prawidłowa odpowiedź!");
            score++;
        } else {
            alert("Błąd. Prawidłowa odpowiedź to " + question.answer);
        }
    }

    alert(`Twój wynik: ${score}/${questions.length}`);
}

document.getElementById("startQuiz").addEventListener("click", startQuiz);