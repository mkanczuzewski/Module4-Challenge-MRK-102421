// on click hide start
const start = document.getElementById("startId");
const startBtn = document.getElementById("startBtn");
const question = document.getElementById("questionId");
// const questionText = document.getElementById("questionId");
const buttons = document.querySelectorAll("button[id^=a]");
const correctAns = document.getElementById("correctAnswerId");
const questionNo = document.getElementById("questionNoId");
const questionIdH1 = document.getElementById("questionIdH1");
var timerEl = document.getElementById('countdownNumberId');
var timeLeft = 0;
const entry = document.getElementById("entryId");
var score = document.getElementById("scoreId");
var sessionScore = 0;
var scoreValue = [];
var initialsInput = document.getElementById("initialsId");
var submitScore = document.getElementById("submitId");

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

startBtn.onclick = function () 
{
   if (start.style.display !== "none") 
   {
     start.style.display = "none";
     question.style.display = "flex";
   } else 
   {
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
    //reset display on correct and incorrect statement before each question is answered
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";
    //Increment the array index by one and set it to the nextIndex variable
    var nextIndex = parseInt(questionNo.innerText)+1;
    //set an if statement that checks if you are at the end of the array index and flips to the entry screen if so.
    if (nextIndex >= questionsArray.length) 
    {  
        question.style.display = "none";
        entry.style.display = "flex";
        sessionScore = timeLeft;
        score.innerText += sessionScore;
        timeLeft = 0;
    } 
    else
    {
        //if not at end of array index load in the next index
        var questionFromArray = questionsArray[nextIndex];
        //insert in the correct title to the questionIdH1 ID html
        questionIdH1.innerText = questionFromArray.title;
        //insert in the correct answer to the hidden correctAnswerId ID html
        correctAns.innerText = questionFromArray.answer;
        //increment the questionNoId ID html to the next index.
        questionNo.innerText = nextIndex;
    
        for (var i = 0; i < buttons.length; i++) 
        {
            //populate the buttons with all of the choices in the array.
            buttons[i].innerText=questionFromArray.choices[i];       
        };
    }
}

function countdown() {
timeLeft = 75;

    var timeInterval = setInterval(function() 
    {
        timerEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft <= 0)
            {
                clearInterval(timeInterval);
                timerEl.textContent = "";
            }
    }, 1000);
}

countdown();

submitScore.onclick = function () 
{
    event.preventDefault();

    var scoreValue = 
    {
        initials: initialsInput.value.trim(),
        scoreStored: sessionScore
    };

    localStorage.setItem("scoreValue", JSON.stringify(scoreValue));
    window.location.href="high.html";
}
  
// var loadTasks = function() {
//     var savedTasks = localStorage.getItem("tasks");
//     // if there are no tasks, set tasks to an empty array and return out of the function
//     if (!savedTasks) {
//       return false;
//     }
//     console.log("Saved tasks found!");
//     // else, load up saved tasks
  
//     // parse into array of objects
//     savedTasks = JSON.parse(savedTasks);
  
//     // loop through savedTasks array
//     for (var i = 0; i < savedTasks.length; i++) {
//       // pass each task object into the `createTaskEl()` function
//       createTaskEl(savedTasks[i]);
//     }
//   };

// on click start timer

// on click change text to first question in array

// on click of correct answer, state its correct on that screen, then change to next question

// else on click of wrong answer, state it is wrong, deduct 10seconds, continue timer, and go to next question

// at end of question array switch to all done screen, allow for entry of initials and click submit button

// on click of submit, insert score into high scores and record the top 10.