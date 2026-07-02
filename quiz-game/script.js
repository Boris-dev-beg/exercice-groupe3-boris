// ! Variables
const TabQuestions = [
  {
    id: 1,
    title: "Question 1",
    correct_answer: 1,
    answers: [
      {
        id: 1,
        msg: "response 1",
      },
      {
        id: 2,
        msg: "response 2",
      },
      {
        id: 3,
        msg: "response 3",
      },
      {
        id: 4,
        msg: "response 4",
      },
    ],
  },
  {
    id: 2,
    title: "Question 2",
    correct_answer: 3,
    answers: [
      {
        id: 1,
        msg: " 1",
      },
      {
        id: 2,
        msg: " 2",
      },
      {
        id: 3,
        msg: " 3",
      },
      {
        id: 4,
        msg: " 4",
      },
    ],
  },
  {
    id: 3,
    title: "Question 3",
    correct_answer: 2,
    answers: [
      {
        id: 1,
        msg: "response1",
      },
      {
        id: 2,
        msg: "respons2",
      },
      {
        id: 3,
        msg: "respons3",
      },
      {
        id: 4,
        msg: "respons4",
      },
    ],
  },
];
let currentQuestion = 1;

// ! Collection
const question_section = document.getElementById("question");
const answers = document.getElementById("answers");

const result_container = document.getElementById("result-container");
const questions_container = document.getElementById("questions-container");

const btnback = document.getElementById("back");
const btnnext = document.getElementById("next");
const btn_try_again = document.getElementById("try_again");

let correctAnswer = 0;
let incorrectAnswer = 0;
// ! Functions
// ? Check Correct Answer
const check_value = (answer) => {
  const AllElement = Array.from(answer.parentNode.children).filter(
    (child) => child !== answer,
  );
  const correct_answer = TabQuestions[currentQuestion - 1].correct_answer;
  if (correct_answer === parseInt(answer.value)) {
    answer.style.background = "green";
    correctAnswer += 1;
    setTimeout(changeCurrentQuestion, 1500);
  } else {
    answer.style.background = "red";
    incorrectAnswer += 1;
    AllElement.forEach((elt) => {
      if (parseInt(elt.value) === correct_answer) {
        elt.style.background = "green";
      }
    });
    setTimeout(changeCurrentQuestion, 1500);
  }
};
// ? HandlerClick
const HandlerClick = () => {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      check_value(answer);
    });
  });
};

// ? Change Question
const changeQuestion = (curr) => {
  answers.innerHTML = "";
  TabQuestions.map((question) => {
    if (curr === question.id) {
      question_section.innerHTML = `
        <p>${question.id}.</p>
          <h1>${question.title}</h1>
          `;
      question.answers.map((answer) => {
        answers.innerHTML += `
            <button value="${answer.id}" class="element answer">
                <p>${answer.id}.)</p>
                <h1 style="text-transform: capitalize">${answer.msg}</h1>
            </button>
            `;
      });
    }
  });
  HandlerClick();
};

// ? Hide question and show de result
const showResult = () => {
  result_container.style.display = "flex";
  questions_container.style.display = "none";
  const result_section = document.getElementById("result");
  result_section.innerHTML = `
  <h1 class="correct">${correctAnswer} corrects</h1>
  <h1 class="incorrect">${incorrectAnswer} incorrects</h1>`;
};
//? Change CurrentQuestion and call changeQuestion
const changeCurrentQuestion = () => {
  currentQuestion += 1;
  if (currentQuestion > TabQuestions.length) {
    showResult(correctAnswer, incorrectAnswer);
  } else if (currentQuestion === TabQuestions.length) {
    changeQuestion(TabQuestions.length);
  } else {
    changeQuestion(currentQuestion);
  }
  console.log(currentQuestion);
};
// ? Entry point
const onLoad = () => {
  btn_try_again.addEventListener("click", () => {
    if (currentQuestion >= TabQuestions.length) window.location.reload();
    currentQuestion = 1;
    console.log("reload");
  });
  btnback.addEventListener("click", () => {
    if (currentQuestion <= 1) {
      changeQuestion(1);
    } else {
      currentQuestion -= 1;
      changeQuestion(currentQuestion);
    }
    console.log(currentQuestion);
  });
  btnnext.addEventListener("click", changeCurrentQuestion);
  changeQuestion(1);
};

window.addEventListener("load", onLoad());
