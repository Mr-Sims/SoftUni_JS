const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement('h1', {}, "SOFA");

// const headerElement = React.createElement('header', {className:'site-header'}, 
// React.createElement('h1', {}, "SOFA"),
// React.createElement('p', {}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore saepe explicabo consequuntur, minima tenetur odio dicta totam soluta id illo cum laboriosam tempora exercitationem quibusdam in. Nemo, accusantium iste')
// )

const headerElement = (
    <header className="site-header">
        <h1>Hello from JSX</h1>
        <h2>Slogan here</h2>
        <p>lorem ipsum dolor sit amet</p>
        <p>lorem ipsum dolor sit amet</p>

    </header>
);

root.render(headerElement)