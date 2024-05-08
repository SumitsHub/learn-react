import React, { useRef } from "react";
import Button from "./Button";

const useImperativeHandleHook = (props) => {
  const btnRef = useRef(null);
  
//   useImperativeHandle(
//       ref,
//       () => {
//           handler
//       },
//       [input],
//   )

  return (
    <div>
      <h1>useImperativeHandle Hook</h1>

      <button onClick={()=>{
          console.log(btnRef.current);
          btnRef.current.toggle();
      }}>Parent</button>
      <Button ref={btnRef}/>
    </div>
  );
};

export default useImperativeHandleHook;
