## forwardRef
- forwardRef lets your component expose a DOM node to parent component with a ref
- By default, components don’t expose their DOM nodes to parent components
- Call forwardRef() to let your component receive a ref and forward it to a child component
```js
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  // ...
});
```
- forwardRef accepts a render function as an argument. React calls this function with props and ref
```js
const MyInput = forwardRef(function MyInput(props, ref) {
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
});
```
- Example parent component
```js
import { useRef } from 'react';
import MyInput from './MyInput';

function Form() {
  // creating ref with useRef hook
  const ref = useRef(null);

  function handleClick() {
    // accessing input element exposed by child component
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
 
```

### Examples use cases
1. Focusing a text input
2. Playing and pausing a video