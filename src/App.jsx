import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ButtonComponent from './components/ButtonComponet/ButtonComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const App = () => {

  const [contador, setContador] = useState(0);

  const handleAgregar = () => {
    setContador(contador + 1);
  };

  const handleBorrar = () => {
    setContador(0);
  };

  return (
    <>
      <NavBarComponent contador={contador}/>
      <ItemListContainer greeting={'Lista de Video Juegos'}/>
      <div className='d-flex justify-content-center align-items-center'>
        <ButtonComponent accion={handleAgregar} estilo={'buttonStyle btn btn-primary'} nombre={'Agregar al Carrito'}/>
        <ButtonComponent accion={handleBorrar} estilo={'buttonStyle btn btn-secondary'} nombre={'Borrar al Carrito'}/>
      </div>
    </>
  )
}

export default App
