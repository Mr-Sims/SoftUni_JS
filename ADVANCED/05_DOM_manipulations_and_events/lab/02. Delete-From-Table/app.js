// function deleteByEmail() {
//     // const inputData = document.getElementsByName('email')[0]
//     const inputData = document.querySelector('input[name="email"]');
//     const elements = document.querySelectorAll('#customers tr');
//     // alternate table selector = [...document.querySeletor('tbody').children]
//     const result = document.getElementById('result');
//     let flag = false;
//     for (item of elements) {
//         const currentMail = item.lastElementChild.innerText;
//         if (inputData.value == currentMail) {
//             item.remove()
//             flag = true;
//         }
//     }
//     if (flag == true) {
//         result.innerText = 'Deleted'
//     } else {
//         result.innerText = 'Not found.'
//     }
//     inputData.value = '';
// }



// alternate solution
function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');

    const rows = Array
    .from(document.querySelector('tbody').children)
    .filter(r => r.children[1].textContent == input.value);

    rows.forEach(r => r.remove());
   
    input.value = '';
    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted' : 'Not found.'
}