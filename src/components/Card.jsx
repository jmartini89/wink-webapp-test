import Button from 'react-bootstrap/Button'

const Card = ({item, setShow, index, setItemIndex}) => {
  const handleClick = () => {
    setItemIndex(index);
    setShow(true);
  }

  return(
    <div className="card flex-row flex-wrap" key={item.id}>

      <div className="card-header border-0">
          <img
            src={
              item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
              ? item.volumeInfo.imageLinks.thumbnail : null
            }
            alt={item.volumeInfo.title}
          />
      </div>

      <div className="card-block px-2">
          <h5 className="card-title">{item.volumeInfo.title}</h5>
          <p className="card-text">{item.volumeInfo.description}</p>
          <Button variant="primary" onClick={() => handleClick()}>
            Details
          </Button>
      </div>
      <div className="w-100"></div>

    </div>
  );
}

export default Card;