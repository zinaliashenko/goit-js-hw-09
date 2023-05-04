// const flatpickr = require('flatpickr');
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value.toString().padStart(2, 0)}`;
}

const startBtn = document.querySelector('[data-start]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = new Date();
    console.log(selectedDates[0]);
    console.log(currentDate);

    startBtn.disabled = false;
    startBtn.addEventListener('click', onStartBtnClick);

    function onStartBtnClick() {
      let timeDifference = Math.abs(
        selectedDates[0].getTime() - currentDate.getTime()
      );

      if (timeDifference < 0) {
        window.alert('Please choose a date in the future');
        return;
      }

      let intervalId = null;

      const days = document.querySelector('[data-days]');
      const hours = document.querySelector('[data-hours]');
      const minutes = document.querySelector('[data-minutes]');
      const seconds = document.querySelector('[data-seconds]');

      intervalId = setInterval(() => {
        const msAfterConvertation = convertMs(timeDifference);

        days.textContent = addLeadingZero(msAfterConvertation.days);
        hours.textContent = addLeadingZero(msAfterConvertation.hours);
        minutes.textContent = addLeadingZero(msAfterConvertation.minutes);
        seconds.textContent = addLeadingZero(msAfterConvertation.seconds);

        if (timeDifference > 1000) {
          timeDifference = timeDifference - 1000;
          console.log(timeDifference);
        }
      }, 1000);

      return;
    }
  },
};

flatpickr('input#datetime-picker', options);
