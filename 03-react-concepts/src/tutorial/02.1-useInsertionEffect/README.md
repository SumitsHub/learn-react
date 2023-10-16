### useInsertionEffect
- useInsertionEffect allows inserting elements into the DOM before any layout effects fire
- Syntax: useInsertionEffect(setup, dependencies?)
- Call useInsertionEffect to insert styles before any effects fire that may need to read layout:
```js
import { useInsertionEffect } from 'react';

// Inside your CSS-in-JS library
function useCSS(rule) {
  useInsertionEffect(() => {
    // ... inject <style> tags here ...
  });
  return rule;
}
```
- useInsertionEffect is for CSS-in-JS library authors
- Otherwise use useEffect or useLayoutEffect