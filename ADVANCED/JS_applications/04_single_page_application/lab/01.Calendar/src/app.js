import { showYears } from "./years.js";

const sections = document.querySelectorAll('section');
sections.forEach(s => {
    s.style.display = 'none';
})


showYears();