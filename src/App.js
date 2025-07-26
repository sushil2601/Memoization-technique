import "./styles.css";
import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";
import ResultComponent from "./component/ResultComponent";
import NamedComponent from "./component/NamedComponent";
import CallbackFunction from "./component/CallbackFunction";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("inside useEffect");
  }, [incrementCount]);

  return (
    <div className="App">
      <h1>React Memo Example</h1>
      <hr />
      {/* React Memo Example */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <hr /> */}
      {/* UseMemo exmaple */}
      {/* <ResultComponent marks={90} subject={"Geo"} /> */}
      {/* <NamedComponent name="suman" /> */}
      {/* <hr /> */}
      {/* useCallback example */}

      <h2>{count}</h2>

      <CallbackFunction incrementCount={incrementCount} />
    </div>
  );
}
