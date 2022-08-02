import { useState, useEffect } from 'react';

import TopBar from './components/TopBar';
import ResultsList from './components/ResultsList';
import Paginator from './components/Paginator';

import fetchData from './components/fetchData';

import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState({error: false, loading: false});

  useEffect(() => {
    if (!query.length) {
      setData(() => []);
      return;
    }
    fetchData(query, index, itemsPerPage, setData, setFetchStatus);
  }, [query, index, itemsPerPage]);

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
      {query.length && data.items ?
        <>
          <ResultsList
            data={data.items}
            fetchStatus={fetchStatus}
          />
          <Paginator
            setIndex={setIndex}
            page={page}
            setPage={setPage}
            itemsPerPage={itemsPerPage}
          />
        </>
        : null
      }
    </div>
  );
}

export default App;