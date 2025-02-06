import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link de React Router

export default function CartWidget() {
  const [carrito, setCarrito] = useState([]);

  // Actualiza la cantidad del carrito cuando el carrito cambia
  useEffect(() => {
    // Aquí podrías obtener el carrito desde el contexto o el localStorage
    // Para este ejemplo, actualizamos el carrito como un array vacío
    setCarrito([
      { id: 1, nombre: "Camiseta Pikachu", cantidad: 2 },
      { id: 2, nombre: "Mochila Pokeball", cantidad: 1 },
    ]);
  }, []); // Se ejecuta una vez al montar el componente

  // Calcula la cantidad total de productos en el carrito
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="cart-widget">
      <Link to="/carrito">
        <button className="cart-button">
          <i className="fa fa-shopping-cart"></i>
          {cantidadTotal > 0 && (
            <span className="cart-count">{cantidadTotal}</span>
          )}
        </button>
      </Link>
    </div>
  );
}
