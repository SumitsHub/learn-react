import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const useMemoHook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   setData(res.data);
    // });
    setData("Constant");
  }, []);

  const computeFunction = (data) => {
    console.log("data", data);
    return data;
  };

  const memoizedFunction = useMemo(() => computeFunction(data), [data]);

  // useMemo(() => function, input)
  return (
    <div>
      {/* <h1>{toggle && computeFunction(data)}</h1> */}
      <h1>{toggle && memoizedFunction}</h1>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </div>
  );
};

export default useMemoHook;
