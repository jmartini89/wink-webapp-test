import { useState, useEffect } from 'react';
import axios from 'axios';

import TopBar from './components/TopBar';
import ResultsList from './components/ResultsList';
import Paginator from './components/Paginator';

import './App.css';

function App() {
  const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [fetchStatus, setFetchStatus] = useState({error: false, loading: false});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchStatus((state) => ({...state, loading: true}));
        const response = await axios.get(
          `${apiUrl}${query}&maxResults=${itemsPerPage}&startIndex=${index}`
        );
        setData(response.data);
        setFetchStatus(() => ({error: false, loading: false}));
        window.scrollTo(0, 0);
      }
      catch(err) {
        console.error(err);
        setFetchStatus(() => ({error: true, loading: false}));
        setData(() => []);
      }
    }

    if (!query.length) {
      setData(() => []);
      return;
    }

    fetchData();
  }, [query, itemsPerPage, page, index]);

  return (
    <div>
      <TopBar
        setQuery={setQuery}
        index={index}
        setIndex={setIndex}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        fetchStatus={fetchStatus}
      />
      <ResultsList
        data={data.items}
        queryLenght={query.length}
        totalItems={parseInt(data.totalItems)}
        fetchStatus={fetchStatus}
      />
      <Paginator
        setIndex={setIndex}
        data={data.items}
        page={page}
        setPage={setPage}
        totalItems={parseInt(data.totalItems)}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}

export default App;