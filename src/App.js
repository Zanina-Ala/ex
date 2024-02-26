import React, { useState } from 'react';
import './App.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App : </h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-</button>
      
    </div>
  );
}

export default CounterApp;


