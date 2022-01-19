import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/index.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

{isAuthenticated ? (
  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
) : (
  <>
    <LinkContainer to="/signup">
      <Nav.Link>Signup</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/login">
      <Nav.Link>Login</Nav.Link>
    </LinkContainer>
  </>
)}

export default App;
