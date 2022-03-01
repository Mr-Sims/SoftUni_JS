// own solution

function solve() {
  const text = document.getElementById('input').value;
  const splitedText = text.split('.');
 
  const output = document.getElementById('output');
  let result = '';
  
  const LIMIT = 3;
  let counter = 0
  let paragraph = [];

  for (let i = 0; i < splitedText.length; i++) {
    if (counter < LIMIT) {
      paragraph.push(splitedText[i].trim());
      counter++;
      if (i == splitedText.length - 1) {
        result += `<p>${paragraph.join('.')}</p>`;
      }
    } 
    
    else {
      counter = 0;
      result +=`<p>${paragraph.join('.')}.</p>\n`
      paragraph = []
      paragraph.push(splitedText[i].trim())
      counter++
    }
  }
  output.innerHTML = result;
}
////////////////////////////////////////////////////////////////////



// another solution
// function solve() {
//   let textAreaElement = docume]]nt.getElementById('input');

//   let text = textAreaElement.value;

//   let sentences = text.split('.')
//     .filter(x => x !== "")
//     .map(x => x + '.');

//   let paragraphRoof = Math.ceil(sentences.length / 3);

//   let resultDiv = document.getElementById('output');
//   for (let index = 0; index < paragraphRoof; index++) {
//     resultDiv.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`
//   }
// }

