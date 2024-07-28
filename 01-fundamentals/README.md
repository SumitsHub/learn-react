# React Fundamentals

#### Folder Structure

- node_modules
  Contains all dependencies required by the app. Main dependencies also listed in package.json

- public
  Contains static assets including index.html (page template)
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - our entire app
- src
  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.
- .gitignore
  Specifies which files source control (Git) should ignore

- package.json
  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

- package-lock.json
  A snapshot of the entire dependency tree

- README
  The markdown file where you can share more info about the project for example build instructions and summary

#### First Component

```js
function Greeting() {
  return <h2>My First Component</h2>;
}

// arrow function also works

const Greeting = () => {
  return <h2>My First Component</h2>;
};
```

#### React Component Rules
- starts with capital letter
- must return JSX (html)
- always close tag <Greeting/>

##### Typical Component

```js
// imports or logic goes here

const Greeting = () => {
  return <h2>My First Component</h2>;
};
export default Greeting;
```

##### Root Component (only one)

index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h2>My First Component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
```

#### First Component in Detail

- capital letter
- must return something
- JSX syntax (return html)
  - to make our lives easier
  - calling function under the hood

index.js

```js
const Greeting = () => {
  return React.createElement("h2", {}, "hello world");
};
```

```js
function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}

const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "hello world")
  );
};
```

#### JSX Rules

- return single element (one parent element)

  - HTML semantic elements -> section/article/nav/header/footer/main/aside -> specifies what the element contains
  - Fragment - let's us group elements without adding extra nodes

```js
return <React.Fragment>...rest of the return</React.Fragment>;

// shorthand -> Syntactic Sugar for React.Fragment

return <>...rest of the return</>;
```

- camelCase property naming convention for html attributes

```js
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

- className instead of class

```js
return <div className="someValue">hello</div>;
```

- close every element -> specially self closing one

```js
return <img />;
// or
return <input />;
```

- formatting
  - opening tag in the same line as return or use ()

```js
function Greeting() {
  return <>
    <div className="someValue">
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </div>
    <h2>hello world</h2>
    <input type="text" name="" id="" />
  </>;
}

// OR

function Greeting() {
  return (
    <>
      <div className="someValue">
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type="text" name="" id="" />
    </>
  );
}
```

#### Nest Components

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
```

#### Book List

- setup structure

```js
import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <h2>image placeholder</h2>;
const Title = () => {
  return <h2>Book Title</h2>;
};
const Author = () => <h4>Author</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

```js
import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
);
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};
const Author = () => <h4>Jordan Moore </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

#### CSS

- import file and add classes

```js
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
```

- complete css

```css
.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}
.book {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}
.book img {
  width: 100%;
  object-fit: cover;
}
.book h2 {
  margin-top: 1rem;
  font-size: 1rem;
}
```

#### Local Images (Public Folder)

- external images (hosted on different server) - just need an url
- local images (public folder) - less performant
- local images (src folder) - better solution for assets, since under the hood they get optimized.

- whatever assets we place in public - instantly available
- domain(localhost)/asset

#### JSX - CSS (inline styles)

- style prop
- {} in JSX means going back to JS Land
- value is an object with key/value pairs - capitalized and with '' (quotes)

```js
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    Jordan Moore
  </h4>
);
```

- css rules still apply (inline vs external css)

```css
.book h4 {
  /* won't work */
  color: red;
  /* will work */
  letter-spacing: 2px;
}
```

- external libraries use inline css, so if you want to make some changes, reference the library docs and Elements tab from devtools

- alternative option for inline style -> creating separate object for style

```js
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
```

- {} in JSX means going back to JS Land
- value inside must be an expression (return value), can't be a statement

```js
const author = "Jordan Moore";
const Book = () => {
  const title = "Interesting Facts For Curious Mindssssss";
  return (
    <article className="book">
      <img
        src="./images/book-1.jpg"
        alt="Interesting Facts For Curious Minds"
      />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
      {/* <p>{let x = 6}</p> */} - it's a statement, it must be expression i.e. there should be some return value
      <p>{6 + 6}</p>
    </article>
  );
};
```

```js
// parameters - at the time of definition
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};

// arguments - passed at the time of function call
// to verify this use 'arguments' keyword provided by JS inside an function
someFunc("job", "developer");
```

```js
const Book = props => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {console.log(props)}
    </article>
  );
};
```

- props object, convention to call props, 'shakeAndBake' is an excellent alternative

- pass as key/value pairs
- if the prop exists it will return value, otherwise no value

```js
function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}
const Book = props => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};
```

```js
function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book title={title} img={img} />
    </section>
  );
}
const Book = props => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};
```

#### Access Props - Multiple Approaches

- no need for all the props.propName
- destructure inside component

```js
const Book = props => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

- destructure in function parameters (in our case props)
- if you have console.log(props) - it won't be defined

```js
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

#### Children Prop

- everything we render between component tags
- during the course we will mostly use it Context API
- special prop, has to be "children"
- can place anywhere in JSX

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // rest of the logic
};
const Book = props => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};
```

#### Simple List

- refactor

```js
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

function BookList() {
  return <section className="booklist"></section>;
}

const Book = props => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

- can't render objects in React

```js
function BookList() {
  return <section className="booklist">{books}</section>;
}
```

#### Proper List

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        return (
          <div>
            <h2>{book.title}</h2>
          </div>
        );
      })}
    </section>
  );
}
```

- render component
- pass properties one by one

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}
```

#### Key Prop

- typically it's going to be id

```js
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book book={book} key={id} />;
      })}
    </section>
  );
}
```

- IMP: you will see index, but it's not advised if the list is changing

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book book={book} key={index} />;
      })}
    </section>
  );
}
```

#### Pass The Entire Object

- render component
- pass entire object


```js
function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        console.log(book);
        const { img, title, author } = book;
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = props => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

- alternative

```js
const Book = ({ book: { img, title, author } }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

#### My Personal Preference

- utilize spread operator (...) - copy values

```js
const friends = ["john", "peter", "anna"];
const newFriends = [...friends, "susan"];
console.log(friends);
console.log(newFriends);
const someObject = {
  name: "john",
  job: "developer",
};
// COPY NOT A REFERENCE !!!!
const newObject = { ...someObject, location: "florida" };
console.log(someObject);
console.log(newObject);
```

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = props => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
const Book = ({ img, title, author }) => {
  // rest of the code
};
```

#### Events - Fundamentals

- Vanilla JS

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  // access event object
  // do something when event fires
});
```

- similar approach
- element, event, function
- again camelCase

```js
const EventExamples = () => {
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

- [React Events](https://reactjs.org/docs/events.html)
- most common
  - onClick (click events)
  - onSubmit (submit form )
  - onChange (input change )

```js
function BookList() {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map(book => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

#### Event Object and Form Submission

```js
const EventExamples = () => {
  const handleFormInput = e => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = e => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

- alternative approach

```js
<button type="submit" onClick={handleFormSubmission}>
  submit form
</button>
```

#### Mind Grenade

- alternative approach
- pass anonymous function (in this case arrow function)
- one liner - less code
- also can access event object

```js
const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={e => console.log(e.target.value)} // here
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={() => console.log("you clicked me")}>click me</button>
    </section>
  );
};
```

#### Mind Grenade #2

- remove EventsExamples
- components are independent by default

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = props => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author} </h4>
    </article>
  );
};
```

- remove button

#### Prop Drilling

- react data flow - can only pass props down
- alternatives- Context API, redux, other state libraries

```js
function BookList() {
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
}

const Book = props => {
  const { img, title, author, displayValue } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author} </h4>
    </article>
  );
};
```

#### More Complex Example

- initial setup
- create getBook function in booklist
- accepts id as an argument and finds the book
- pass the function down to Book Component and invoke on the button click
- in the Book Component destructure id and function
- invoke the function when user clicks the button, pass the id
- the goal : you should see the same book in the console

```js
const BookList = () => {
  const getBook = id => {
    const book = books.find(book => book.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map(book => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = props => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* this is not going to work */}
      <button onClick={getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```

- two fixes for above code
- first option - setup wrapper

```js
const Book = props => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```

- second option - wrap in the anonymous arrow function

```js
const Book = props => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={() => getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```

#### Import and Export Statements

- remove all getBook code

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = props => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
    </article>
  );
};
```

- setup two files in src books.js and Book.js
- cut books array from index.js
- add to books.js

books.js

```js
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];
```

- two flavors named and default exports

  - with named exports names MUST match
  - with default exports, can rename but only one per file

- named export

```js
export const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];
```

index.js

```js
import { books } from "./books";
```

- default export

```js
const Book = props => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
    </article>
  );
};

export default Book;
```

index.js

```js
import Book from "./Book";
```

#### Local Images (src folder)

- better performance because optimized
- add one more book to array
- download all three images (rename)
- setup images folder in the src
- import all three images in the books.js
- set image property equal to import
- and yes each image requires new import

```js
import img1 from "./images/book-1.jpg";
import img2 from "./images/book-2.jpg";
import img3 from "./images/book-3.jpg";

export const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: img1,
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: img2,
    id: 2,
  },
  {
    author: "Stephen King",
    title: "Fairy Tale",
    img: img3,
    id: 3,
  },
];
```

#### Challenges

- setup numbers
- don't worry about css
- hint - index (second parameter in map)

index.js

```js
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};

const Book = props => {
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
```

#### Add Title

- add a title to our app (css optional)
- change page title

index.js

```js
function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map(book => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}
```

public/index.html

```html
<title>Best Sellers</title>
```

#### Build Production Application

- stop the dev server "ctrl + c"
- run "npm run build"
- build folder gets created

#### Netlify

- sign up
- add new site/deploy manually
- choose build folder
- rename site - site settings/change site name

