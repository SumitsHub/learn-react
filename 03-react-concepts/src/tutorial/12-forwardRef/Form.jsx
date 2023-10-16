import { useRef } from 'react';
import MyInput from './MyInput';

function Form() {
  // creating ref with useRef hook
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      {/* passing ref to React child component */}
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}

export default Form;
