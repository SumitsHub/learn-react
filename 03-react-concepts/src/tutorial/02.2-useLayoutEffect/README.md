## useLayoutEffect
useLayoutEffect is a version of useEffect that fires before the browser repaints the screen
- Pitfall: useLayoutEffect can hurt performance. Prefer useEffect when possible
- Syntax: useLayoutEffect(setup, dependencies?)
- Call useLayoutEffect to perform the layout measurements before the browser repaints the screen
```js
import { useState, useRef, useLayoutEffect } from 'react';

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);
```
- Caveate: Effects only run on the client. They don’t run during server rendering

### Working of the Tooltip
1. Tooltip renders with the initial tooltipHeight = 0 (so the tooltip may be wrongly positioned).
2. React places it in the DOM and runs the code in useLayoutEffect.
3. Your useLayoutEffect measures the height of the tooltip content and triggers an immediate re-render.
4. Tooltip renders again with the real tooltipHeight (so the tooltip is correctly positioned).
5. React updates it in the DOM, and the browser finally displays the tooltip.