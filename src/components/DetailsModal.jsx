import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const DetailsModal = ({bookData, setShow}) => {
  const info = bookData.volumeInfo;
  return (
    <>
      <Modal show="true" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{info.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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