import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
    // be careful
    // setValue(value + 1);
  };
  sayHello(); // this function updates the state value and calling this function will cause infinite re-renders
  // REASON -> every time function will be calles it will update the state and each time state update component will rerender and will call this function again
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
