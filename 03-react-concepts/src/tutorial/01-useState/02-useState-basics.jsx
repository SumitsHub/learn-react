import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState()); // [undefined, ƒ] -> useState returns an array containing state and function set state
  // console.log(useState("jo koy")); // ['jo koy', ƒ]

  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler); // undefined and setState function

  const [count, setCount] = useState(0);
  const handleClick = () => {
    // console.log(count)
    setCount(count + 1);
    // be careful, we can set any value
    // setCount('pants');
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
