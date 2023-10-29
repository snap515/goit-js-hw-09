import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const timerTime = selectedDates[0] - Date.now();
    if (timerTime <= 0) {
      Notify.failure('Please choose a date in the future');
      // alert('Please choose a date in the future');
    } else {
      Notify.success('Timer has been calculated. Press start to RUN the timer');
      start.removeAttribute('disabled');
      timerCalc();
    }
  },
};

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const start = document.querySelector('[data-start]');

start.addEventListener('click', timerLauncher);

const flatpickrTimer = flatpickr('#datetime-picker', options);

function timerCalc() {
  const { days, hours, minutes, seconds } = convertMs(
    flatpickrTimer.selectedDates[0] - Date.now()
  );
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

function timerLauncher() {
  setInterval(timerCalc, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
