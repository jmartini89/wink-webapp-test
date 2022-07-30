import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar({query, itemsLimit, setQuery, setItems, setTotalItems}) {
  const [queryDebounce, setQueryDebounce] = useState("");
  const dataFetch = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes?q="
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(queryDebounce);
    }, 250);
    return () => clearTimeout(timer);
  }, [queryDebounce, setQuery]);

  useEffect(() => {
    if (!query.length) {
      setTotalItems(0);
    }
    else {
      dataFetch.get(query + "&maxResults=" + itemsLimit)
      .then(response => {
        setTotalItems(parseInt(response.data.totalItems));
        setItems(response.data.items);
      })
      .catch((exception) => {
        console.log(exception);
        setTotalItems(0);
      })
    }
  }, [query, itemsLimit, setItems, setTotalItems]);

  return (
    <div className='container'>
      <h1>BOOKS</h1>
      <form>
        <div className='form-group'>
          <input
            className='form-control'
            type='search'
            placeholder='Search for books'
            onInput={(e) => {setQueryDebounce(e.target.value)}}
            onKeyPress={(e) => {e.key === 'Enter' && e.preventDefault()}}
            />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;