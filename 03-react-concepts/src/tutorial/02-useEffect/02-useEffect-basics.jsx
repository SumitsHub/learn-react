import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(() => {
    console.log("useState"); // useState gets called only once
    return 5;
  });
  const sayHello = () => {
    console.log("hello there");
  };

  sayHello(); // function will be called on every rerender

  // following useEffect will also be invoked on every rerender, there is no dependency array
  // useEffect(() => {
  //   console.log("hello from useEffect");
  // });

  // following useEffect will be called only on initial render, as it has empty dependency array
  // it is similar to componnetDidMount() lifecycle method of class based component
  useEffect(() => {
    console.log("hello from useEffect");
  }, []);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
