var startbtn = document.getElementById("startbtn")
var infoBox = document.querySelector(".info-box")
var continuebtn = document.querySelector(".restart")
var quizque = document.querySelector(".title")
// var quizans = document.querySelector(".")
console.log(infoBox)
var questionsArr = [
    { questionTitle : "is the sky blue?",
      questionChoices : ["yes","no"],
      answers : ["yes"]
    },
  
]

function continueOn(){
    infoBox.style.display = "none";
    quizque.textContent = questionsArr[0].questionTitle
    quizque.textContent = questionsArr[0].questionChoices[0]
  


}

startbtn.addEventListener("click", function(){
    // alert("I have been clicked");
    startbtn.style.display = "none";
    infoBox.style.display = "block";
    

})
continuebtn.addEventListener("click", continueOn)

