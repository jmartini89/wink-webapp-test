import { useState, useEffect } from 'react';
import axios from 'axios';

import TopBar from './components/TopBar';
import ResultsList from './components/ResultsList';
import Paginator from './components/Paginator';

import './App.css';

function App() {
  const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchStatus, setFetchStatus] = useState({error: false, loading: false});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchStatus((state) => ({...state, loading: true}));
        const response = await axios.get(
          `${apiUrl}${query}&maxResults=${itemsPerPage}&startIndex=${index}`
        );

        console.log(`${apiUrl}${query}&maxResults=${itemsPerPage}&startIndex=${index}`);

        setTotalItems(() => Math.ceil(response.data.totalItems / currentPage));
        setItems(() => response.data.items);
        setFetchStatus(() => ({error: false, loading: false}));
        window.scrollTo(0, 0);
      }
      catch(err) {
        console.error(err);
        setFetchStatus(() => ({error: true, loading: false}));
        setTotalItems(() => 0);
      }
    }
    
    if (!query.length) {
      setTotalItems(() => 0);
      return;
    }
    
    fetchData();
  }, [query, itemsPerPage, currentPage, index]);

  return (
    <div>
      <Paginator
        setIndex={setIndex}
        data={items}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
      <TopBar
        setQuery={setQuery}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        fetchStatus={fetchStatus}
      />

      <ResultsList
        data={items}
        queryLenght={query.length}
        totalItems={totalItems}
        fetchStatus={fetchStatus}
      />


    </div>
  );
}

export default App;