import { useState } from "react";

function SetCount() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleDecrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default SetCount;
