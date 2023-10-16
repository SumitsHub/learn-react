import { forwardRef } from 'react';

// Wrapping MyInput component - render prop for forwardRef
// it is receiving ref from parent component as second parameter along with props as 1st param
const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});

export default MyInput;
// NOTE - above input element will be exposed to parent
