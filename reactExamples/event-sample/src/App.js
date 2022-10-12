import React, {useState} from 'react';

import './App.css';


function App() {
  const [counter, myFunction] = useState(0);
  const handlePlus=()=>{
    myFunction(counter+1)
  };
  const handleMinus=()=>{
    myFunction(counter-1)
  };
  const handleReset=()=>{
    myFunction(0);
  };
  return (
    <div className="App">
      <h3>{counter}</h3>
      <div className="buttonGroup">
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}

export default App;
