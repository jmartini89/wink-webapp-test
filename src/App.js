import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchLimit from './components/SearchLimit';
import SearchList from './components/SearchList';

function App() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsLimit, setItemsLimit] = useState(5);

  return (
    <div className='container'>
      <SearchBar
        query={query}
        itemsLimit={itemsLimit}
        setQuery={setQuery}
        setItems={setItems}
        setTotalItems={setTotalItems}
      />
      <SearchLimit
        itemsLimit={itemsLimit}
        setItemsLimit={setItemsLimit}
      />
      {query.length && totalItems ? <SearchList data={items} /> : null}
    </div>
  );
}

export default App;