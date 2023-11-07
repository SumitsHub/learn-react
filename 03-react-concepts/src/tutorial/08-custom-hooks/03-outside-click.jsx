import { useState } from 'react';
import useOutsideClick from './hooks/useOutsideClick';
import { data } from '../../data';

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const closeDropdown = () => {
    setShow(false);
  };
  const ref = useOutsideClick(closeDropdown);
  return (
    <div>
      <h5>Open dropdown and click outside to close</h5>
      <button
        className="btn"
        ref={ref}
        onClick={() => {
          setShow(!show);
        }}
      >
        Show List
      </button>
      {show && (
        <ul>
          {data.map(({ name, id }) => {
            return (
              <li
                key={id}
                onClick={() => {
                  // it works in react
                  console.log(name);
                }}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
