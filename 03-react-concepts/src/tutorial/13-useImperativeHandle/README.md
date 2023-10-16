## useImperativeHandle
- useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref
- Syntax - useImperativeHandle(ref, createHandle, dependencies?)
- Example
```js
import { forwardRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
    useImperativeHandle(ref, () => {
        return {
            // ... your methods ...
    };
  }, []);
```
- The methods you expose via an imperative handle don’t have to match the DOM methods exactly
- ref: The ref you received as the second argument from the forwardRef render function.
- createHandle: A function that takes no arguments and returns the ref handle you want to expose. That ref handle can have any type. Usually, you will return an object with the methods you want to expose.
- 