import { Form } from "react-bootstrap";

const ResultsPerPage = ({itemsPerPage, setItemsPerPage}) => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Control
          className="ResultsPerPage"
          as="select"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(e.target.value)}
        >
            {[5, 10, 15, 20].map(x => <option key={x} value={x}>{x}</option>)}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default ResultsPerPage;