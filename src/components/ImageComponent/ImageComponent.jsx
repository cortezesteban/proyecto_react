import './ImageComponent.css';
import { Link } from 'react-router-dom';

export const ImageComponent = ({juego}) => {
  return (
    <div className='imgContainerStyle'>
        <img src={juego?.imagenGrande} alt="" className='imgStyle'></img>
        <Link to={`/item/${juego?.id}`} className='aImgStyle'>
          <h1 className='h1Tittle h1Style'>{juego?.nombre}</h1>
          <h3 className='h3Tittle h1Style'>${juego?.precio}</h3>
        </Link>
    </div>
  )
}