import { useState } from "react";

const ClickCounter = () => {
  console.log("Inside Click Counter");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Click Counter</h1>
      <h2>Count is :- {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default ClickCounter;
