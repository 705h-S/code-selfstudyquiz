// create an addeventlistener so that when button is clicked timer counts down and HTML content changes 
// addeventlistner for when highscores is click itll show the the high scores that are saved locally 
// have a set time function count down from 1min, if time hits 0 html changes to a game over screen
// create variables of question array  with objects of questions and answers
// create undefined variables and have user define them with initals for highscore
// if user clicks true answer display "correct" and move to next question
// else user clicks false answer display "wrong" move to next question and subtract -10 secounds from timer.
// console log and console localy save remaining secounds after user completes quiz and have that be highscore 
// more secounds left on the timer = higher score 
//  create function to have higher score display first 
// 


var startBtn = document.querySelector(".button");
var timer = document.getElementById("time");

 // An array with the questions and answers that will show up in the quiz
const questions = [
    {
        ask: " This is the first generic question? \n (a) first answer\n (b) secound answer\n (c) Third answer\n (d) fourth answer",
        answer: "b"
    },

    {
        ask: " This is the secound generic question? \n (a) first answer\n (b) secound answer\n (c) Third answer\n (d) fourth answer",
        answer: "d"
    },

    {
        ask: " This is the third generic question? \n (a) first answer\n (b) secound answer\n (c) Third answer\n (d) fourth answer",
        answer: "a"
    },

    {
        ask: " This is the fourth generic question? \n (a) first answer\n (b) secound answer\n (c) Third answer\n (d) fourth answer",
        answer: "c"
    },

    {
        ask: " This is the fith  generic question? \n (a) first answer\n (b) secound answer\n (c) Third answer\n (d) fourth answer",
        answer: "a"
    },

    {
        ask: " This is the sixth  generic question? \n (a) first answer\n (b) secound answer\n (c) Third answer\n (d) fourth answer",
        answer: "d"
    }
    

]
// score is initially set to 0 with time left define in score
let score = 0;





// When Start Button is clicked timer starts countdown and quiz begins 
function startQuiz(){
    console.log("Quiz begins")
    
    //  Countdown function 
    function timeEl() {
            // player has 1min or 60s to finish quiz.
        var timeleft =60;
      
        var timeInterval = setInterval(function () {
        
          timeleft--; 
          timer.textContent = timeleft + "s";
           // quiz stops when timer hits 0
          if(timeleft === 0) {
              console.log("Game over!")
      
            clearInterval(timeInterval);
    
          }
        }, 1000);
    }

        timeEl();
}








startBtn.addEventListener("click", startQuiz); 
