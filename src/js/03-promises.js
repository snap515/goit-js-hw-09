import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

let delay;
let step;
let amount;

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  getFormData();
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));
    delay += step;
  }
}

function getFormData() {
  delay = formEl.elements.delay.valueAsNumber;
  step = formEl.elements.step.valueAsNumber;
  amount = formEl.elements.amount.valueAsNumber;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
