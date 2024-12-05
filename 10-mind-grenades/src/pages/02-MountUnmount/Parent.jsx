import { useEffect } from "react";
import Child from "./Child";

const Parent = () => {
  useEffect(() => {
    console.log("Parent Mounted");

    return () => {
      console.log("Parent Unmounted");
    };
  }, []);
  return (
    <div>
      <h1>Parent</h1>
      <Child />
    </div>
  );
};

export default Parent;
