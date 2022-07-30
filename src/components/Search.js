import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchList from './SearchList';

function Search() {
  const [searchField, setSearchField] = useState("");
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!searchField.length) {
      setTotalItems(0);
      return;
    }
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchField)
    .then(response => {
      setTotalItems(parseInt(response.data.totalItems));
      setItems(response.data.items);
    })
    .catch((exception) => {
      console.log(exception);
    })
  }, [searchField]);

  return (
    <div className='container'>
      <h1>BOOKS</h1>
      <form>
        <div className='form-group'>
          <input
            onInput={(e) => {setSearchField(e.target.value)}}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            className='form-control'
            type='text'
            placeholder='Search for books'
            />
        </div>
      </form>
      {totalItems ? <SearchList data={items} /> : null }
    </div>
  );
}

export default Search;