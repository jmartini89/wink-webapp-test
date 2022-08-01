import Navbar from 'react-bootstrap/Navbar'

import SearchBar from './SearchBar';
import ResultsPerPage from './ResultsPerPage';

const TopBar = ({setQuery, setCurrentPage, itemsPerPage, setItemsPerPage}) => {
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Navbar.Brand>Wink WebApp Test</Navbar.Brand>
      <SearchBar setQuery={setQuery} setCurrentPage={setCurrentPage}/>
      <ResultsPerPage itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
    </Navbar>
  )
}

export default TopBar;