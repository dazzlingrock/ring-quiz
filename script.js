const questions = [
    {
        question: "What’s your favorite season?",
        options: ["Winter", "Spring", "Summer", "Fall"]
    },
    {
        question: "Which type of occasion are you shopping for?",
        options: ["Engagement", "Anniversary", "Casual Wear", "Party/Events"]
    },
    {
        question: "What’s your preferred jewelry type?",
        options: ["Rings", "Earrings", "Necklaces", "Bracelets"]
    },
    {
        question: "What material do you prefer for your jewelry?",
        options: ["Gold", "Silver", "Platinum", "Mixed Metals"]
    }
];

const results = {
    "Winter": "Winter Rings Collection",
    "Engagement": "Engagement Rings",
    "Rings": "Winter Rings Collection",
    "Gold": "Gold Jewelry",
    // Add similar mappings for other options
};

let currentQuestion = 0;
let userChoices = [];

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const question = questions[currentQuestion];
    questionElement.innerHTML = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    });
}

function selectOption(option) {
    userChoices.push(option);
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const recommendedCollection = results[userChoices.find(choice => results[choice])];
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = recommendedCollection;
    document.getElementById('result-container').style.display = 'block';

    // Redirect to DazzlingRock.com with the recommended collection
    setTimeout(() => {
        window.location.href = `https://dazzlingrock.com?recommended=${encodeURIComponent(recommendedCollection)}`;
    }, 3000); // Wait for 0 seconds before redirecting
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

document.addEventListener('DOMContentLoaded', showQuestion);
