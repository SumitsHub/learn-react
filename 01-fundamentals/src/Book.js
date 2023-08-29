const Book = (props) => {
  const { img, title, author, getBook, id } = props;

  // getBook(id);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>

      <button onClick={()=>{console.log(getBook(id));}}>Click</button>
    </article>
  );
};

export default Book;
