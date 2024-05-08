import React, { useEffect, useRef } from "react";

const useRefHook = () => {
  // const ref = useRef(initialValue);
  // referencing input tag using ref attribute and useRef hook
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);
  });

  return (
    <div>
      <h1>useRef Hook</h1>
      <input type="text" ref={inputRef} placeholder="Type Something.." />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        See Value
      </button>
    </div>
  );
};

export default useRefHook;
