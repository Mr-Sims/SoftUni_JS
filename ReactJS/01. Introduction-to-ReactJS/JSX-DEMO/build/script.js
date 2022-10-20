var rootElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement('h1', {}, "SOFA");

// const headerElement = React.createElement('header', {className:'site-header'}, 
// React.createElement('h1', {}, "SOFA"),
// React.createElement('p', {}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore saepe explicabo consequuntur, minima tenetur odio dicta totam soluta id illo cum laboriosam tempora exercitationem quibusdam in. Nemo, accusantium iste')
// )

var headerElement = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello from JSX"
    ),
    React.createElement(
        "h2",
        null,
        "Slogan here"
    ),
    React.createElement(
        "p",
        null,
        "lorem ipsum dolor sit amet"
    ),
    React.createElement(
        "p",
        null,
        "lorem ipsum dolor sit amet"
    )
);

root.render(headerElement);