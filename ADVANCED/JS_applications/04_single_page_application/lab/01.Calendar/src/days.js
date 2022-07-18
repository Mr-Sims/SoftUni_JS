let yearNum;
let monthSec;

export function showDays(year, month) {
    const monthConstruct = `month-${year}-${month}`;
    console.log(monthConstruct);
    const monthSection = document.getElementById(monthConstruct);
    monthSection.style.display = 'block';

    yearNum = year;
    monthSec = monthSection;

    monthSection.addEventListener('click', monthsPreview);
}

function monthsPreview(ev) {
    ev.preventDefault();
    if(ev.target.tagName == 'CAPTION') {
        monthSec.style.display = 'none';
        document.getElementById(`year-${yearNum}`).style.display = 'block';
    }
}