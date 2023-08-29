import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

const EventExample = () => {
  function handleInput(e) {
    let {name, value} = e.target;
    console.log(name, value);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(e);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input type="text" name="example" onChange={handleInput} onPaste={()=>{console.log('called');}} />
        <button>Submit</button>
      </form>
    </section>
  );
};

function BookList() {
  function getBook(id) {
    return books.find((item)=> item.id === id);
  }
  return (
    <>
      <EventExample />
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} getBook={getBook} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
