let timeInSeconds = 100; 
const interval = 1000; 


function updateTimer() {
  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = `Time remaining: ${formatTime(timeInSeconds)}`;
  timeInSeconds--;


  if (timeInSeconds < 0) {
    clearInterval(timerInterval);
    timerElement.innerHTML = 'Time\'s up! You Lose';
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

const timerInterval = setInterval(updateTimer, interval);

const questions = [
    {
      question: "Which number comes next in the pattern? 8 10 14 18 ? 34 50 66",
      choices: ["20", "26", "28", "30"],
      correctAnswer: "26"
    },
    {
      question: "16 (31) 47 <br> 21 (?) 48",
      choices: ["37", "30", "27", "36"],
      correctAnswer: "27"
    },
    {
      question: "What comes next? JFMAMJJASON_",
      choices: ["D", "A", "J", "O"],
      correctAnswer: "D"
    },
    {
      question: "4 6 2 4<br>8 3 2 4<br>2 3 0 ?<br>3 3 0 9",
      choices: ["3", "4", "6", "9"],
      correctAnswer: "6"
    },
    {
      question: "3, 7, 14, 24, 37, ?, 72",
      choices: ["49", "51", "42", "53"],
      correctAnswer: "53"
    },
    {
            question: "A + B = 76<br>A - B = 38<br>A / B = ?",
            choices: ["3", "5", "2", "8"],
            correctAnswer: "3"
    },
    {
        question: "Complete the Analogy: 4 as 10",
        choices: ["2/5", "7", "25", "5"],
        correctAnswer: "5"
},
{
    question: "If 2 + 3 = 10, 7 + 2 = 63, and 6 + 5 = 66, what does 8 + 4 equal?",
        choices: ["90", "96", "78", "102"],
        correctAnswer: "96"
},
{
    question: "There are 5 machines that make 5 parts in 5 minutes. How long does it take to make 100 parts on 100 machines?",
        choices: ["5", "10", "15", "30"],
        correctAnswer: "5",
},
{
question: "There is a lake on the surface of which water lilies float. The number of lilies doubles daily. If it takes 48 days to completely occupy the entire area of the lake, how many days will it take to occupy the floor of the lake?",
        choices: ["96", "108", "47", "46"],
        correctAnswer: "47",
},
  ];


  function displayQuestions() {
    const quizContainer = document.getElementById('quiz');
    let quizHTML = '';
    
    questions.forEach((q, index) => {
      quizHTML += `<div>
                     <p>${q.question}</p>
                     ${q.choices.map((choice, i) =>
                       `<label>
                          <input type="radio" name="question${index}" value="${choice}"> ${choice}
                        </label>`).join('')}
                   </div>`;
    });
  
    quizContainer.innerHTML = quizHTML;
  }

  function submitAnswers() {
    let score = 0;
    
    questions.forEach((q, index) => {
      const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`)?.value;
      if (selectedAnswer === q.correctAnswer) {
        score += 1;
      }
    });
    
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `You scored ${score} out of ${questions.length}.`;
  }
  
  displayQuestions();