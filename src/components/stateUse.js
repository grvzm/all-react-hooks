import React, { useState } from 'react';
import '../styles/stateUse.css';

const StateUse = () => {
  const [count, setCount] = useState(0);
  const addHandler = () => {
    setCount(count + 1);
  };
  const substractHandler = () => {
    setCount((prev) => {
      prev = prev - 1;
      prev = prev - 2;
      return prev;
    });
  };
  return (
    <>
      <h3>Counter [useState Hook]</h3>
      <div className="counter-app">
        <button onClick={substractHandler}>-</button>
        <span>{count}</span>
        <button onClick={addHandler}>+</button>
      </div>
    </>
  );
};

export default StateUse;
