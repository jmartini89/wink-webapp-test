import { useState, useEffect } from 'react';

function SearchBar({query, setQuery, setTotalItems, fetchData}) {
  const [queryDebounce, setQueryDebounce] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(queryDebounce);
    }, 250);
    return () => clearTimeout(timer);
  }, [queryDebounce, setQuery]);

  useEffect(() => {
    if (!query.length) {
      setTotalItems(0);
      return;
    }
    fetchData();
  }, [query, setTotalItems, fetchData]);

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