// function lockedProfile() {
//     Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

//     function onToggle(e) {
//         const profile = e.target.parentElement;
//         const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
//         if (isActive) {
//             const infoDif = profile.querySelector('div');
//             if (e.target.textContent == 'Show more') {
//                 infoDif.style.display = 'block';
//                 e.target.textContent = 'Hide it';
//             } else {
//                 infoDif.style.display = '';
//                 e.target.textContent = 'Show more';
//             }
//         }
//     }
// }

// solution with event delegation
function lockedProfile() {
    const main = document.getElementById('main')
    main.addEventListener('click', showHide);

    function showHide(ev) {
        if (!ev.target.parentNode.children[2].checked) {
            if (ev.target.tagName == 'BUTTON') {
                const hiddenDiv = ev.target.parentNode.children[9];
                if (ev.target.textContent == 'Show more') {
                    hiddenDiv.style.display = 'inline-block'
                    ev.target.textContent = 'Hide it'
                } else if (ev.target.textContent == 'Hide it') {
                    hiddenDiv.style.display = ''
                    ev.target.textContent = 'Show more'
                }
            }
        }
    }
}