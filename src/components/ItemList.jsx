/* eslint-disable react/prop-types */
export default function ItemList({ productos }) {
    return (
      <div className="item-list">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className="item">
              <h3>{producto.nombre}</h3>
              {/* Aquí puedes agregar más detalles de cada producto */}
              <p>Categoria: {producto.categoria}</p>
              {/* Agregar más info del producto y un botón para ir a detalle */}
            </div>
          ))
        ) : (
          <p>No se encontraron productos en esta categoría.</p>
        )}
      </div>
    );
  }
  