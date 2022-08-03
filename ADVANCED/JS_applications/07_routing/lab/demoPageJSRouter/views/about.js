const aboutTemplate = () => `
<h1>ABUT<h1>
<p>We are the alpha nad omega Lorem ipsum dolor sit amet</p>`;

const root = document.getElementById('root')


export const aboutView = (ctx) => {
    root.innerHTML = aboutTemplate()

}