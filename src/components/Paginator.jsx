import { Container, Row } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'

const Paginator = ({setIndex, data, page, setPage, totalItems, itemsPerPage}) => {
  const maxIndexes = 5;
  const initIndex = (
    page > Math.ceil(maxIndexes / 2)
    ? page - Math.ceil(maxIndexes / 2)
    : 0
  );
  let items = [];

  if (!data || !totalItems) {
    return;
  }

  console.log(itemsPerPage, totalItems, (totalItems + itemsPerPage) > (page * itemsPerPage));

  const handleClick = (moveToPage) => {
    setIndex(itemsPerPage * (moveToPage - 1));
    setPage(moveToPage);
  }

  const setButton = (number, moveToPage, label) => {
    return (
      <Pagination.Item
        key={number}
        active={label ? false : number === page}
        disabled={
          !((totalItems + itemsPerPage) > (number * itemsPerPage))
          || (number === 0 && page === 1)
        }
        activeLabel={false}
        onClick={() => handleClick(moveToPage)}
      >
        {label ? label : number}
      </Pagination.Item>
    );
  }

  items.push(setButton(initIndex, page - 1, "<"));
  for (let number = 1; number <= maxIndexes; number++) {
    items.push(setButton(initIndex + number, initIndex + number, ""));
  }
  items.push(setButton(initIndex + maxIndexes + 1, page + 1, ">"));

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