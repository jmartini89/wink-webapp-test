import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Image } from 'react-bootstrap';

const DetailsModal = ({bookData, setShow}) => {
  const info = bookData.volumeInfo;
  const img = (bookData && info.imageLinks && info.imageLinks.thumbnail ? info.imageLinks.thumbnail : null);

  return (
    <>
      <Modal show="true" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{info.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={img} rounded variant="center" />
          {info.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            infoLink
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DetailsModal;