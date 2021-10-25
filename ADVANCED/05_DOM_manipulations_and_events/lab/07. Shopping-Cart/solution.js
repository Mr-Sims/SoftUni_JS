function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

   const cart = [];
   const output = document.getElementsByTagName('textarea')[0];
   output.value = ''

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         });

         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   function checkout() {
      const products = new Set();
      cart.forEach(p => products.add(p.name));

      const total = cart.reduce((t, c) => t + c.price, 0);

      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`;
   }
}

/////////////////////////////////////////////////////////////////////////
// alternate
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