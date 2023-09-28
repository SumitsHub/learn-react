## Slow down CPU using Performance Insight

- Go to Performance insights tab under the devtools
- Open the dropdown (No throtlling) by default
- 2 throtlling options there ->
- 1. Network - this options is also available in the Network tab
- 2. CPU - click on this one and select 4x or 6x slowdown

## useTransition

- useTransition is a React Hook that lets you update the state without blocking the UI
- useTransition hook return [boolean value, function to start the transition]
- Example -

```js
const [isPending, startTransition] = useTransition();

const handleChange = e => {

  ...

  startTransition(() => {
    const newItems = Array.from({ length: 5000 }, (_, index) => {
      return (
        <div key={index}>
          <img src="/vite.svg" alt="" />
        </div>
      );
    });
    setItems(newItems);
  });
};
```

## Suspense API and React.lazy

- The Suspense API is a feature in React that allows you to manage the loading state of your components. It provides a way to "suspend" rendering of a component until some data has been fetched, and display a fallback UI in the meantime.
- This makes it easier to handle asynchronous data loading and provide a smooth user experience in your React application.

Here is an example of how you might use the Suspense API:

```js
import React, { lazy, Suspense } from "react";

const DataComponent = lazy(() => import("./DataComponent"));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataComponent />
    </Suspense>
  );
}
```
