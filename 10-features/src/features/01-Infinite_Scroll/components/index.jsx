import { useCallback, useRef, useState } from 'react';
import useBookSearch from '../hooks/useBookSearch';

function InfiniteScroll() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { loading, error, books, hasMore } = useBookSearch(query, page);

  // ref to hold reference of IntersectionObserver across re-renders
  const observer = useRef();

  // using callback get reference to the last node and observe depending on loading and hasMore
  const lastBookElementRef = useCallback(
    node => {
      console.log(node);
      // when loading node will be null
      if (loading) return;
      // if previous observer exists -> disconnect
      if (observer.current) observer.current.disconnect();
      // create new IntersectionObserver -> it receives entries of nodes being observed
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          console.log('visible');
          setPage(prev => prev + 1);
        }
      });
      // if node is available -> start observing the node (last book element)
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

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
      {error && <div>Error</div>}
      {books.map((book, index) => {
        if (books.length === index + 1)
          return (
            <div ref={lastBookElementRef} key={index}>
              {book}
            </div>
          );
        return <div key={index}>{book}</div>;
      })}
      {loading && <div>Loading...</div>}
    </div>
  );
}
export default InfiniteScroll;
