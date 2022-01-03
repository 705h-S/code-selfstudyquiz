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
var highscore = document.getElementById("HighS");
var quiz = document.querySelector(".question");
var hide = document.getElementById("quiz");

 // An array with the questions and answers that will show up in the quiz
const questions = [
    {
        ask: " This is the first generic question?",
        input: {
            a: "first answer",
            b: "secound answer",
            c: "third answer",
            d: "fourth answer"
        },
        corrAnsw: "b"
    },

    {
        ask: " This is the secound generic question?",
        input: {
            a: "first answer",
            b: "secound answer",
            c: "third answer",
            d: "fourth answer"
        },
        corrAnsw: "d"
    },

    {
        ask: " This is the third generic question?",
        input: {
            a: "first answer",
            b: "secound answer",
            c: "third answer",
            d: "fourth answer"
        },
        corrAnsw: "a"
    },

    {
        ask: " This is the fourth generic question?",
        input: {
            a: "first answer",
            b: "secound answer",
            c: "third answer",
            d: "fourth answer"
        },
        corrAnsw: "c"
    },

    {
        ask: " This is the fith generic question?",
        input: {
            a: "first answer",
            b: "secound answer",
            c: "third answer",
            d: "fourth answer"
        },
        corrAnsw: "b"
    },

    {
        ask: " This is the sixth generic question?",
        input: {
            a: "first answer",
            b: "secound answer",
            c: "third answer",
            d: "fourth answer"
        },
        corrAnsw: "a"
    }

];
// score is initially set to 0 with time left define in score
let score = 0;





// When Start Button is clicked timer starts countdown and quiz begins 
function startQuiz(){
    console.log("Quiz begins");
    
    //  Countdown function 
    timeEl();
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
    };
    // loops through array of questions and displays prompts
    prompts();
    function prompts(){
        //  hides the initial start quiz html prompts
           hide.style.display = "none"; 
        
    
    };






}








startBtn.addEventListener("click", startQuiz); 
