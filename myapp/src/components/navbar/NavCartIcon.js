import "./navbar.css";

const NavCartIcon = ({ items }) => {
  return (
    <div className="form-inline my-2 my-lg-0">
      <div className="cartContainer">
        <a className="nav-link" aria-current="page" href="#">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
        <div className="cart-items">{items}</div>
      </div>
    </div>
  );
};

export default NavCartIcon;
