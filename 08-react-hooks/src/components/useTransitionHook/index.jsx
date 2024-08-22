import { useEffect, useRef, useState, useTransition } from "react";

function UseTransition() {
  let renderCount = useRef(null);
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  useEffect(() => {
    renderCount.current += 1;
    console.log("Render : ", renderCount.current);
  });

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <ul>
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default UseTransition;
