# Performance Hooks

## React.memo

- React.memo is a higher-order component (HOC) in React that allows you to memoize a component. This means that if the input props to the component have not changed, the memoized component will return the same result from the previous render, instead of re-rendering. This can help improve performance by avoiding unnecessary render cycles.

- The React.memo function takes a functional component as its argument and returns a new component that has the same behavior, but with the added optimization of checking if the props have changed. If the props have not changed, the memoized component will return the cached result from the previous render.

- Here's an example of using React.memo

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* render logic */
});
```

- The above component will only rerender if it's input props changed, not even if it's parent level state changes

- Gotcha with memo -> when we pass function as prop to component, then memoised component will also rerender if parent component rerenders
- Reason -> every time component rerenders, functions get's created from scratch, so indirectly props to memoised component gets changed and forces component to rerender
- Fix -> use of useCallback hook, see below

## UseCallback

- The useCallback hook is a hook in React that allows you to memoize a function. It takes two arguments: the first is the function you want to memoize, and the second is an array of dependencies. The hook will return a memoized version of the function that only changes if one of the values in the dependency array changes.

- By memoizing the function, you can avoid unnecessary re-renders and improve the performance of your React application. The function will only be re-created if one of its dependencies changes, otherwise the same instance of the function will be returned. This can be useful in situations where you have an expensive function that you only want to recompute when its dependencies change.

- Here is an example of how you might use useCallback:

```js
import React, { useCallback, useState } from "react";

function MyComponent() {
  const [data, setData] = useState([]);
  const handleClick = useCallback(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```
