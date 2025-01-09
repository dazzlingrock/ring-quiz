const questions = [
    {
        question: "What's Her Favorite Precious Metal?",
        options: ["White Gold", "Yellow Gold", "Rose Gold", "Mixed Metals"],
        scores: [1, 2, 3, 4]
    },
    {
        question: "What's Her Dream Getaway Spot?",
        options: ["The Beach", "Paris", "Moab", "Dubai"],
        scores: [1, 2, 3, 4]
    },
    {
        question: "What's Her Favorite Activity?",
        options: ["Shopping", "Barre Class", "Knitting", "Reading"],
        scores: [1, 2, 3, 4]
    },
    {
        question: "Choose Her Favorite Drink.",
        options: ["Green Juice", "Champagne", "Latte", "Red Wine"],
        scores: [1, 2, 3, 4]
    },
    {
        question: "What's Her Go-To Style?",
        options: ["Trendy", "Classic", "Romantic", "Glam"],
        scores: [1, 2, 3, 4]
    },
    {
        question: "What's Her Ideal Date Night?",
        options: ["Cooking Together", "Going to a Speakeasy", "Gallery Opening", "Going On A Picnic"],
        scores: [1, 2, 3, 4]
    },
    {
        question: "What's Her Favorite Dessert?",
        options: ["French Macarons", "Ice Cream Cone", "Cherry Pie", "Chocolate Soufflé"],
        scores: [1, 2, 3, 4]
    },
    {
        question: "What's Her Favorite Type of Music?",
        options: ["Hip-Hop", "Classic Rock", "Dance", "Country"],
        scores: [1, 2, 3, 4]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const styleDisplay = document.getElementById('style');

function showQuestion(index) {
    const question = questions[index];
    quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options.map((option, i) => `
            <label>
                <input type="radio" name="option" value="${question.scores[i]}" required>
                ${option}
            </label>
        `).join('')}
    `;
}

function showResult() {
    let style = '';
    if (totalScore <= 8) {
        style = 'Classic Solitaire';
    } else if (totalScore <= 16) {
        style = 'Vintage';
    } else if (totalScore <= 24) {
        style = 'Modern';
    } else {
        style = 'Halo';
    }
    styleDisplay.textContent = style;
    resultContainer.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        totalScore += parseInt(selectedOption.value);
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            quizContainer.classList.add('hidden');
            nextButton.classList.add('hidden');
            showResult();
        }
    } else {
        alert('Please select an option.');
    }
});

// Initialize the quiz
showQuestion(currentQuestionIndex);
