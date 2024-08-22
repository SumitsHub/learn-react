import { useDeferredValue, useMemo, useRef, useEffect } from "react";

function List({ input }) {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);
  let renderCount = useRef(null);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);
  useEffect(() => {
    renderCount.current += 1;
    console.log("List Render: ", renderCount.current);
    console.log(`input: ${input}, deferredInput: ${deferredInput}`);
  });
  return list;
}

export default List;
