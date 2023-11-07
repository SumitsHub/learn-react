import { useEffect, useRef } from 'react';

/**
 *
 * @param {*} callback - callback to be called when clicked outside of particular element referenced by ref
 * @returns - ref that can be used to reference an element whose outside click will be monitored
 */
function useOutsideClick(callback = () => {}) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);
  return ref;
}
export default useOutsideClick;
