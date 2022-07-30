import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
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
      {totalItems && query.length ? <SearchList data={items} /> : null}
    </div>
  );
}

export default App;
