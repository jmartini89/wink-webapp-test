import { useState, useEffect } from 'react';
import { Form, FormControl } from 'react-bootstrap';

const FormSearchBar = ({setQuery, setCurrentPage}) => {
  const [queryDebounce, setQueryDebounce] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(() => queryDebounce);
      setCurrentPage(() => 1);
    }, 500);
    return () => clearTimeout(timer);
  }, [queryDebounce, setQuery, setCurrentPage]);

  return (
    <Form>
      <FormControl
        type='search'
        placeholder="Search for books"
        className="SearchBar"
        onInput={(e) => {setQueryDebounce(e.target.value)}}
        onKeyPress={(e) => {e.key === 'Enter' && e.preventDefault()}}
      />
    </Form>
  );
}

export default FormSearchBar;