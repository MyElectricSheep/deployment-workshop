import "./App.css";
import serverUrl from "./serverUrl";
import { useEffect } from "react";

// console.log(process.env.NODE_ENV);

function App() {
  useEffect(() => {
    fetch(`${serverUrl}/users`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${serverUrl}/images/cat.jpg`}
          className="App-logo"
          alt="logo"
        />
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
      </header>
    </div>
  );
}

export default App;
