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
var hide = document.getElementById("quiz");

 // An array with the questions and answers that will show up in the quiz
 var questions = [
   
    { 
        question: "generic question?", 
        answers: " answer a\n answer 2\n answer b\n answerc \n answer5",
        CA: "a"
    },
    { 
        question: "generic question?", 
        answers: " answer a\n answer 2\n answer b\n answerc \n answer5",
        CA: "b"
    },
    { 
        question: "generic question?", 
        answers: " answer a\n answer 2\n answer b\n answerc \n answer5",
        CA: "b"
    },
    { 
        question: "generic question?", 
        answers: " answer a\n answer 2\n answer b\n answerc \n answer5",
        CA: "4"
    },
    { 
        question: "generic question?", 
        answers: " answer a\n answer 2\n answer b\n answerc \n answer5",
        CA: "a"
    },
    { 
        question: "generic question?", 
        answers: " answer a\n answer 2\n answer b\n answerc \n answer5",
        CA: "5"
    },
 ]
   
// score is initially set to 0 with time left define in score
let score = 0;

// When Start Button is clicked timer starts countdown and quiz begins 
function startQuiz(){
    console.log("Quiz begins");
   //  hides the initial start quiz html prompts
   hide.style.display = "none"; 
   timeEl();
   displayQuestion()
}
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
   
    function displayQuestion(){
        // insures that each array is going through
        for (var index = 0; index < questions.length; index++) {
            var userInput = prompt(questions[index].questions,  "answers")
            if(userInput == questions[i].CA){
                alert( "yes");
            }
            else{
                alert("wrong");
                // time should be subtracted 
                timeleft -= 10; 
            }
        }

    }
        
   



startBtn.addEventListener("click", startQuiz); 
