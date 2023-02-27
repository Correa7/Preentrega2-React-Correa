import "./ItemCards.css";
import { Link } from "react-router-dom";

const Card = ({ src, alt, title, precio, id }) => {
  return (
    <div key={id} className="card">
      <div className="card-img">
        <img src={src} alt={alt} />
      </div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        The value of the illustrations is expressed in US dollars.
      </p>
      <div className="cardBody">
        <h6 className="precio">
          <strong>Precio: $ {precio}</strong>
        </h6>
        <button className="btn btn-secondary me-md-2">
          <Link className="Link" to={`/detail/${id}`}>
            {" "}
            View{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Card;
