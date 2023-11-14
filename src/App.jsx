import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ImageComponent } from './components/ImageComponent/ImageComponent';
import { useEffect, useState } from 'react';
import { obtenerJuegos } from './services/apiJuegos';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {

  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(()=>{
    obtenerJuegos()
      .then((res) => setListaJuegos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBarComponent contador={0}/>
      <ImageComponent juego={listaJuegos[Math.floor(Math.random() * listaJuegos.length)]}/>
      <ItemListContainer listaJuegos={listaJuegos}/>
    </>
  )
}

export default App
