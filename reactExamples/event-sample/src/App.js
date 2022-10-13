import React, {useState} from 'react';

import './App.css';
import Carousel from './components/Carousel/Carousel';
import Counter from './components/Counter/Counter';


function App() {
  return (
    <div className="App">
      <Counter/>
      <Carousel/>
    </div>
  );
}

export default App;
