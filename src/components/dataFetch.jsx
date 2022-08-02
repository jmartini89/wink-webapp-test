import axios from 'axios';

const dataFetch = async (query, index, itemsPerPage, setData, setFetchStatus) => {
  const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  try {
    setFetchStatus((state) => ({...state, loading: true}));
    const response = await axios.get(
      `${apiUrl}${query}&maxResults=${itemsPerPage}&startIndex=${index}`
    );
    setFetchStatus(() => ({error: false, loading: false}));
    setData(response.data);
    window.scrollTo(0, 0);
  }

  catch(err) {
    console.error(err);
    setFetchStatus(() => ({error: true, loading: false}));
    setData(() => []);
  }
}

export default dataFetch;