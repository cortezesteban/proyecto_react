import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ButtonComponent from './components/ButtonComponet/ButtonComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import imagen from './assets/img/street_fighter_6.jpg';


const App = () => {

  return (
    <>
      <NavBarComponent contador={0}/>
      <img src={imagen} alt="" className='imgStyle'/>
      <a href="/" className='aImgStyle'>
        <h2 className='h2Tittle'>Street Fighter</h2>
        <p>4000$</p>
      </a>
      <ItemListContainer greeting={'Lista de Video Juegos'}/>
    </>
  )
}

export default App
