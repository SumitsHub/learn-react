### Leverage Javascript

[Javascript Nuggets -Optional Chaining](https://www.youtube.com/watch?v=PuEGrylM1x8&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=12&t=254s)

Setup Challenge

- take a look at the people in array in data.js
- create List.jsx component
- in List.jsx import and iterate over people (data)
- for now just render name
- once you have list setup separate Person.jsx component
  - try glean extension
- in Person render
  - name, nickName, image

Yes, there will be a bug.

```js
import { people } from '../../../data';

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <div>{person.name}</div>;
      })}
    </div>
  );
};
export default List;
```

List.jsx

```js
import { people } from '../../../data';
import Person from './Person';
const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
};
export default List;
```

Person.jsx

```js
import React from 'react';
import avatar from '../../../assets/default-avatar.svg';

export function Person({ name, nickName = 'shakeAndBake', images }) {
  // before optional chaining

  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar;
  // Combining with the nullish coalescing operator ??
  // const img = images?.[0]?.small?.url ?? avatar;
  // ?? vs || - please utilize the search engine

  const img = images?.[0]?.small?.url || avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
```

#### Default Values - Vanilla JS

In JavaScript, when defining a function, you can specify default values for its parameters. This means that if a caller of the function does not provide a value for a particular parameter, the default value will be used instead. Default parameters are defined by assigning a value to the parameter in the function definition.

For example, consider the following function, which takes two parameters, x and y, and returns their sum:

```js
function add(x, y) {
  return x + y;
}
```

If we call this function with only one argument, it will return NaN because y is undefined.

We can set default values for x,y as:

```js
function add(x = 0, y = 0) {
  return x + y;
}
```

Now, if we call add(3), the function will return 3, because the default value of 0 is used for the y parameter.

#### Optional Chaining - Vanilla JS

n JavaScript, the optional chaining operator (?.) is a new feature that allows you to access properties of an object without worrying about whether the object or the property is null or undefined. It's a shorthand for a common pattern of checking for null or undefined before accessing an object's property.

For example, consider the following code, which accesses the firstName property of an object:

```js
const person = { name: { first: 'John', last: 'Doe' } };
console.log(person.name.first);
```

If the name property is null or undefined, this code will throw an error. To prevent this, we can use the optional chaining operator:

```js
console.log(person?.name?.first);
```

Now, if the person.name is null or undefined, this code will simply return undefined instead of throwing an error. This make the code more robust and readable.
