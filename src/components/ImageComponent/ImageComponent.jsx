import './ImageComponent.css';
import { Link } from 'react-router-dom';

export const ImageComponent = ({juego}) => {
  return (
    <div className='imgContainerStyle'>
        <img src={juego?.imagenGrande} alt="" className='imgStyle'></img>
        <Link to={`/item/${juego?.id}`} className='aImgStyle'>
          <h2 className='h2Tittle'>{juego?.nombre}</h2>
          <p>${juego?.precio}</p>
        </Link>
    </div>
  )
}