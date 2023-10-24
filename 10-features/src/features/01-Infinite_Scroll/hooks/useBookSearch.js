import { useEffect } from 'react';
import axios from 'axios';
export default function useBookSearch(query, pageNumber) {
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
    }).then(res => {
      console.log(res.data);
    });
  }, [query, pageNumber]);
  return null;
}
