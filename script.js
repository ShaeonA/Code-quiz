var startbtn = document.getElementById("startbtn")
var infoBox = document.querySelector(".info-box")
var continuebtn = document.querySelector(".restart")
var quizque = document.querySelector(".title")
var quizans = document.querySelector(".choices")
var counterque = 0 
var start = 15


console.log(infoBox)
var questionsArr = [
    { questionTitle : "is the sky blue?",
      questionChoices : ["yes","no"],
      answers : ["yes"]
    },
  
]

function continueOn(){
    
    infoBox.style.display = "none";
    quizque.textContent = questionsArr[0].questionTitle;
    quizans.textContent = questionsArr[0].questionChoices;
    // check if there are more questions or if this is the last questiion. 
    // if not at the end do the DOM display to ask the question . 
    for (var end = 0; end < questionsArr[counterque].questionChoices.length; end++);
   //if the question timer is greater than zero, add to the variable end. 

}

// create a function to attach to choices.
function qchoices () {
    var curquest = document.querySelector(".choices")
}
// Inside function access current question, figure out what choice was made or if it is right or wrong. 


startbtn.addEventListener("click", function(){
    // alert("I have been clicked");
    startbtn.style.display = "none";
    infoBox.style.display = "block";
    

})
continuebtn.addEventListener("click", continueOn)

