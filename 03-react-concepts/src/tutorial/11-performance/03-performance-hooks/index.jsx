import { useCallback, useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import slowFunction from "./slowFunctions";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = slowFunction(); // this will take few seconds to do the computation and will block everything else till then
  console.log(value);

  const removePerson = useCallback(
    id => {
      const newPeople = people.filter(person => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
