import './App.css';
import { useCallback, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import SearchLimit from './components/SearchLimit';
import SearchList from './components/SearchList';
// import Paginator from './components/Paginator';

const client = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?q="
});

function App() {
  // const [index, setIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsLimit, setItemsLimit] = useState(5);

  const fetchData = useCallback(() => {
    client.get(query + "&maxResults=" + itemsLimit)
    .then(response => {
      setTotalItems(parseInt(response.data.totalItems));
      setItems(response.data.items);
    })
    .catch((exception) => {
      console.log(exception);
      setTotalItems(0);
    })
  }, [itemsLimit, query])

  return (
    <div className='container'>

      <SearchBar
        query={query}
        setQuery={setQuery}
        setTotalItems={setTotalItems}
        fetchData={fetchData}
      />

      <SearchLimit
        itemsLimit={itemsLimit}
        setItemsLimit={setItemsLimit}
      />

      {query.length && totalItems ? <SearchList data={items} /> : null}

      {/* <Paginator
        totalItems={totalItems}
        itemsLimit={itemsLimit}
      /> */}

    </div>
  );
}

export default App;