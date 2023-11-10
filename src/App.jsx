import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ImageComponent } from './components/ImageComponent/ImageComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {

  return (
    <>
      <NavBarComponent contador={0}/>
      <ImageComponent/>
      <ItemListContainer greeting={'Lista de Video Juegos'}/>
    </>
  )
}

export default App
