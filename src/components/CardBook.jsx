import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const CardBook = ({item, setShow, index, setItemIndex}) => {
  const book = item.volumeInfo;

  const handleClick = () => {
    setItemIndex(index);
    setShow(true);
  }

  return(
    <Container className="shadow p-3 mb-5 bg-white rounded">
      <Card border="light">
        <Card.Header as="h5">{book.title}</Card.Header>
        <Card.Body>
          <Card.Text className="CardDescription">{book.description}</Card.Text>
          <Button className="col" variant="outline-dark" onClick={() => handleClick()}>Details</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardBook;