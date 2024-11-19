/**
 * useRef use cases -
 *  1. Referencing to DOM element - (avoid using document.getElement API methods to reference elements in React)
 *  2. Setting 'focus' of input by using ref attribute to input tag, clicking element programmatically, reset form element
 *  3. Using value that will be persistent across rerenders like an instance of an "Intersection Observer", timer id, etc
 *  4. Storing reference of the scrollbar position across re-renders
 */

import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const inputRef = useRef(null);
  const isMounted = useRef(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current);
    const name = inputRef.current.value;
    console.log(name);
  };
  useEffect(() => {
    // console.log(inputRef.current);
    inputRef.current.focus(); // setting focus on input on page load using ref
  });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('re-render');
  }, [value]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" ref={inputRef} className="form-input" />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
