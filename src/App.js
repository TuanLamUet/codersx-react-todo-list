import React from 'react';
import logo from './logo.svg';
import './App.css';

function Todos() {
  const todo = [
    'Go to market',
    'Buy food',
    'Make dinner'
  ];
  return(
    <ul>
      {todo.map((item) => <li>{item}</li>)}
    </ul>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Todos/>
      </header>
    </div>
  );
}

export default App;
