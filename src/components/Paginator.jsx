import { Col, Container, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'

const Paginator = ({currentPage, setCurrentPage, totalItems, itemsPerPage}) => {
  const maxPages =  Math.ceil(totalItems / itemsPerPage);
  const maxIndexes = 3;
  let items = [];

  if (!totalItems) {
    return;
  }

  const setButton = (number, moveToPage, label) => {
    return (
      <Pagination.Item
        key={number}
        active={label ? false : number === currentPage}
        activeLabel={false}
        onClick={
          number === 0 && currentPage === 1
          ? null
          : () => setCurrentPage(moveToPage)
        }
      >
        {label ? label : number}
      </Pagination.Item>
    );
  }

  items.push(setButton(0, currentPage - 1, "<"));
  for (let number = 1; number <= maxIndexes; number++) {
    items.push(setButton(number, number, ""));
  }
  items.push(setButton(maxIndexes + 1, currentPage + 1, ">"));

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