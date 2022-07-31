import { Link } from "react-router-dom";

function Card({item}) {
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
            <Link
              to={"details"}
              state={item.id}
            >
              Details
            </Link>
        </div>
        <div className="w-100"></div>
    </div>
  );
}

export default Card;