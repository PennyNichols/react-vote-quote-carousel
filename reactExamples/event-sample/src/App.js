import React, {useState} from 'react';

import './App.css';


function App() {
  const [counter, myFunction] = useState(0);
  const handlePlus=()=>{
    myFunction(counter+1)
  };
  const handleMinus=()=>{
    if (counter>0){
      myFunction(counter-1)
    } else{
      alert('Counter is already at minimum value of 0')
    }
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
