import { Form } from "react-bootstrap";

const FormResultsPerPage = ({index, setIndex, setPage, itemsPerPage, setItemsPerPage}) => {
  const handleClick = (newItemsPerPage) => {
    const newPage = Math.floor(index / newItemsPerPage) + 1;
    setIndex(newItemsPerPage * (newPage - 1));
    setItemsPerPage(newItemsPerPage);
    setPage(newPage);
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Control
          className="ResultsPerPage"
          as="select"
          value={itemsPerPage}
          onChange={(event) => handleClick(event.target.value)}
        >
            {[5, 10, 15, 20].map(x => <option key={x} value={x}>{x}</option>)}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default FormResultsPerPage;