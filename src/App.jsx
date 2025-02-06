import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/Navbar';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const mensaje = "¡Bienvenidos a mi e-commerce!";

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Ruta para mostrar todos los productos */}
        <Route
          path="/"
          element={<ItemListContainer mensaje={mensaje} />}
        />

        {/* Ruta para filtrar productos por categoría */}
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListContainer />}
        />

        {/* Ruta para mostrar el detalle de un producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* Ruta 404 si no se encuentra la página */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
