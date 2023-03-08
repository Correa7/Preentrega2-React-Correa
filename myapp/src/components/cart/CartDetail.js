import "./cart.css";
import Up from "../../img/arrow-up.png";
import Down from "../../img/arrow-down.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartDetail = ({prod}) => {
    const {addCart,deleteItem } = useContext(CartContext);
    const {unidades, stock, id} = prod

    const addItem = () => {
        let newItem = unidades + 1

        if(unidades >= stock) {
            addCart(prod,stock)
        }else{
            addCart(prod,newItem)
        }
    }
    const subtractItem = ()  => {
        let newItem = unidades - 1
        addCart(prod,newItem)
        if(unidades <= 1) {
            deleteItem(id) 
        }else{
            addCart(prod,newItem)
        }
    }
    const delItem = () => {
        deleteItem(id) 
    }

  return (
    <div className="cart-row">
                  <div style={{ flex: "1" }}>
                    <img className="row-image" src={prod.url} />
                  </div>
                  <div style={{ flex: "1" }}>
                    <p className="cart-p">{prod.nombre}</p>
                  </div>
                  <div style={{ flex: "1" }}>
                    <p className="cart-p">${prod.precio}</p>
                  </div>
                  <div style={{ flex: "2" }}>
                    <p className="quantity">{prod.unidades}</p>
                    <div className="quantity">
                        <img  onClick={addItem} className="chg-quantity update-cart " src={Up}/>
                     
                        <img onClick={subtractItem} className="chg-quantity update-cart " src={Down}/>
                    </div>
                  </div>
                  <div style={{ flex: "1" }}>
                    <p className="cart-p">${prod.subtotal}</p>
                  </div>
                  <div style={{ flex: "1" }}>
                    <p className="btn" onClick={delItem} >X</p>
                  </div>
                </div>
  )
}
