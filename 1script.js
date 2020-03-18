var questions =[
  {
    q:"q1-what is java script",
    a:['a','b','c','d'],
    c:1
  },

  {
    q:"q2-what is java script",
    a:['a','b','c','d'],
    c:0
  },

  {
    q:"q3-what is java script",
    a:['a','b','c','d'],
    c:2
  }
]
var counter=0;
var secounds=60;
var timer;
var score =0;



function time(){
  if (secounds  <=0){
    gameover()
  }else
  {
    document.querySelector('#timerDiv').textcontent=secounds;
    secounds--;
  
  }

}
function appendQ()
{
        document.querySelector('#scoreDiv').textContent=score;

        document.getElementById('#answer-container').value==''
        document.getElementById('#question-container')=questions[counter].q
        questions[counter].a.map((answer,i)=>{
          var textNode=document.createTextNode(answer);
          var button = document.createElement('button');
          button.setAttribute('id',i);
      
        button.appendQChild(textNode);

        button.addEventListener('click', function (e) 
        {
    checkAnswer(e.target.id == questions[counter].c)
}
)

  document.getElementById('#answer-container').appendChild(button)
        }
        )
      }

      document.getElementById('start').addEventListener('click', function (){
  timer=setInterval(time, 1000)
  appendQ();

  })


function checkAnswer(bool){
  if(bool){
    counter ++
    score ++
    if (couneter==questions.length){
      gameover()

    }else{
      appendQ()
    }

    }else
    {
      
    secounds-=5;
  }
}


function gameover(){
  clearInterval(timer)
  document.querySelector('#timerDiv').textcontent=0
  alert('gameover')
  highscore()
}
function highscore(){
      document.querySelector('#timediv').setAttribute('display',"none");
      var results = document.querySelector("#results");
      input.setAttribute('id', 'inputScore');
      var btnTxt= 
      document.createTextNode('Submit');
      var btn=
      document.createElement('button');
      btn.adddEventlistner('click',function(){
        
        localStorage.setItem('database',JASON.stringify({[input.value]:score}))
      })
        
        btn.appendChild(btnText);
        results.appendChild(input);
        results.appendChild(btn)
      
  }

  
  