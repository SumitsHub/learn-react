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
- React uses "Object.is" to compare props
- Use optional prop 'arePropsEqual' which is callback function accepting 2 args, previous props and new props and returns boolean result of comparison i.e. true or false

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

### More Examples of useCallback hook

- We create function inside useEffect -> to avoid dependency array warning that react will give,
- BUT -> if we create function outside and to avoid warning we also add the same function in dependency array then it's going to be infinite loop
- because -> functions get created from scratch everytime component rerenders
- So, we do following way -

```js
function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
}
```

- if we change to below -

```js
function App() {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]); // this is going to be an infinite loop -> since fetchData is a normal function and will be created from scratch every time componnet rerenders
}
```

- Here is FIX -> using useCallback hook

```js
import { useCallback } from "react";

function App() {
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // this won't call infinite rerenders -> as it's memoised function
}
```

## useMemo hook

- The useMemo hook is a hook in React that allows you to memoize a value. It takes two arguments: the first is a function that returns the value you want to memoize, and the second is an array of dependencies. The hook will return the memoized value that will only change if one of the values in the dependency array changes.

- By memoizing a value, you can avoid unnecessary calculations and improve the performance of your React application. The value will only be recalculated if one of its dependencies changes, otherwise the same instance of the value will be returned. This can be useful in situations where you have an expensive calculation that you only want to recompute when its dependencies change.

Here is an example of how you might use useMemo:

```js
import React, { useMemo } from "react";

function MyComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => item.toUpperCase());
  }, [data]);

  return (
    <div>
      {processedData.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
```

- In the above example, the processedData value is memoized using useMemo and the data prop is passed as a dependency. This means that the processedData value will only be recalculated if the data prop changes.
