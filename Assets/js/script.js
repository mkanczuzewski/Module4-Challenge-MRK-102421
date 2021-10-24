// on click hide start
const start = document.getElementById("startId");
const startBtn = document.getElementById("startBtn");
const question = document.getElementById("questionId");
const questionText = document.getElementById("questionId");
const buttons = document.querySelectorAll("button[id^=a]");
const correctAns = document.getElementById("correctAnswerId");
const questionNo = document.getElementById("questionNoId");
const questionIdH1 = document.getElementById("questionIdH1");
var timerEl = document.getElementById('countdownNumberId');
var timeLeft = 0

var questionsArray = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "a3"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "a3"
    },
    {
        title: "Arrays in Javascript can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "a4"
    },
  ];

startBtn.onclick = function () {
   if (start.style.display !== "none") {
     start.style.display = "none";
     question.style.display = "flex";
   } else {
     start.style.display = "flex";
   }
};

buttons.forEach(button =>
    {
        button.addEventListener('click', event=>
        {
            if (event.target.id == correctAns.innerText)
            {
                document.getElementById("correct").style.display = "flex";
            }
            else{
                document.getElementById("incorrect").style.display = "flex";
                timeLeft = timeLeft - 10;

            }
            setTimeout(nextQuestion, 1000);
        });
    });

var nextQuestion = function () {
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";

    var nextIndex = parseInt(questionNo.innerText)+1;
    var questionFromArray = questionsArray[nextIndex];

    questionIdH1.innerText = questionFromArray.title;
    correctAns.innerText = questionFromArray.answer;
    questionNo.innerText = nextIndex;

    for (var i = 0; i < buttons.length; i++) 
    {
        buttons[i].innerText=questionFromArray.choices[i]       
    };
}

function countdown() {
    console.log("called countdown function");
    timeLeft = 75;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
    console.log ("ran the time interval function thing - "+timeLeft);
    timerEl.textContent = timeLeft;
    timeLeft--; //timeleft =timeleft - 1
    if (timeLeft <= 0){
      clearInterval(timeInterval);
      timerEl.textContent = "";
    }
  }, 1000);
  
  }

countdown();

// on click start timer

// on click change text to first question in array

// on click of correct answer, state its correct on that screen, then change to next question

// else on click of wrong answer, state it is wrong, deduct 10seconds, continue timer, and go to next question

// at end of question array switch to all done screen, allow for entry of initials and click submit button

// on click of submit, insert score into high scores and record the top 10.