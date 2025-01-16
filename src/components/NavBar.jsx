import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";
import logo from '../assets/logo.png'
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="Logo de la tienda"/>
      <span className="nombre-tienda">Poke Geek</span>
      </div>
      <div className="navbar-button">
      <ButtonComponent className="navbar-button" texto="Inicio" />
      <ButtonComponent className="navbar-button" texto="Cartas" />
      <ButtonComponent className="navbar-button" texto="Figuras" />
      </div>
      <CartWidget/>
    </nav>
  );
}
