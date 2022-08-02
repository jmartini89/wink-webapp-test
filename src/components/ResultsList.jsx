import { useState } from 'react';
import { Container } from 'react-bootstrap';

import CardBook from './CardBook';
import DetailsModal from "./DetailsModal";

const ResultsList = ({data, fetchStatus}) => {
  const [show, setShow] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  if (fetchStatus.error) {
    return <h4>Something went wrong!</h4>;
  }

  return (
    <>
      {data.map((book, index) => {
        return (
          <Container key={index}>
              <CardBook item={book} index={index} setShow={setShow} setItemIndex={setItemIndex} />
          </Container>
        )
      })}

      {show ? <DetailsModal bookData={data[itemIndex]} setShow={setShow} /> : null }
    </>
  );
}

export default ResultsList;