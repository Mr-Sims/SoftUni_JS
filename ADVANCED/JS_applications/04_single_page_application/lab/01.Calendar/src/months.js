import { showDays } from "./days.js";

let yearSelection;
let yearNumber; 

const monthsMapper = {
    'Jan': '1',
    'Feb': '2',
    'Mar': '3',
    'Apr': '4',
    'May': '5',
    'Jun': '6',
    'Jul': '7',
    'Aug': '8',
    'Sept': '9',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12',
}

export function showMonths(yearSelected) {
    const year = document.getElementById(`year-${yearSelected}`);
    year.style.display = 'block';

    year.addEventListener('click', monthSelect);
    yearSelection = year;
    yearNumber = yearSelected;
}

function monthSelect(ev) {
    ev.preventDefault();
    let monthSelected = '';
    if (ev.target.tagName == 'CAPTION') {
        yearSelection.style.display = 'none';
        document.getElementById('years').style.display = 'block';
    }
    else {
        if(ev.target.tagName == 'TD') {
            monthSelected = ev.target.children[0].textContent;
        } else if(ev.target.tagName == 'DIV') {
            monthSelected = ev.target.textContent;
        }

        yearSelection.style.display = 'none'
        showDays(yearNumber, monthsMapper[monthSelected]);
    }
}
