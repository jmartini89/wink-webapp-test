import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Image, Row } from 'react-bootstrap';

const DetailsModal = ({bookData, setShow}) => {
  const info = bookData.volumeInfo;
  const img = (info.imageLinks && info.imageLinks.thumbnail ? info.imageLinks.thumbnail : null);

  if (!bookData) {
    return;
  }

  const checkExistance = (data) => {
    return data ? data : "Not provided";
  }

  return (
    <>
      <Modal show="true" onHide={() => setShow(false)}>

        <Modal.Header closeButton>
          <Modal.Title>{info.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className="justify-content-center">
            <Image src={img} rounded variant="center" />
          </Row>
          <br />
          Authors: {info.authors ? info.authors.map((author) => {return (author + ", ")}) : "Not provided"}
          <br />
          Publisher: {checkExistance(info.publisher)}
          <br />
          Published Date: {checkExistance(info.publishedDate)}
          <br />
          <br />
          Description:
          <br />
          {checkExistance(info.description)}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" href={info.infoLink} target="_blank">
            infoLink
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default DetailsModal;