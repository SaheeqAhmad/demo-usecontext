import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  //let [number, setNumber] = useState(45)
  //let value = 81;
  //let value = [number, setNumber] = useState(45);
  let value = useState(45);
  return (
    <ValueContext.Provider value={value}>
      <div>
        Welcome World
      <Parent></Parent>

      </div></ValueContext.Provider>

  );
}

export default App;
