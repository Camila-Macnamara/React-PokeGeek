// ItemListContainer.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TituloComponente from "./TituloComponente";
import ItemList from "./ItemList";
import { productos } from "../../data/products"; // Aquí importamos la constante
import "./ItemListContainer.css";

// Definimos las categorías y sus imágenes representativas
const categorias = [
  { id: "cartas", nombre: "Cartas", imagen: "path/to/cartas-image.jpg" },
  { id: "figuras", nombre: "Figuras", imagen: "path/to/figuras-image.jpg" },
  { id: "ropa", nombre: "Ropa", imagen: "path/to/ropa-image.jpg" }
];

// eslint-disable-next-line react/prop-types
export default function ItemListContainer({ mensaje }) {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        const productosFiltrados = categoriaId
          ? productos.filter((item) => item.categoria === categoriaId)
          : productos;
        resolve(productosFiltrados);
      }, 1000);
    });

    obtenerProductos.then((res) => setItems(res));
  }, [categoriaId]);

  // Mostrar la vista de categorías en la ruta principal
  if (!categoriaId) {
    return (
      <section className="miTitulo">
        <TituloComponente texto={mensaje} />
        <h2>Explora nuestras categorías</h2>
        <div className="categorias">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="categoria-card">
              <Link to={`/categoria/${categoria.id}`}>
                <img src={categoria.imagen} alt={categoria.nombre} />
                <h3>{categoria.nombre}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Si hay una categoría seleccionada, mostramos los productos filtrados
  return (
    <section className="miTitulo">
      <TituloComponente texto={mensaje} />
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : "Todos los productos"}</h2>
      <ItemList productos={items} />
    </section>
  );
}
