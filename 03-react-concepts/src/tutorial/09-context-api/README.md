# Context -

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

## createContext()

- call createContext outside of any components to create a context

```js
import { createContext } from "react";

const SomeContext = createContext("default");
// default value passed to createContext will be used when there is no matching context provider in the tree above the component that reads the context
// default value means "last resort" fallback, it is static and never changes, specify null if no meaningful value
```

- createContext returns context object (e.g. SomeContext) consisting two components
- 1. Provider - SomeContext.Provider - lets you provide the context value to components.
- 2. Consumer - SomeContext.Consumer - is an alternative and rarely used way to read the context value.
- useContext() hook replaces Context.Consumer

## Context.Provider

```js
function App() {
  const [theme, setTheme] = useState("light");
  // ...
  return (
    <SomeContext.Provider value={theme}>
      <Page />
    </SomeContext.Provider>
  );
}
```

## Context.Consumer - before useContext() hook

- this requires callback which has access to context value as paramexter

```js
function Button() {
  //  Legacy way (not recommended)
  return (
    <ThemeContext.Consumer>
      {theme => <button className={theme} />}
    </ThemeContext.Consumer>
  );
}
```

- this legacy approach will lead to callback hell when there will be multiple contexts and to access each context value you will need to use separate callback

## useContext hook

```js
function Button() {
  // ✅ Recommended way
  const theme = useContext(ThemeContext);
  return <button className={theme} />;
}
```
