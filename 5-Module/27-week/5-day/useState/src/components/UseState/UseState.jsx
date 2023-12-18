import { useState } from 'react';

import './UseState.css'


const UseState = () => {
  const [theme, setTheme] = useState('light')
    let [count, setCount] = useState(0)


  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((prevCount) => ++prevCount)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => --prevCount)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
