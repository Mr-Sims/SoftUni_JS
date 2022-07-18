import { showMonths } from "./months.js";

const section = document.getElementById('years');
section.addEventListener('click', yearSelect);

export function showYears() {
    section.style.display = 'block';
}


function yearSelect(ev) {
    ev.preventDefault();
   let yearSelected = ''; 
    if(ev.target.tagName == 'TD') {
        yearSelected = ev.target.children[0].textContent;
    } else if(ev.target.tagName == 'DIV') {
        yearSelected = ev.target.textContent;
    }
    section.style.display = 'none';
    showMonths(yearSelected);
   
}