import CartWidget from "./CartWidget";
import LogoRuns from "../images/RunsLogoWhite.png";
import { Link } from "react-router-dom";


function NavBar({ setValorNuevo }) {

  return (
    <div>
      <nav className="nav">
        <Link to="/" className="navbar-brand">
            <img src={LogoRuns}/>
            <h2>Games</h2>
        </Link>
        <ul className="nav__list">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/compras">Compras</Link>
          </li>
          <li className="active">
            <Link to="/category/pc">Juegos PC</Link>
          </li>
          <li className="active">
            <Link to="/contacto">Contáctanos</Link>
          </li>
        </ul>
        <CartWidget/>
      </nav>
    </div>
  );
}
export default NavBar;