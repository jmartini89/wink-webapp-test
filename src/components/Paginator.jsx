import { Container, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'

const Paginator = ({setIndex, page, setPage, itemsPerPage}) => {
  const items = [];
  const maxIndexes = 5;
  const startIndex = ((page > Math.ceil(maxIndexes / 2)) ? (page - Math.ceil(maxIndexes / 2)) : 0);

  const handleClick = (moveToPage) => {
    setIndex(itemsPerPage * (moveToPage - 1));
    setPage(moveToPage);
  }

  const setButton = (number, moveToPage, label) => {
    return (
      <Pagination.Item
        key={number}
        active={label ? false : number === page}
        disabled={(number === 0 && page === 1)}
        activeLabel={false}
        onClick={() => handleClick(moveToPage)}
      >
        {label ? label : number}
      </Pagination.Item>
    );
  }

  items.push(setButton(startIndex, page - 1, "<"));
  for (let number = 1; number <= maxIndexes; number++) {
    items.push(setButton(startIndex + number, startIndex + number, ""));
  }
  items.push(setButton(startIndex + maxIndexes + 1, page + 1, ">"));

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