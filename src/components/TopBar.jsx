import { Col, Container, Image, Row, Spinner } from 'react-bootstrap';

import FormSearchBar from './FormSearchBar';
import FormResultsPerPage from './FormResultsPerPage';

import logo from '../wink.png'

const TopBar = ({setQuery, index, setIndex, setPage, itemsPerPage, setItemsPerPage, fetchStatus}) => {
  return (
    <Container className="TopBar fixed-top" fluid>
      <Row>
        <Col xs={true}>
          <FormSearchBar
            setQuery={setQuery}
            setPage={setPage}
            setIndex={setIndex}
          />
        </Col>

        <Col xs={2}>
          {fetchStatus.loading
            ? <Spinner animation="border" variant="warning" />
            : <Image src={logo} height="35" />
          }
        </Col>

        <Col className="float-right" xs={"auto"}>
          <FormResultsPerPage
            index={index}
            setIndex={setIndex}
            setPage={setPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TopBar;