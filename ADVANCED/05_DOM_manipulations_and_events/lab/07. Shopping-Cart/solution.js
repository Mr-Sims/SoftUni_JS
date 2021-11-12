// //trainer`s solution 87/100pts

// function solve() {
//    document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
//    document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

//    const cart = [];
//    const output = document.getElementsByTagName('textarea')[0];
//    output.value = ''

//    function onClick(ev) {
//       if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
//          const product = ev.target.parentNode.parentNode;
//          const name = product.querySelector('.product-title').textContent;
//          const price = Number(product.querySelector('.product-line-price').textContent);

//          cart.push({
//             name,
//             price
//          });

//          output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
//       }
//    }

//    function checkout() {
//       const products = new Set();
//       cart.forEach(p => products.add(p.name));

//       const total = cart.reduce((t, c) => t + c.price, 0);

//       output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`;
//    }
// }

/////////////////////////////////////////////////////////////////////////
// alternate solution with arrow funcs 100/100pts

// function solve() {

//    const cart = [];
//    const output = document.querySelector('textarea');
//    output.value = '';

//    document.querySelector('.shopping-cart').addEventListener('click', (e) => {
//       if(e.target.tagName === 'BUTTON' && e.target.classList.contains('add-product')) {
//          const product = e.target.parentNode.parentNode;
//          const name = product.querySelector('.product-title').textContent;
//          const price = Number(product.querySelector('.product-line-price').textContent);

//          cart.push({
//             name,
//             price
//          })

//          output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
//       }
//    })

//    document.querySelector('.checkout').addEventListener('click', (e) => {
//       const buttons = Array.from(document.querySelectorAll('button'));
//       buttons.forEach(btn => btn.disabled = true )
//       const products = new Set();
//       cart.forEach(p => products.add(p.name));

//       const total = cart.reduce((total,current) => total + current.price, 0);

//       output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
//    })
// }


//own solution with an event listener attached to each button 100/100pts
// function solve() {
   // const cart = document.querySelectorAll('button[class="add-product"]');
   // const textArea = document.getElementsByTagName('textarea')[0];
   // const output = [];

   // for (let btn of cart) {
   //    btn.addEventListener('click', addItem);
   // }

   // function addItem(e) {
   //    const product = e.target.parentNode.parentNode;
   //    const price = Number(product.querySelector('.product-line-price').textContent);
   //    const name = product.querySelector('.product-title').textContent;
   //    output.push({
   //       name,
   //       price
   //    });
   //    textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   // }

   // const checkoutBtn = document.querySelector('button[class="checkout"]');
   // checkoutBtn.addEventListener('click', doCheckout);

   // function doCheckout(e) {
   //    const allButtons = document.querySelectorAll('button')
   //    Array.from(allButtons).forEach(b => {b.disabled = true})

   //    const items = []
   //    for (let item of output) {
   //       if (!items.includes(item.name)) {
   //          items.push(item.name)
   //       }
   //    }
   //   const total = output.reduce((a, p) => a + p.price,0)
   //   textArea.textContent += `You bought ${items.join(', ')} for ${total.toFixed(2)}.`;

   // }
// }

//own solution with an event delegation 100/100pts
function solve() {
   const cart = document.getElementsByClassName('shopping-cart')[0];
   cart.addEventListener('click', addItem);
   const textArea = document.getElementsByTagName('textarea')[0];
   const output = [];


   function addItem(ev) {
      if (ev.target.className == 'add-product') {
         const product = ev.target.parentNode.parentNode;
         const price = Number(product.querySelector('.product-line-price').textContent);
         const name = product.querySelector('.product-title').textContent;
         output.push({
            name,
            price
         });
         textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   const checkoutBtn = document.querySelector('button[class="checkout"]');
   checkoutBtn.addEventListener('click', doCheckout);

   function doCheckout(e) {
      const allButtons = document.querySelectorAll('button')
      Array.from(allButtons).forEach(b => {b.disabled = true})

      const items = []
      for (let item of output) {
         if (!items.includes(item.name)) {
            items.push(item.name)
         }
      }
     const total = output.reduce((a, p) => a + p.price,0)
     textArea.textContent += `You bought ${items.join(', ')} for ${total.toFixed(2)}.`;
   }
}



