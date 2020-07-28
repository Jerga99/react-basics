

import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = num => () => {
    setCounter(counter + num);
  }

  return (
    <div className="container">
      <h1>My Counter App: {counter}</h1>
      <button onClick={increment(1)}>Increment</button>
      <button onClick={increment(-1)}>Decrement</button>
    </div>
  )
}

export default App;
