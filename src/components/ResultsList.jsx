import { useState } from 'react';

import Card from './Card';
import DetailsModal from "./DetailsModal";

import logo from '../logo.svg'

const ResultsList = ({data, queryLenght, totalItems, fetchStatus}) => {
  const [show, setShow] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  if (fetchStatus.error) {
    return <h4>Something went wrong!</h4>;
  }
  else if (fetchStatus.loading) {
    return <img src={logo} className="App-logo" alt="logo" />;
  }
  else if (!queryLenght || !totalItems || !data) {
    return null;
  }

  return (
    <>
      {data.map((book, index) => {
        return (
          <div key={index}>
            <Card item={book} index={index} setShow={setShow} setItemIndex={setItemIndex} />
          </div>
        )
      })}

      {show ? <DetailsModal bookData={data[itemIndex]} setShow={setShow} /> : null }
    </>
  );
}

export default ResultsList;