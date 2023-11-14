import imagen from '../../assets/img/street_fighter_6.jpg';
import './ImageComponent.css';

export const ImageComponent = ({juego}) => {
  return (
    <div className='imgContainerStyle'>
        <img src={juego?.imagen} alt="" className='imgStyle'></img>
        <a href="/" className='aImgStyle'>
          <h2 className='h2Tittle'>{juego?.nombre}</h2>
          <p>${juego?.precio}</p>
        </a>
    </div>
  )
}