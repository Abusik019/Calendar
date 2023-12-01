import { calendar } from "./utils/calendar.js";

const yearElement = document.getElementById('year'),
      monthElement = document.getElementById('month'),
      prevBtn = document.getElementById('prev_btn'),
      nextBtn = document.getElementById('next_btn'),
      calendarDays = document.getElementById('calendar_days'),
      currentDate = new Date(),
      months = [
        'january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december'
      ];

let year = +yearElement.innerText,
    month = convertMonth(monthElement.innerText),
    firstDay = getFirstDay(monthElement.innerText, year),
    days = getLastDay(monthElement.innerText, year);

function convertMonth(monthString){
    const lowerCaseMonth = monthString.toLowerCase();
    const monthIndex = months.indexOf(lowerCaseMonth);

    return monthIndex >= 0 ? monthIndex : 0;
}

function getLastDay(month, year){
    console.log(month, year)

    month = convertMonth(month)

    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

function getFirstDay(month, year){

    month = convertMonth(month)
    const date = new Date(year, month, 1);
    return date.getDay() === 0 ? 7 : date.getDay();
}

function updateCalendar() {
    calendarDays.innerHTML = '';
    calendar(days, currentDate, calendarDays, firstDay, month);
}

function changeMonth(offset) {
    month += offset;
    if (month > 11) {
        month = 0;
        year++;
    } else if (month < 0) {
        month = 11;
        year--;
    }

    yearElement.innerText = year;
    monthElement.innerText = months[month][0].toUpperCase() + months[month].replace(/.(?=(.*))/, '');
    firstDay = getFirstDay(months[month], year);
    days = getLastDay(months[month], year);
    updateCalendar();
}

console.log(firstDay);

prevBtn.addEventListener('click', () => {
    changeMonth(-1);
});

nextBtn.addEventListener('click', () => {
    changeMonth(1);
});

window.addEventListener('load', () => {
    updateCalendar();
});


