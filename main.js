// Button event listener
let submitButton = document.querySelectorAll(".submit");

// Correct Answer
for (let btn of submitButton) {
  btn.addEventListener("click", (e) => {
    let answers = e.currentTarget.parentElement;
    let correctAns = answers.getElementsByClassName("correct");
    correctAns[0].style = "background-color: green;";
  });
}

//Current Question
let currentQuestion = 0;

let nextQuestion = document.getElementById("next-question");

// function to switch the questions and check if the test is done
let switchFunction = function () {
  //   Switch Questions
  let questions = document.getElementsByClassName("question");
  questions[currentQuestion].classList.remove("active");
  currentQuestion++;
  questions[currentQuestion].classList.add("active");
  console.log(currentQuestion);
};

// switch questions
nextQuestion.addEventListener("click", switchFunction);

// Restart
let reset = document.querySelector(".restart");
console.log(reset);
reset.addEventListener("click", () => {
  window.location.reload();
});
