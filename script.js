const answerButtons = document.querySelectorAll('.card__button');
const answerText = document.querySelectorAll('.card__answer');

answerButtons.forEach((answerButton, indexValues) => {
  answerButton.addEventListener('click', () => {
    answerText[indexValues].classList.toggle('hidden');
  });
});
