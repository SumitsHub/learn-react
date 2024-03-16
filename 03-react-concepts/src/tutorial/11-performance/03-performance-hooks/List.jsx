import { memo } from "react";
import Item from "./Person";

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map(person => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};
export default memo(List, (prevProps, nextProps)=>{
  console.log(prevProps, nextProps);

  return Object.is(prevProps, nextProps);
});
