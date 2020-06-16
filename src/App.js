import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Parent from './Parent';

function App() {
  let [number, setNumber] = useState(45)
  return (
    <div>
      Welcome World
      <Parent num={number}></Parent>
      <button onClick={() => { setNumber(++number) }}>Increament</button>
    </div>
  );
}

export default App;
