import { useRef } from 'react';
import MyInput from './MyInput';

export default function Form() {
  const ref = useRef(null);

  function handleClick() {
    console.log(ref); // object containing current property
    // ref.current = object exposed by useImperativeHandle hook
    ref.current.focus();
    // This won't work because the DOM node isn't exposed:
    // ref.current.style.opacity = 0.5;
  }

  return (
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
