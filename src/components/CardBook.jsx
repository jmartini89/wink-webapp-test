import { Card, Container } from 'react-bootstrap';

const CardBook = ({item, setShow, index, setItemIndex}) => {
  const book = item.volumeInfo;

  const handleClick = () => {
    setItemIndex(index);
    setShow(true);
  }

  return(
    <Container
      className="shadow p-3 mb-5 bg-white rounded"
      variant="outline-dark"
      style={{ cursor: "pointer" }}
      onClick={() => handleClick()}
    >
      <Card border="light">
        <Card.Header as="h5">{book.title}</Card.Header>
        <Card.Body>
          <Card.Text className="CardDescription">{book.description ? book.description : "No description provided"}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardBook;