
lang = "en"
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log('Started');
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === 'true');
    button.disabled = true;
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } 
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

const questions = [
  {
    question: "What is the name of the Swedish king?",
    answers: [
      { text: "Carl XVI Gustaf", correct: true },
      { text: "Gustaf IV Adolf", correct: false }
    ]
  },
  {
    question: "with band dave growl play in?",
    answers: [
      { text: "black stone cherry", correct: false },
      { text: "pantera", correct: false },
      { text: "foo fighters", correct: true },
      { text: "papa roach", correct: false },
    ]
  },
  {
    question: "whith food i like?",
    answers: [
      { text: "pasta", correct: false },
      { text: "thai food", correct: false },
      { text: "hamburger", correct: true },
      { text: "indien food", correct: false },
    ]
  },
  {
    question: "what is tooth called in swedish?",
    answers: [
      { text: "tooth", correct: false },
      { text: "hammas", correct: false },
      { text: "tand", correct: true },
      { text: "zahn", correct: false },
    ]
  },

  

  
 
];

 
 


  


























  



















