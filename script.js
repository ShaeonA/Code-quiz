var startbtn = document.getElementById("startbtn")
var infoBox = document.querySelector(".info-box")
var continuebtn = document.querySelector(".restart")
var quizque = document.querySelector(".title")
//var quizans = document.querySelector(".choices")
var select = document.getElementById("continue")
var choice1 = document.querySelector(".c1")
var choice2 = document.querySelector(".c2")
var counterindex = 0
var start = 15
var time = 45
var timeIntervalid;


//console.log(infoBox)
var questionsArr = [
    {
        questionTitle: "is the sky blue?",
        questionChoices: [
            ' Yes',
            ' No '],
        answers: "yes"
    },
    {
        questionTitle: "is Oranges , orange?",
        questionChoices: [
            ' Yes',
            ' No ',],
        answers: "yes"
    },
    {
        questionTitle: "is the water wet?",
        questionChoices: [
            ' Yes',
            ' No '],
        answers: "no"
    },
    {
        questionTitle: "does space have oxygen ?",
        questionChoices: [
            ' Yes',
            ' No '],
        answers: "yes"
    },
    {
        questionTitle: "Are cows Mixed?",
        questionChoices: [
            ' Yes',
            ' No '],
        answers: "no"
    }
    

]


function startTimer () {
    timeIntervalid = setInterval(function(){
console.log(time);
time --;

if (time===0) {
    endGame();
}
    },1000)
}
// function answersButt() {
//     select.innerHTML = questionsArr[0].questionChoices;
// }

function continueOn() {
    document.getElementById("timer").style.display = "block";

    infoBox.style.display = "none";
    document.querySelector(".question-box").style.display = "block";
    quizque.textContent = questionsArr[counterindex].questionTitle;
    choice1.textContent = questionsArr[counterindex].questionChoices[0];
    choice2.textContent = questionsArr[counterindex].questionChoices[1];
    choice1.addEventListener("click", nextQuestion);
    choice2.addEventListener ("click", nextQuestion);
    //quizans.textContent = questionsArr[0].questionChoices;
    // check if there are more questions or if this is the last questiion. 
    // if not at the end do the DOM display to ask the question . 
    //for (var end = 0; end < questionsArr[counterque].questionChoices.length; end++);
    //if the question timer is greater than zero, add to the variable end. 

}

function nextQuestion() {
counterindex++;
//continueOn()
if (counterindex< questionsArr.length) { 
    continueOn()
} else {
    endGame();
}

function endGame(){
clearInterval(timeIntervalid)
  document.getElementById("timer").style.display = "none";
alert("You have reached the end of the game")
window.prompt("Please Input your intials")
}
}

// Inside function access current question, figure out what choice was made or if it is right or wrong. 


startbtn.addEventListener("click", function () {
    // alert("I have been clicked");
    startbtn.style.display = "none";
    infoBox.style.display = "block";
})
continuebtn.addEventListener("click", continueOn)

