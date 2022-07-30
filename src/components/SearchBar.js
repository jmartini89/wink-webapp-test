import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchList from './SearchList';

function SearchBar() {
  const [searchField, setSearchField] = useState("");
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsLimit, setItemsLimit] = useState(5);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!searchField.length) {
        setTotalItems(0);
      }
      else {
        console.log(searchField);
        axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=" + searchField
          + "&maxResults=" + itemsLimit)
        .then(response => {
          if (searchField.length) {
            setTotalItems(parseInt(response.data.totalItems));
            setItems(response.data.items);
          }
        })
        .catch((exception) => {
          console.log(exception);
          setTotalItems(0);
        })
      }
    }, 1250);
    return () => clearTimeout(timeoutId);
  }, [searchField, itemsLimit]);

  return (
    <div className='container'>
      <h1>BOOKS</h1>
      <form>
        <div className='form-group'>
          <input
            className='form-control'
            type='search'
            placeholder='Search for books'
            onInput={(e) => {setSearchField(e.target.value)}}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            />
        </div>
        <select
          className='custom-select'
          value={itemsLimit}
          onChange={(e) => {setItemsLimit(e.target.value)}}>
          {[5, 10, 15, 20].map(x => <option key={x} value={x}>{x}</option>)}
        </select>
      </form>
      {totalItems ? <SearchList data={items} /> : null}
      {console.log(totalItems)}
    </div>
  );
}

export default SearchBar;