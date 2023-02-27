import "./ItemListContainer.css";
import CardsList from "../../components/itemCards/CardsList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoria } = useParams();

  return (
    <>
      <div className="contenedor">
        <CardsList categoria={categoria} />
      </div>
    </> 
  );
};
export default ItemListContainer;
