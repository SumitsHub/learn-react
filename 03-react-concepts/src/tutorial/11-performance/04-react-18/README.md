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
