import React, {useState} from 'react';

import './App.css';


function App() {
  const [counter, myFunction] = useState(0);
  const handlePlus = () =>{
    if (counter < 20){
      myFunction(counter+1)
    }else{
      alert('Counter is at the maximum value')
    }
  };
  const handleMinus = () => {
    if (counter > 0){
      myFunction(counter-1)
    }else{
      alert('Counter is at the minimum value')
    }
  }
  const handleReset = () =>{
    myFunction(0)
  }
  return (
    <div className="App">
      <h3>{counter}</h3>
      <div className="buttonGroup">
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
