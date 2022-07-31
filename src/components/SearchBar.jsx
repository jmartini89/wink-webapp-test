import { useState, useEffect } from 'react';

function SearchBar({setQuery, setCurrentPage}) {
  const [queryDebounce, setQueryDebounce] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(() => queryDebounce);
      setCurrentPage(() => 1);
    }, 500);
    return () => clearTimeout(timer);
  }, [queryDebounce, setQuery, setCurrentPage]);

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