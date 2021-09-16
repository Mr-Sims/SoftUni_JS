// function dayOfWeek(string) {
//     let res;
//     if (string === 'Monday') {
//         res = 1;
//     } else if (string === 'Tuesday') {
//         res = 2;
//     } else if (string === 'Wednesday') {
//         res = 3;
//     } else if (string === 'Thursday') {
//         res = 4;
//     } else if (string === 'Friday') {
//         res = 5;
//     } else if (string === 'Saturday') {
//         res = 6;
//     } else if (string === 'Sunday') {
//         res = 7;
//     } else {
//         res = 'error'
//     }
//     return res
// }

function dayOfWeek(day) {
    const days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }
    return days[day] || 'error'

}

console.log(dayOfWeek('Monday'))
console.log(dayOfWeek('Friday'))
console.log(dayOfWeek('Dick'))
