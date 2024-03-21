/*const iQuestions = [
    { question: "How many 1-inch cubes can be placed in a box 5 inches long, 4 inches wide and 3 inches high?"
    , answers: ["60", "23", "12", "48"], correctIndex: 0 },
    
];
let currentIndex = 0;
let score = 0;

function displayQuestion() 
{
    const currentQuestion = iQuestions[currentIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = ""; 

    currentQuestion.answers.forEach((answer, index) =>
     {
        const answerDiv = document.createElement("div");
        answerDiv.innerText = answer;
        answerDiv.onclick = () => checkAnswer(index);
        answersContainer.appendChild(answerDiv);
    });

}
function checkAnswer(index)
 {
    const correct = index === iQuestions[currentIndex].correctIndex;
    const feedback = document.getElementById("feedback");
    const answersD = document.getElementById("answers").children;

    if (correct) 
    {
        score++;

        document.getElementById("score").innerText = score;
        feedback.innerText = "That's Correct :D";
        answersD[index].classList.add("correct");
    } 
    else 
    {
        feedback.innerText = "That's Wrong D:";
        answersD[index].classList.add("wrong");
    }
    Array.from(answersD).forEach(div => div.onclick = null);

function nextQuestion()
 {
    currentIndex++;

    if (currentIndex < iQuestions.length)
     {
        displayQuestion();
        document.getElementById("feedback").innerText = "";
    }
     else 
     {
        document.getElementById("quiz-container").innerHTML = `<div> Final Score: ${score}</div>`;
        updateHighScores(score);
    }
}

function updateHighScores(score) 
{
    let highScore = JSON.parse(localStorage.getItem("highScores") || "[]");
    highScore.push(score);
    highScore.sort((a, b) => b - a);
    highScore = highScore.slice(0, 5); 
    localStorage.setItem("highScores", JSON.stringify(highScore));
    displayHighScores();
}

function displayHighScores() 
{
    const highScoreList = document.getElementById("highScoresList");
    const highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    highScoreList.innerText = highScores.join(", ");
}

nextQuestion();
displayQuestion(); 
displayHighScores(); 
}*/

const questions = [
    { question: "How many 1-inch cubes can be placed in a box 5 inches long, 4 inches wide and 3 inches high?", answers: ["60", "23", "12", "48"], correctIndex: 0 },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = ""; // Clear previous answers
    currentQuestion.answers.forEach((answer, index) => {
        const answerDiv = document.createElement("div");
        answerDiv.innerText = answer;
        answerDiv.onclick = () => checkAnswer(index);
        answersContainer.appendChild(answerDiv);
    });
}

function checkAnswer(index) {
    const isCorrect = index === questions[currentQuestionIndex].correctIndex;
    const feedback = document.getElementById("feedback");
    const answersDivs = document.getElementById("answers").children;
    if (isCorrect) {
        score++;
        document.getElementById("score").innerText = score;
        feedback.innerText = "Correct!";
        answersDivs[index].classList.add("correct");
    } else {
        feedback.innerText = "Wrong!";
        answersDivs[index].classList.add("wrong");
    }
    Array.from(answersDivs).forEach(div => div.onclick = null); // Remove onclick actions to prevent multiple answers
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("feedback").innerText = "";
    } else {
        document.getElementById("quiz-container").innerHTML = `<div>Your final score is ${score}</div>`;
        updateHighScores(score);
    }
}

function updateHighScores(score) {
    let highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    highScores.push(score);
    highScores.sort((a, b) => b - a);
    highScores = highScores.slice(0, 5); // Keep top 5 scores
    localStorage.setItem("highScores", JSON.stringify(highScores));
    displayHighScores();
}

function displayHighScores() {
    const highScoresList = document.getElementById("highScoresList");
    const highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    highScoresList.innerText = highScores.join(", ");
}

displayQuestion(); // Initial call to display the first question
displayHighScores(); // Display high scores from the beginning
