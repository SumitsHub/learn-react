import { useState } from 'react';
import useBookSearch from '../hooks/useBookSearch';

function InfiniteScroll() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { loading, error, books, hasMore } = useBookSearch(query, page);

  const handleChange = e => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <div>
      <input
        type="search"
        id="search"
        placeholder="Search for book"
        value={query}
        onChange={handleChange}
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {books.map((book, index) => {
        return <div key={index}>{book}</div>;
      })}
    </div>
  );
}
export default InfiniteScroll;
