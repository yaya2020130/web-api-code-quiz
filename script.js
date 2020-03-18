var questions = [
  {
      q: "q1 - What is biology?",
      a: ['it is a study of natural science that studies about living and non living things', 'it studies history', 'c', 'dnone'],
      c: 0
  },
  {
      q: "q2 - 1+2=?",
      a: ['1', '3', '5', '6'],
      c: 3
  },
  {
      q: "q3 - how many continets are there?",
      a: ['1', '2', 'c', '7'],
      c: 3
  }
]
var counter = 0;
var seconds = 60;
var timer ;
var score = 0;

function time() {
  if(seconds <= 0){
      gameOver()
  }else{
      document.querySelector('#timerDiv').textContent = seconds;
  seconds--;
  }
}

function appendQ() {
  document.querySelector('#scoreDiv').textContent = score;
  document.getElementById('answerDiv').innerHTML = ''
  document.getElementById('qDiv').textContent = questions[counter].q
  questions[counter].a.map((answer, i) => {
      var textNode = document.createTextNode(answer);
      var button = document.createElement('button');
      button.setAttribute('id', i)
      button.appendChild(textNode);
      button.addEventListener('click', function (e) {
          checkAnswer(e.target.id == questions[counter].c)
      })
      document.getElementById('answerDiv').appendChild(button)
  }
  )
}

document.getElementById('start').addEventListener('click', function () {
 timer = setInterval(time, 1000)
  appendQ()
})

function checkAnswer(bool){
  if(bool){
      counter ++;
      score ++;
      if(counter === questions.length){
      gameOver()
  }else{
      appendQ()
  }
  }else{
      seconds -= 10;
  }
}

function gameOver(){
  clearInterval(timer)
  document.querySelector('#timerDiv').textContent = 0;
  alert('GAME OVER!')
  highScore()
}

function highScore(){
  document.querySelector('#time').setAttribute('display', 'none');
  var results = document.querySelector('#results');
  var input = document.createElement('input');
  input.setAttribute('id', 'inputScore');
  var btnTxt = document.createTextNode( "enter your intials "+'Submit');
  var btn = document.createElement('button');
  btn.addEventListener('click', function(){
      localStorage.setItem('database', JSON.stringify({[input.value]:score}))
  })
  btn.appendChild(btnTxt);
  results.appendChild(input);
  results.appendChild(btn)
}