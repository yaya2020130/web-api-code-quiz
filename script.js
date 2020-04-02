var counter = 60;
var timer;
var runningQuestionIndex = 0;
var score = 0;
//Ternary statement
// if(localStorage.getItem('score')){
//  var highscores = JSON.parse(localStorage.getItem('score'))
//}else{
//  var highscores = []
//}

var highscores = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : []



const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const timerDiv = document.getElementById('counter')


var questions = [
  {
    question: " Q1  What is HTML?",
    choiceA: "it is a study of natural science that  studies about living and non living things",
    choiceB: "It is css ",
    choiceC: "It is hyper text markup language",
    answer: "C"

  },

  {
    question: "Q2 - What is web development?",
    choiceA: "It is a study of natural science that studies about living and non living things",
    choiceB: "Web development is the work involved in developing a website for the Internet or an intranet.",
    choiceC: 'none',
    answer: "B"
  },
  {
    question: "Q3 - what is css ?",
    choiceA: "iIt is a study of natural science that studies about living and non living things",
    choiceB: "It is Cascading Style Sheetsistory",
    choiceC: 'none',
    answer: "A"
  },

]
var answer = document.getElementById("#answerDiv")
const lastQuestion = (questions.Length) - 1;

document.getElementById('choices').addEventListener('click', function (e) {
  if (e.target.matches('button')) {
    checkAnswer(e.target.id)
  }
})

// render a question
function renderQuestion() {
  if (runningQuestionIndex === questions.length) {
    endgame()
  } else {
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = `<button id='A'>${q.choiceA}</button>`;
    choiceB.innerHTML = `<button id='B'>${q.choiceB}</button>`;
    choiceC.innerHTML = `<button id='C'>${q.choiceC}</button>`;
  }
};

// counter render
function counterRender() {
  if (counter > 0) {
    timerDiv.textContent = counter;
    counter--;
  } else {

    clearInterval(timer)
    endgame()
    scoreRender()
  }
}


// start quiz
function startquiz() {
  start.style.display = "none";
  quiz.style.display = "block";
  timer = setInterval(counterRender, 1000)
  renderQuestion();
}

document.querySelector("#start").addEventListener("click", startquiz);

function scoreRender() {
  scoreRender.style.display = "block";
  let scorepercent = mat.round(100 * score / question.length);
};

function checkAnswer(answer) {

  if (answer == questions[runningQuestionIndex].answer) {
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
    counter -= 10
  }
}

function endgame() {
  clearInterval(timer)
  document.querySelector('#timer').textContent = 0;
  alert('GAME OVER!')
  scoreRender()
}

//  score render
function scoreRender() {
  appendScores()
  scoreContainer.style.display = "block";
  var input = document.createElement('input');
  input.setAttribute('id', 'name');
  var btn = document.createElement('button');
  btn.textContent = "Submit";
  btn.addEventListener('click', function () {
    highscores.push(`${input.value} - ${score}`);
    localStorage.setItem('score', JSON.stringify(highscores))
    appendScores()
  })
  scoreContainer.appendChild(input);
  scoreContainer.appendChild(btn)
  // calculate the amount of question answer percent answeed by the user
  // const scorePerCent = Math.round(100 * score / question.length);
  // scoreContainer.counter.innerHTML += "<p>" + scorepercent + "</p>";

}
function appendScores() {
  document.getElementById('scoreList').innerHTML = ''
  highscores.forEach(highscore => {
    var scoreList = document.createElement('h3');
    scoreList.textContent = highscore;
    document.getElementById('scoreList').appendChild(scoreList)
  })
}


// answer is wrong

function answerIsWrong() {
  alert('WRONG!')
  runningQuestionIndex++;
  renderQuestion()
}
// answer is correct
function answerIsCorrect() {
  alert('RIGHT!')
  runningQuestionIndex++;
  renderQuestion()
}
