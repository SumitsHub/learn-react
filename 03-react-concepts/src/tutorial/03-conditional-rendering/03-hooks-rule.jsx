import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState(true);
  // if (condition) {
  //   const [state, setState] = useState(false); // won't work -> hooks can only be used inside Functional components not inside any other block
  // }

  // below useEffect tries to set condition to false after 1 sec
  useEffect(() => {
    setTimeout(() => {
      setCondition(false);
    }, 1000);
  }, []);

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // this will also fail -> beacause we are returning before this line reaches AND even if you somehow set condition to false then also it will throw an error
  // Error: Rendered more hooks than during the previous render -> remember useEffect is a hook

  // useEffect(() => {
  //   console.log("hello there");
  // }, []);
  return <h2>example</h2>;
};

export default Example;
