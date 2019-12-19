import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import Scoreframes from "./components/scoresheet/Scoreframes";
import Pins from "./components/scoresheet/Pins"


function App() {
  return (
      <div>
      <h1>Welcome to The Bowling Score Calculator</h1> 
      <Pins />
      <Scoreframes />
      </div>
  );
}

export default App;
