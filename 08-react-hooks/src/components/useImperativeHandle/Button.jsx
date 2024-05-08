import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [state, setState] = useState(false);

  useImperativeHandle(ref, ()=>({
    toggle() {
        setState(!state);
    }
  }));

  return <div>
    <button onClick={()=>{
        setState((prevState)=>!prevState);
    }}>
        Child
    </button>

    {state && <p>Toggle Text</p>}
  </div>;
});

export default Button;