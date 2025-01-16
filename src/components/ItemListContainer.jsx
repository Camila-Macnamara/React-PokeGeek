/* eslint-disable react/prop-types */
import TituloComponente from "./TituloComponente";

export default function ItemListContainer({ mensaje }) {
  return (
    <section className="miTitulo">
      <TituloComponente texto={mensaje} />
      <p>Aquí irá la lista de productos</p>
    </section>
  );
}

