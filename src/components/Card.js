function Card({id, title, description, link, thumbnail}) {
  return(
    <div className="card flex-row flex-wrap" key={id}>
      <div className="card-header border-0">
          <img
            src={thumbnail}
            alt={title}
          />
      </div>
        <div className="card-block px-2">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a 
              href={link}
              className="btn btn-primary">infoLink
            </a>
        </div>
        <div className="w-100"></div>
    </div>
  );
}

export default Card;