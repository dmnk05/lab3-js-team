const questions = [
    { question: "Ile to jest 7 + 5?", answer: 12 },
    { question: "Ile boków ma sześciokąt?", answer: 6 },
    { question: "Ile to jest 9 × 4?", answer: 36 }
    {'Ile to jest 2 + 2?', 4},
    {'Ile wynosi pierwiastek kwadratowy z 81?', 9}
];

function startQuiz() {
    let score = 0;
    const wrongQuestions = [];

    for (const question of questions) {
        const answer = prompt(question.question, "");
        if (answer !== null && Number(answer) === question.answer) {
            alert("Prawidłowa odpowiedź!");
            score++;
        } else {
            alert("Błąd. Prawidłowa odpowiedź to " + question.answer);
            wrongQuestions.push(question.question);
        }
    }

    const result = document.getElementById("wynik");
    result.textContent = `Wynik: ${score} / ${questions.length}`;

    const previousList = document.getElementById("bledne-pytania");
    if (previousList) {
        previousList.remove();
    }
    if (wrongQuestions.length > 0) {
        const list = document.createElement("ul");
        list.id = "bledne-pytania";

        for (const questionText of wrongQuestions) {
            const item = document.createElement("li");
            item.textContent = questionText;
            list.appendChild(item);
        }

        result.insertAdjacentElement("afterend", list);
    }
}

document.getElementById("startQuiz").addEventListener("click", startQuiz);