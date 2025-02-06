import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TituloComponente from "./TituloComponente";
import "./ItemDetailContainer.css"; // Asegúrate de tener este archivo de estilos

// Simulación de productos (puedes reemplazarlo por datos reales si los tienes)
const productos = [
  { id: 1, nombre: "Camiseta Pikachu", categoria: "ropa", descripcion: "Camiseta de Pikachu", precio: "$20" },
  { id: 2, nombre: "Mochila Pokeball", categoria: "accesorios", descripcion: "Mochila en forma de Pokeball", precio: "$25" },
  { id: 3, nombre: "Nintendo Switch Pikachu", categoria: "electronica", descripcion: "Nintendo Switch edición Pikachu", precio: "$299" },
  { id: 4, nombre: "Figura Charmander", categoria: "figuras", descripcion: "Figura coleccionable de Charmander", precio: "$15" },
  { id: 5, nombre: "Carta Pokémon", categoria: "cartas", descripcion: "Carta rara de Pokémon", precio: "$5" },
];

export default function ItemDetailContainer() {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Simula la obtención de detalles del producto con un retardo
    const obtenerProducto = new Promise((resolve) => {
      setTimeout(() => {
        const productoEncontrado = productos.find((item) => item.id === parseInt(id));
        resolve(productoEncontrado);
      }, 1000);
    });

    obtenerProducto.then((res) => setProducto(res)); // Actualiza el estado con los detalles del producto
  }, [id]); // Vuelve a ejecutarse cuando el ID del producto cambia

  if (!producto) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <section className="detalleProducto">
      <TituloComponente texto={producto.nombre} />
      <p>{producto.descripcion}</p>
      <h3>{producto.precio}</h3>
      {/* Aquí puedes agregar el componente de contar unidades para el carrito */}
    </section>
  );
}
