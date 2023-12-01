function calculateWeeksInMonth(daysInMonth, startDayOfWeek){
    const totalDays = daysInMonth,
        daysInWeek = 7,
        fullWeeks = Math.ceil((totalDays + startDayOfWeek) / daysInWeek);

    return fullWeeks;
}


function calendar(days, currentDate, calendarDays, firstDay, month){
    console.log(currentDate)
    for(let day = 1; day < days + firstDay; day++){
        const li = document.createElement('li');
        li.textContent = (day < firstDay) ? '' : day - firstDay + 1;
        calendarDays.appendChild(li);
        if(day === currentDate.getDate() + (firstDay - 1) && month === currentDate.getMonth()){
            li.style.backgroundColor = '#03BBF1';
            li.style.color = '#FFF';
        }
    }

    for(let i = days + firstDay; i <= calculateWeeksInMonth(days, firstDay) * 7; i++){
        const li = document.createElement('li');
        li.textContent = '';
        calendarDays.appendChild(li);
    }

    calendarDays.style.gridTemplateRows = `repeat(${calculateWeeksInMonth(days, firstDay)}, 30px)`;

}

export { calendar };