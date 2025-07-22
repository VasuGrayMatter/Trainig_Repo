import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
    <Greeting name="John" age={777777777777} />
    </div>
  );
}

export default App;
