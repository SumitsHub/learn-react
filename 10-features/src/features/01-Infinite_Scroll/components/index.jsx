import { useState } from 'react';
import useBookSearch from '../hooks/useBookSearch';

function InfiniteScroll() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useBookSearch(query, page);

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
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Loading...</div>
      <div>Error</div>
    </div>
  );
}
export default InfiniteScroll;
