// on click hide start
const start = document.getElementById("startId");
const startBtn = document.getElementById("startBtn");
const question = document.getElementById("questionId");
const questionText = document.getElementById("questionId");
const buttons = document.querySelectorAll("button[id^=a]");
const correctAns = document.getElementById("correctAnswerId");

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
            }
            setTimeout(nextQuestion, 1000);
        });
    });
debugger;
var nextQuestion = function () {
    alert('in method');
    var arr = JSON.parse(questionsArray);
    alert(arr[0]);
}

// on click start timer

// on click change text to first question in array

// on click of correct answer, state its correct on that screen, then change to next question

// else on click of wrong answer, state it is wrong, deduct 10seconds, continue timer, and go to next question

// at end of question array switch to all done screen, allow for entry of initials and click submit button

// on click of submit, insert score into high scores and record the top 10.