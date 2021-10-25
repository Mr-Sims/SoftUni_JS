// function focused() {
//     // const fields = Array.from(document.getElementsByTagName('input'));

//     // for (let item of fields) {
//     //     item.addEventListener('focus', onFocus);
//     //     item.addEventListener('blur', onBlur);
//     // }

//     const fields = Array
//         .from(document.getElementsByTagName('input'))
//         .forEach(item => {
//             item.addEventListener('focus', onFocus)
//             item.addEventListener('blur', onBlur)
//         });
//     function onFocus(ev) {
//         // ev.target.parentNode.className = 'focused';
//         ev.target.parentNode.classList.add('focused')
//     }

//     function onBlur(ev) {
//         // ev.target.parentNode.className = '';
//         ev.target.parentNode.classList.remove('focused')

//     }
// }

// //////////////////////////////////////
// with arrow funcs
function focused() {
    Array
        .from(document.getElementsByTagName('input'))
        .forEach(field => {
            field.addEventListener('focus', ({target: {parentNode}}) => parentNode.classList.add('focused'));
            field.addEventListener('blur', ({target: {parentNode}}) => parentNode.classList.remove('focused'));
        })
}