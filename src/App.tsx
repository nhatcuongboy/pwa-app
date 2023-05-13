import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState()
  async function logJSONData() {
    const response = await fetch("https://dummyjson.com/products/1");
    const jsonData = await response.json();
    setData(jsonData)
    console.log(jsonData);
  }
  useEffect(() => {
    logJSONData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Data</h1>
        <p>
          {JSON.stringify(data)}
        </p>
        <button onClick={() => logJSONData()}>Call api</button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
