function prevDays (year, month, day) {
    let newDate =  new Date(year, month-1, day-1);
    let newYear = newDate.getFullYear();
    let newMonth = newDate.getMonth();
    let newDay = newDate.getDate();
    return `${newYear}-${newMonth+1}-${newDay}`
}

console.log(prevDays(2016, 9, 30));
console.log(prevDays(2016, 10, 1));
