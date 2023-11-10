import imagen from '../../assets/img/street_fighter_6.jpg';
import './ImageComponent.css';
export const ImageComponent = () => {
  return (
    <div className='imgContainerStyle'>
        <img src={imagen} alt="" className='imgStyle'></img>
        <a href="/" className='aImgStyle'>
        <h2 className='h2Tittle'>Street Fighter</h2>
        <p>4000$</p>
        </a>
    </div>
  )
}
