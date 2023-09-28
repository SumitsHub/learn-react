import { useState } from "react";

/**
 *
 * @param {*} defaultValue
 * @returns {show, toggle}
 *
 * custome hook rules -
 * 1. name must start with use -> useHookName
 * 2. can only be used inside functional component similiar to built-in hooks
 */

const useToggle = defaultValue => {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow(!show);
  };

  return { show, toggle };
};

export default useToggle;
