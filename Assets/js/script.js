// on click hide start
const startJS = document.getElementById("startId");
const startBtnJS = document.getElementById("startBtn");
const questionJS = document.getElementById("questionId")

startBtnJS.onclick = function () {
   if (startJS.style.display !== "none") {
     startJS.style.display = "none";
     questionJS.style.display = "flex"
   } else {
     startJS.style.display = "flex";
   }
};
// on click start timer

// on click change text to first question in array

// on click of correct answer, state its correct on that screen, then change to next question

// else on click of wrong answer, state it is wrong, deduct 10seconds, continue timer, and go to next question

// at end of question array switch to all done screen, allow for entry of initials and click submit button

// on click of submit, insert score into high scores and record the top 10.