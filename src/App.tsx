import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button onClick={() => {
          alert(`Result from WebAssembly: ${window.myGolangFunction(2, 3)}`);
        }}>
          Click here to invoke WebAssembly
        </button>
      </header>
    </div>
  );
}

export default App;
