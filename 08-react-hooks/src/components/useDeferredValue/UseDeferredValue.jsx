import { useEffect, useRef, useState } from "react";
import List from "./List";

function UseDeferredValue() {
  const [input, setInput] = useState("");
  let renderCount = useRef(null);
  function handleChange(e) {
    setInput(e.target.value);
  }
  useEffect(() => {
    renderCount.current += 1;
    console.log("Render: ", renderCount.current);
  });

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {/* passing input as prop to list - this value will be deferred */}
      <List input={input} />
    </div>
  );
}

export default UseDeferredValue;
