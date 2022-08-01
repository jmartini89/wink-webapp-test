import { Container, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'

const Paginator = ({currentPage, setCurrentPage, totalItems}) => {
  const maxIndexes = 5;
  const initIndex = (
    currentPage > Math.ceil(maxIndexes / 2)
    ? currentPage - Math.ceil(maxIndexes / 2)
    : 0
  );
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