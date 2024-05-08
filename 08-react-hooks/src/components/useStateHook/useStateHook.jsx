import React, { useState } from "react";
import "./useStateHook.scss";
const useStateHook = () => {
  const [counter, setCounter] = useState(0);
  let [myArray, setMyArray] = useState([]);

  const array2 = []; // we can modify this array using functions like push()

  return (
    <>
      <h1>{counter}</h1>
      <h1>{myArray}</h1>
      <button
        className="btn-inc"
        onClick={() => setCounter((prevState) => prevState + 1)}
      >
        +
      </button>
      <button
        onClick={() => {
          myArray.push(456);
          array2.push(123)
          console.log(myArray);
          setMyArray([...array2, ...myArray, 789]); 
        }}
      >
        Try Change
      </button>
    </>
  );
};

export default useStateHook;
