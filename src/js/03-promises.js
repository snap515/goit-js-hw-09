import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name=delay]');
const stepEl = document.querySelector('[name=step]');
const amountEl = document.querySelector('[name=amount]');

let delay;
let step;
let amount;

formEl.addEventListener('submit', onFormSubmit);

function getFormData() {
  delay = delayEl.valueAsNumber;
  step = stepEl.valueAsNumber;
  amount = amountEl.valueAsNumber;
}

function onFormSubmit(e) {
  e.preventDefault();
  getFormData();
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));
    delay += step;
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
        // Reject
      }
    }, delay);
  });
}

// Notiflix.Notify.success('SUCCESS');
// Notiflix.Notify.failure('FAIL');
