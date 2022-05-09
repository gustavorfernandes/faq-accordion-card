const questionsList = document.querySelectorAll('.faq__question');
const answersList = document.querySelectorAll('.faq__answer');
const arrowsList = document.querySelectorAll('.faq__icon');

for (let i = 0; i < questionsList.length; i++) {
  const questionToActive = questionsList[i];
  questionToActive.onclick = function () {
    showAnswer(i);
    activateQuestion(i);
    toggleArrow(i);
  }
}

for (let i = 0; i < arrowsList.length; i++) {
  const arrowToActive = arrowsList[i];
  arrowToActive.onclick = function () {
    showAnswer(i);
    activateQuestion(i);
    toggleArrow(i);
  }
}

function showAnswer(index) {
  const openedAnswer = document.querySelector('#open');
  const answerToOpen = answersList[index];
  if (openedAnswer === null) {
    answerToOpen.id = 'open';
  } else if(answerToOpen === openedAnswer) {
    openedAnswer.removeAttribute('id');    
   } else {
    openedAnswer.removeAttribute('id');
    answerToOpen.id = 'open';
  }
}

function activateQuestion(index) {
  const activeQuestion = document.querySelector('.active');
  const toggleActiveQuestion = questionsList[index];
  if (activeQuestion === null) {
    toggleActiveQuestion.classList.add('active');
  } else if (activeQuestion === toggleActiveQuestion) {
    activeQuestion.classList.remove('active');
  } else {
    activeQuestion.classList.remove('active');
    toggleActiveQuestion.classList.add('active');
  }
}

function toggleArrow(index) {
  const arrowUp = document.querySelector('.arrow-up');
  const arrowToUp = arrowsList[index];
  if (arrowUp === null) {
    arrowToUp.classList.add('arrow-up');
  } else if (arrowUp == arrowToUp) {
    arrowToUp.classList.remove('arrow-up');
  } else {
    arrowUp.classList.remove('arrow-up');
    arrowToUp.classList.add('arrow-up');    
  }
}
