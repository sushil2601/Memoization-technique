import { useState } from "react";

const HoverCounter = () => {
  console.log("Inside Hover Counter");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hover Counter</h1>
      <h2>Count is :- {count}</h2>
      <button onMouseOver={() => setCount(count + 1)}>Hover Me</button>
    </div>
  );
};

export default HoverCounter;
