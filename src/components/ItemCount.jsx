/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ItemCount({ stock, onAdd }) {
  const [cantidad, setCantidad] = useState(1); // Inicializamos la cantidad en 1

  // Función para incrementar la cantidad
  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  // Función para decrementar la cantidad
  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAdd(cantidad)} disabled={cantidad === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}
