import { useState } from "react";
import Parent from "./Parent";

const MountUnmount = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          setToggle(prev => !prev);
        }}
      >
        Toggle Show
      </button>
      {toggle && <Parent />}
    </div>
  );
};

export default MountUnmount;
