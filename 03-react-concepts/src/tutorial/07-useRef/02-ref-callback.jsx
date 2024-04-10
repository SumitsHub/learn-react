import { useCallback } from 'react';

function RefCallback() {
  const inputRef = useCallback(node => {
    console.log(node); // HTML DOM element
    console.log(typeof node.value); // string
  },[]);

  const getNode = node => {
    console.log(node); // HTML DOM element
  };
  return (
    <div>
      <input type="search" name="search" id="search" ref={inputRef} />
      <input type="search2" name="search2" id="search2" ref={getNode} />
    </div>
  );
}
export default RefCallback;
