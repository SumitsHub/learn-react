import { books } from "./books";
import Book from "./Book";

export default function BookList() {
  function getBook(id) {
    return books.find(item => item.id === id);
  }
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map(book => {
          return <Book {...book} key={book.id} getBook={getBook} />;
        })}
      </section>
    </>
  );
}
