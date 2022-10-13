import React from 'react';

import './App.css';
import Carousel from './components/Carousel/Carousel';
import Counter from './components/Counter/Counter';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import Voting from './components/Voting/Voting';


function App() {
  return (
    <div className="App">
      <Counter/>
      <Carousel/>
      <QuoteGenerator/>
      <Voting/>
    </div>
  );
}

export default App;
