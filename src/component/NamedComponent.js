import React from "react";

const NamedComponent = (props) => {
  const { name } = props;

  console.log("Named Component");

  return (
    <div>
      <h2>Name is : {name}</h2>
    </div>
  );
};

export default React.memo(NamedComponent);
