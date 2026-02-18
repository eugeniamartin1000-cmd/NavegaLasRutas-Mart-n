import './App.css';
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer.jsx';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Error from './components/Error.jsx';

function App() { 
  console.log('App');
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='Todos los productos'/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer mensaje='Productos /'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
