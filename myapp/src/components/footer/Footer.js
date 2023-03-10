import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      &copy; Copyright 2023
      <div className="redes">
        <a className="vinculo-c" href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="vinculo-c" href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="vinculo-c" href="#">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};
export default Footer;
