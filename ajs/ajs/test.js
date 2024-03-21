/*1. 8 10 14 18 ? 34 50 66

1) 20 2) 26 3) 28 4) 30

Correct answer: 2*/
/*<div> What's the Missing Number? </div>*/
/*16 (31) 47

21 (?) 48

1) 37 2) 21 3) 15 4) 27*/


const questions = [
    {
      question: "1. Which number comes next in the pattern? 8 10 14 18 ? 34 50 66",
      choices: ["20", "26", "28", "30"],
      correctAnswer: "26"
    },
    {
      question: "<br>2. 16 (31) 47 <br> 21 (?) 48",
      choices: ["37", "30", "27", "36"],
      correctAnswer: "27"
    },
    {
      question: "<br>3. What comes next? JFMAMJJASON_",
      choices: ["D", "A", "J", "O"],
      correctAnswer: "D"
    },
    {
      question: "<br>4. 4 6 2 4<br>8 3 2 4<br>2 3 0 ?<br>3 3 0 9",
      choices: ["3", "4", "6", "9"],
      correctAnswer: "6"
    },
    {
      question: "<br>5. 3, 7, 14, 24, 37, ?, 72",
      choices: ["49", "51", "42", "53"],
      correctAnswer: "53"
    },
    {
            question: "<br>6. A + B = 76<br>A - B = 38<br>A / B = ?",
            choices: ["3", "5", "2", "8"],
            correctAnswer: "3"
    },
    {
        question: "<br>7. Complete the Analogy: 4 as 10",
        choices: ["2/5", "7", "25", "5"],
        correctAnswer: "5"
},
{
    question: "<br>8. If 2 + 3 = 10, 7 + 2 = 63, and 6 + 5 = 66, what does 8 + 4 equal?",
        choices: ["90", "96", "78", "102"],
        correctAnswer: "96"
},
{
    question: "<br>9. There are 5 machines that make 5 parts in 5 minutes. How long does it take to make 100 parts on 100 machines?",
        choices: ["5", "10", "15", "30"],
        correctAnswer: "5",
},
{
question: "<br>10. There is a lake on the surface of which water lilies float. The number of lilies doubles daily. If it takes 48 days to completely occupy the entire area of the lake, how many days will it take to occupy the floor of the lake?",
        choices: ["96", "108", "47", "46"],
        correctAnswer: "47",
},
  ];

  function displayQuestions() {
    const quizContainer = document.getElementById('quiz');
    let quizHTML = '';
    
    //foreach: calls back to a function as an argument to each element
    //map: Transforms data to an original array w/o changing it
    //join: creates a string with all the elements in array, not changing og array
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
    //represents html content of the element as a string
  }
  

  function submitAnswers() {
    let score = 0;
    
    //QueryS: Selects the first element in document that matches with css selector
    questions.forEach((q, index) => {
      const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`)?.value;
      if (selectedAnswer === q.correctAnswer) {
      score++;
      }
    });
    
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<br>You scored ${score} out of 10.`;
  }
  
   const images = [
  'https://thumbs.dreamstime.com/z/vector-good-job-symbol-29548614.jpg?ct=jpeg',
];

//gallery with all correct images
function createImageGallery() {
  const imageGalleryElement = document.getElementById('imageGallery');

  // Loop Images
  images.forEach((imagePath) => {
    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = 'Image';
    
    imageGalleryElement.appendChild(imgElement);
  });
  if(score === 8 && score === 9 && score === 10){
    
    createImageGallery();
    }
}
/*
function updateHighScores(score) 
{

    let highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

    highScores.push(score);
    highScores.sort((a, b) => b - a);
    const topScores = highScores.slice(0, 5);

    localStorage.setItem("highScores", JSON.stringify(topScores));
}

displayHighScores();*/
  

  displayQuestions();