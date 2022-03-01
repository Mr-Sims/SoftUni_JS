// function create(words) {
//    // create <div>
//    // create <p>
//    // set <p> content
//    // configure <p> to be hidden
//    // add <p> to <div>
//    // <div> to document html
//    // configure <div> eventListener

//    const content = document.getElementById('content')
//    for (let word of words) {
//       const div = document.createElement('div');
//       const par = document.createElement('p');
//       par.textContent = word;
//       par.style.display = 'none'

//       div.appendChild(par);

//       div.addEventListener('click', reveal)
//       content.appendChild(div);
//    }
//    function reveal(e) {
//       e.currentTarget.lastChild.style.display = ''
//    }
// }


// with event propagation
function create(words) {
   const content = document.getElementById('content')

   content.addEventListener('click', reveal)

   for (let word of words) {
      const div = document.createElement('div');
      const par = document.createElement('p');
      par.textContent = word;
      par.style.display = 'none'

      div.appendChild(par);
      content.appendChild(div);
   }
   function reveal(e) {
      if (e.target.tagName == 'DIV' && e.target != content) {
         e.target.children[0].style.display = ''
      }
   }
}