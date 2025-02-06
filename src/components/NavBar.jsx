import { Link } from "react-router-dom"; // Importa Link de React Router
import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";
import logo from '../assets/logo.png'
import "./NavBar.css";

// Definir el array de categorías
const categorias = ['cartas', 'figuras', 'ropa'];

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo de la tienda" />
        <span className="nombre-tienda">Poke Geek</span>
      </div>
      <div className="navbar-button">
        {/* Enlace para "Inicio" */}
        <Link to="/" className="navbar-button">
          <ButtonComponent texto="Inicio" />
        </Link>
        
        {/* Iteramos sobre el array de categorías para generar los enlaces */}
        {categorias.map((categoria) => (
          <Link to={`/categoria/${categoria}`} className="navbar-button" key={categoria}>
            <ButtonComponent texto={categoria.charAt(0).toUpperCase() + categoria.slice(1)} />
          </Link>
        ))}
        
      </div>
      <CartWidget />
    </nav>
  );
}
