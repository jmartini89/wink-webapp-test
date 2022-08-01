import { Container, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'

const Paginator = ({setIndex, data, currentPage, setCurrentPage, totalItems, itemsPerPage}) => {
  const maxIndexes = 5;
  const initIndex = (
    currentPage > Math.ceil(maxIndexes / 2)
    ? currentPage - Math.ceil(maxIndexes / 2)
    : 0
  );
  let items = [];

  if (!data || !totalItems) {
    return;
  }

  // console.log(itemsPerPage, totalItems, (totalItems + itemsPerPage) > (currentPage * itemsPerPage));

  const handleClick = (moveToPage) => {
    const test = itemsPerPage * (moveToPage - 1);
    console.log(test);
    setIndex(test);
    setCurrentPage(moveToPage);
  }

  const setButton = (number, moveToPage, label) => {
    return (
      <Pagination.Item
        key={number}
        active={label ? false : number === currentPage}
        disabled={
          !((totalItems + itemsPerPage) > (number * itemsPerPage))
          || (number === 0 && currentPage === 1)
        }
        activeLabel={false}
        onClick={() => handleClick(moveToPage)}
      >
        {label ? label : number}
      </Pagination.Item>
    );
  }

  items.push(setButton(initIndex, currentPage - 1, "<"));
  for (let number = 1; number <= maxIndexes; number++) {
    items.push(setButton(initIndex + number, initIndex + number, ""));
  }
  items.push(setButton(initIndex + maxIndexes + 1, currentPage + 1, ">"));

  return (
    <Container>
      <Row className="justify-content-center">
        <Pagination>{items}</Pagination>
      </Row>
      <br />
    </Container>
  );
  
}

export default Paginator;