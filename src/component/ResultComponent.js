import React, { useMemo } from "react";

const ResultComponent = (props) => {
  const { marks, subject } = props;

  console.log("Result Component");

  //   const percentage = (marks * 100) / 100;

  const percentageMarks = useMemo(() => {
    console.log("Inside useMemo");

    return (marks * 100) / 100;
  }, [marks]);

  return (
    <div>
      <h2>Marks is : {marks}</h2>
      <h2>Percentage is : {percentageMarks}%</h2>
      <h3>Subject is : {subject}</h3>
    </div>
  );
};

export default React.memo(ResultComponent);
