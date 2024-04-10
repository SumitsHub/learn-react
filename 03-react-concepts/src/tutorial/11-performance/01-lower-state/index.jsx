import { useState } from 'react';
import { data } from '../../../../data';
import Counter from './Counter';
import List from './List';
/**
 * Update of count state causes unnecessary rerender of List component
 * To avoid -> moved counter logic to separate component -> meaning lower down the state to component levels
 * 
 * Point: to avoid unnecessary rerenders move state variables to component level
 */
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  return (
    <section>
      {/* to see the actual difference comment this below button and uncomment Counter component */}
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      {/* <Counter /> */}
      <List people={people} />
    </section>
  );
};
export default LowerState;
