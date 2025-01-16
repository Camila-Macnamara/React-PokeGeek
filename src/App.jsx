
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const mensaje = "¡Bienvenidos a mi e-commerce!";

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={mensaje} />
    </>
  );
};

export default App;
