import logo from './logo.svg';


const Header = (props) => {
    return <header className="App-header">
        <h1>{props.text}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button>{props.btn}</button>
      </header>
};

export default Header;