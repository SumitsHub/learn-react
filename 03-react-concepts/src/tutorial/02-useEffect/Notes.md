## useEffect hook

#### Code Example

- the problem starts when we update the state

```js
const [value, setValue] = useState(0);

const sayHello = () => {
  console.log('hello there');
  // be careful, you will have infinite loop
  setValue(value + 1);
};
sayHello();
```

- initial render - setup state value and invoke sayHello
- in the sayHello update state, trigger re-render

- re-render - setup state value and invoke sayHello
- in the sayHello update state, trigger re-render

- repeat
- repeat
- repeat
  ..................................................


#### useEffect Basics

useEffect is a hook in React that allows you to perform side effects in function components. There is no need for urban dictionary - basically any work outside of the component. Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

- useEffect hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [] runs only on initial render

```js
import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  // useEffect(() => {
  //   console.log('hello from useEffect');
  // });

  useEffect(() => {
    console.log('hello from useEffect');
  }, []);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
```

#### Multiple Effects

```js
import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('hello from first useEffect');
  }, [value]);

  useEffect(() => {
    console.log('hello from second useEffect');
  }, [secondValue]);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
```

#### Fetch Data

```js
import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // you can also setup function outside
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
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
```

#### Cleanup Function

- Setup Challenge :

- create state value
- in jsx return button which toggles state value
- based on condition return second component (simple return)
- inside second component create useEffect and run it only on initial render

```js
import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    console.log('hmm, this is interesting');
  }, []);
  return <h1>hello there</h1>;
};
export default CleanupFunction;
```

Vanilla JS

```js
const intID = setInterval(() => {
  console.log('hello from interval');
}, 1000);
clearInterval(intID);
```

```js
const someFunc = () => {
  // some logic here
};
window.addEventListener('scroll', someFunc);
window.removeEventListener('scroll', someFunc);
```

```js
import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID);
  }, []);
  return <h1>hello there</h1>;
};
export default CleanupFunction;
```

```js
useEffect(() => {
  // console.log('hmm, this is interesting');
  const someFunc = () => {
    // some logic here
  };
  window.addEventListener('scroll', someFunc);
  return () => window.removeEventListener('scroll', someFunc);
}, []);
```

#### You Might Not Need an Effect

[You Might Not Need an Effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect)

- will still utilize useEffect
- there is still plenty of code using useEffect

- fetching data
  replaced by libraries - react query, rtk query, swr or next.js

```js
import { useHook } from 'library';

function Example() {
  const { data, error, isLoading } = useHook('url', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```