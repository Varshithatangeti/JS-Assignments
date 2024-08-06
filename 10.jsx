import React, { createContext, useState, useContext } from 'react';
const CounterContext = createContext();
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const value = { count, increment, decrement };
  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};
const useCounter = () => useContext(CounterContext);
const CounterDisplay = () => {
  const { count } = useCounter();
  return (
    <div>
      <h1>Current Count: {count}</h1>
    </div>
  );
};
const CounterControls = () => {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
const App = () => {
  return (
    <CounterProvider>
      <div>
        <h1>React Context Example</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
};
export default App;
