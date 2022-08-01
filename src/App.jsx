import { useState, useEffect } from 'react';
import axios from 'axios';

import TopBar from './components/TopBar';
import ResultsList from './components/ResultsList';
import Pagination from './components/Pagination';

import './App.css';

function App() {
  const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchStatus, setFetchStatus] = useState({error: false, loading: false});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchStatus((state) => ({...state, loading: true}));
        const response = await axios.get(`${apiUrl}${query}&maxResults=${itemsPerPage}&startIndex=${(itemsPerPage * (currentPage - 1))}`);
        setTotalItems(() => parseInt(response.data.totalItems));
        setItems(() => response.data.items);
        setFetchStatus(() => ({error: false, loading: false}));
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
  }, [query, itemsPerPage, currentPage]);

  return (
    <div>
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

      {/* <Pagination
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      /> */}
    </div>
  );
}

export default App;