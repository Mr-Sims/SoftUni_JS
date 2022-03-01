// // solution with RegEx
// function editElement(ref, match, replacer) {
//     const content = ref.textContent;
//     const matcher = new RegExp(match, 'g');
//     const edited = content.replace(matcher, replacer);
//     ref.textContent = edited;
// }


// alternate solution with while loop

function editElement(ref, match, replacer) {
    while(ref.textContent.includes(match)) {
        ref.textContent = ref.textContent.replace(match, replacer)
    }
}