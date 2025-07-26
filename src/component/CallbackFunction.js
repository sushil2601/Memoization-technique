import React from "react";

const CallbackFunction = (props) => {
  const { incrementCount } = props;

  console.log("Inside callback function");

  return (
    <div>
      {/* <h2>Callback Function</h2> */}
      <button onClick={incrementCount}>Click Me</button>
    </div>
  );
};

export default React.memo(CallbackFunction);
