import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  // creating own ref here - unlike forwardRef
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      // function returning object which can be accessed in parent component as 'ref.current'
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    []
  );

  return <input {...props} ref={inputRef} />;
});

export default MyInput;
