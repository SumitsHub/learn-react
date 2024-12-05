import { useEffect, useState } from "react";

function Child({ updateCount }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    updateCount(() => {
      setCount(prev => prev + 1);
    });
  }, []);
  return <div>{count}</div>;
}

function Parent() {
  let setCount = () => {};
  const handleClick = () => {
    setCount();
  };

  const updateCount = setCountFn => {
    setCount = setCountFn;
  };
  return (
    <div>
      <Child updateCount={updateCount} />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
export default Parent;
