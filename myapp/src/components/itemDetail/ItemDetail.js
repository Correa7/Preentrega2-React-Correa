import "./ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({nombre,src,stock,precio,id}) => { 
  return (
          <div key={id} className="card-detail">
            <div className="card-img">
              <img src={src} alt={nombre} />
              <p>
                Lorem ipsum lkakkn slfkb nlknrh goarhg oaihgo aifnokfnaow ifbno
                wibno
              </p>
            </div>
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">
              The value of the illustrations is expressed in US dollars.
            </p>
            <div className="cardBody">
              <h6 className="precio">
                <strong>Precio: $ {precio}</strong>
              </h6>
              <div>
                <ItemCount stock={stock} />
              </div>
            </div>
          </div>
  );
};

export default ItemDetail;

