import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>React Counter App</h1>
      <div className="counter-display">
        <p className="count">{count}</p>
      </div>
      <div className="button-group">
        <button onClick={decrement} className="btn btn-danger">
          Decrease
        </button>
        <button onClick={reset} className="btn btn-secondary">
          Reset
        </button>
        <button onClick={increment} className="btn btn-success">
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
