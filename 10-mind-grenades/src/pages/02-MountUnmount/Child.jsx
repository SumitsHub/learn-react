import { useEffect } from "react";

const Child = () => {
  useEffect(() => {
    console.log("Child Mounted");

    return () => {
      console.log("Child Unmounted");
    };
  }, []);
  return <h2>Child</h2>;
};

export default Child;
