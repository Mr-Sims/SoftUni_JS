// 
function attachEventsListeners() {
    const main = document.getElementsByTagName('main')[0]
    main.addEventListener('click', convert);
    const daysInput = document.getElementById('days')
    const hoursInput = document.getElementById('hours')
    const minutesInput = document.getElementById('minutes')
    const secondsInput = document.getElementById('seconds')

    function set(days) {
        daysInput.value = days
        hoursInput.value = Number(days * 24);
        minutesInput.value = Number(days * 1440);
        secondsInput.value = Number(days * 86400);
    }

    function convert(ev) {
        if (ev.target.type == 'button' && ev.target.id == 'daysBtn') {
            const days = Number(daysInput.value);
            set(days);
        } else if (ev.target.type == 'button' && ev.target.id == 'hoursBtn') {
            const days = Number(hoursInput.value / 24);
            set(days)
        } else if (ev.target.type == 'button' && ev.target.id == 'minutesBtn') {
            const days = Number(minutesInput.value / 1440);
            set(days)
        } else if (ev.target.type == 'button' && ev.target.id == 'secondsBtn') {
            const days = Number(secondsInput.value / 86400);
            set(days)
        }
    }
}

// function attachEventsListeners() {
//     const ratios = {
//         days: 1,
//         hours: 24,
//         minutes: 1440,
//         seconds: 86400 
//     };
//     function convert(value, unit) {
//         const inDays = value / ratios[unit]
//         return {
//              days: inDays,
//              hours: inDays * ratios.hours,
//              minutes: inDays * ratios.minutes,
//              seconds: inDays * ratios.seconds
//         }
//     };
//     window.convert = convert;

//     const daysInput = document.getElementById('days');
//     const hoursInput = document.getElementById('hours');
//     const minutesInput = document.getElementById('minutes');
//     const secondsInput = document.getElementById('seconds');

//     document.getElementById('daysBtn').addEventListener('click', onConvert);
//     document.getElementById('hoursBtn').addEventListener('click', onConvert);
//     document.getElementById('minutesBtn').addEventListener('click', onConvert);
//     document.getElementById('secondsBtn').addEventListener('click', onConvert);

//     function onConvert(e) {
//         const input = e.target.parentElement.querySelector('input[type="text"]');
//         const time = convert(Number(input.value), input.id)
//         daysInput.value = time.days;
//         hoursInput.value = time.hours;
//         minutesInput.value = time.minutes;
//         secondsInput.value = time.seconds;
//     }
// }



//refactored w only 1 eventListener

// function attachEventsListeners() {
//     const ratios = {
//         days: 1,
//         hours: 24,
//         minutes: 1440,
//         seconds: 86400
//     };
//     function convert(value, unit) {
//         const inDays = value / ratios[unit]
//         return {
//             days: inDays,
//             hours: inDays * ratios.hours,
//             minutes: inDays * ratios.minutes,
//             seconds: inDays * ratios.seconds
//         }
//     };
//     window.convert = convert;

//     const inputs = {
//     days: document.getElementById('days'),
//     hours: document.getElementById('hours'),
//     minutes: document.getElementById('minutes'),
//     seconds: document.getElementById('seconds')
// };
//     document.querySelector('main').addEventListener('click', onConvert);



//     function onConvert(e) {
//         if (e.target.tagName == 'INPUT' && e.target.type == 'button') {

//             const input = e.target.parentElement.querySelector('input[type="text"]');
//             const time = convert(Number(input.value), input.id);
//             Object.keys(time).forEach((k) => inputs[k].value = time[k]);
//         }
//     }
// }