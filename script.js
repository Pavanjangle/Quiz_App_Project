const submitBtn = document.getElementById('submit-btn');
const scoreDiv = document.getElementById('score');
const questions = document.querySelectorAll('.question');
const totalQuestions = questions.length;
let score = 0;

submitBtn.addEventListener('click', calculateScore);

function calculateScore() {
    score = 0;

    for (let i = 0; i < totalQuestions; i++) {
        const currentQuestion = questions[i];
        const selectedAnswer = currentQuestion.querySelector('input:checked');

        if (selectedAnswer) {
            if (selectedAnswer.value === 'Harry' && i === 0) {
                score++;
            }

            if (selectedAnswer.value === 'Grawp' && i === 1) {
                score++;
            }

            if (selectedAnswer.value === 'Potions' && i === 2) {
                score++;
            }
            if (selectedAnswer.value === 'Gryffindor' && i === 3) {
                score++;
            }
            if (selectedAnswer.value === 'Astronomy' && i === 4) {
                score++;
            }
        }
    }

    scoreDiv.textContent = `Your score: ${score}/${totalQuestions}`;
}
