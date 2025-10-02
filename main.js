const startBtn = document.getElementById('start-btn');
const homeScreen = document.getElementById('welcome-page');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionHold = document.getElementById('set-question');
const questionP = document.getElementById('question-update');
const currentQuestionSpan = document.getElementById('crrnt-qust');
const totalQuestionSpan = document.getElementById('total-quest');
const scoreSpan = document.getElementById('score-span');
const resultRemarkSpan = document.getElementById('total-score');
const mainId = document.getElementById('main-remark');
const questionArea = document.getElementById('question-area')
const progressBar = document.getElementById('progress');




const Questions =[
    {
    questions: "What is the full meaning of C.P.U.?",
    answer: [
        {text: "Central processing unit", correct: true},
        {text: "Center protocel unit", correct: false},
        {text: "Computer partion unit", correct: false},
        {text: "None of the above", correct: false},
    ],
},
{
    questions: "What is the full meaning of G.P.U.?",
    answer: [
        {text: "Graphics processing unit", correct: true},
        {text: "Graphics protocel unit", correct: false},
        {text: "Graphics partion unit", correct: false},
        {text: "None of the above", correct: false},
    ],
},

{
    questions: "What is the full meaning of H.D.D.?",
    answer: [
        {text: "Hard Drive Disk", correct: false},
        {text: "Hard Disk Drive", correct: true},
        {text: "Hard Development Device", correct: false},
        {text: "None of the above", correct: false},
        {text: "All of the above", correct: false},
    ],
},

{
    questions: "What is the full meaning of F.D.D.?",
    answer: [
        {text: "Floppy Drive Device", correct: false},
        {text: "Floppy Device Disk", correct: false},
        {text: "Floppy Disk Drive", correct: true},
        {text: "Floppy Device Drive", correct: false},
    ],
},

    {
    questions: "What is the full meaning of R.A.M?",
    answer: [
        {text: "Read Accsess Memory", correct: true},
        {text: "Read Another Memory", correct: false},
        {text: "Ready Account Memory", correct: false},
        {text: "None of the above", correct: false},
    ],
},
];


let score = 0;
let currentQuestionIdx = 0;

startBtn.onclick = () => {
    setTimeout( () => {
        homeScreen.style.display = 'none';
        quizScreen.classList.add('active');
    },2000);

  displayQuestions();
};

function displayQuestions() {
  questionArea.innerHTML = '';
  questionHold.textContent = Questions[currentQuestionIdx].questions;
  totalQuestionSpan.textContent = Questions.length;
  currentQuestionSpan.textContent = currentQuestionIdx + 1;

  const progressPercent = ((currentQuestionIdx ) / Questions.length) * 100;
  progressBar.style.width = progressPercent + "%";
  progressBar.classList.add('progress');

  const Answers = Questions[currentQuestionIdx].answer;
  Answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('button');
    button.dataset.correct = answer.correct;
    questionArea.appendChild(button);

    button.onclick = (e) => {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === 'true';

      Array.from(questionArea.children).forEach(btn => {
        if (btn.dataset.correct === 'true') {
          btn.style.backgroundColor = 'green';
        } else {
          btn.style.backgroundColor = 'red';
        }
      });

      if (isCorrect) {
        score++;
      }

      scoreSpan.textContent = score;

      setTimeout(() => {
        currentQuestionIdx++;
        if (currentQuestionIdx < Questions.length) {
          displayQuestions();
        } else {
          quizScreen.style.display = 'none';
          resultScreen.classList.add('active');
          resultRemarkSpan.textContent = `You scored ${score} out of ${Questions.length}`;
        }
      }, 2000);
    };
  });
}

