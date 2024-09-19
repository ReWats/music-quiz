const quizData = [
  {
    question: "Who is the biggest selling music act of all time?",
    options: ["Eminem", "Michael Jackson", "The Beatles", "Madonna"],
    answer: "The Beatles"
  },

  {
    question: "Which act has had the most number one songs in the UK?",
    options: ["Oasis", "Iron Maiden", "Elvis", "Queen"],
    answer: "Elvis"
  },

  {
    question:
      "What is the biggest selling single that never reached number 1 in the UK?",
    options: [
      "Happy, Pharrell Williams",
      "Angels, Robbie Williams",
      "Mr Brightside, The Killers",
      "Insomnia, Faithless"
    ],
    answer: "Mr Brightside, The Killers"
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.innerHTML = `
  <h1>Quiz Completed!</h1>
  <p>Your Score: ${score}/${quizData.length}</p>
  `;
}

showQuestion();