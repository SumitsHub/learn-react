## Handling forms

#### About HTML form submitting

- form can be submitted using button click (onClick handler) or using onSubmit handler to form which gets invoked on hitting enter on the form elements
- You can use button type='submit' to be more specific inside form, without type also it works
- if using onClick and onSubmit both event listeners -> both get triggered, onClick get triggered first (in all cases) - Event Propogation -> Bubble Phase
- if there are multiple buttons inside form -> only first button acts as submit button even if you add type=submit to other button
- Example code -

```jsx
<form className="form" onSubmit={handleSubmit}>
  <h4>controlled inputs</h4>
  <div className="form-row">
    <label htmlFor="name" className="form-label">
      name
    </label>
    <input
      type="text"
      className="form-input"
      value={name}
      onChange={e => setName(e.target.value)}
      id="name"
    />
  </div>
  <div className="form-row">
    <label htmlFor="email" className="form-label">
      Email
    </label>
    <input
      type="email"
      className="form-input"
      id="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
  </div>
  <button
    className="btn btn-block"
    onClick={() => {
      console.log('submit btn');
    }}
  >
    submit
  </button>
  <button
    type="submit"
    className="btn btn-block"
    onClick={() => {
      console.log('normal btn');
    }}
  >
    submit
  </button>
</form>
```

#### FormData API

[JS Nuggets - FormData API](https://youtu.be/5-x4OUM-SP8)

- a great solution when you have bunch of inputs
- inputs must have name attribute

The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch() or XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

```js
import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // const name = formData.get('name');
    // console.log(name);
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    // do something (post request, add to list, etc)
    console.log(newUser);
    // Gotcha - re-render won't clear out the values
    setValue(value + 1);
    // reset values
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
```

- e.currentTarget

In React, e.currentTarget returns the DOM element that triggered the event.

- Object From Entries

The Object.fromEntries() static method transforms a list of key-value pairs into an object.

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

- reset()

The reset() method is a built-in method in HTML that can be used to reset all form controls to their initial values. When this method is called on a form element, it will clear any user-entered data and reset the values of all form elements to their default values.
