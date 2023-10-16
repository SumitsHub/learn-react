import { useState, useEffect } from 'react';

const useFetch = url => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        // change to response
        const response = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      } finally {
        // hide loading
        setIsLoading(false);
      }
    };
    // invoke fetch data
    fetchData();
  }, [url]);

  return { isLoading, isError, data };
};

export default useFetch;
