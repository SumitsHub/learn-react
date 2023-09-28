import { useState } from "react";
import { data } from "../../../../data";
import Counter from "./Counter";
import List from "./List";
/**
 * Updation of count state causes unnecessary rerender of List component
 * To avoid -> moved countet logic to separate component -> meaning lower down the state to component levels
 */
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      {/* <Counter /> */}
      <List people={people} />
    </section>
  );
};
export default LowerState;
