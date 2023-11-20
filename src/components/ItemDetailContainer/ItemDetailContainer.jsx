import './ItemDetailContainer.css';

export const ItemDetailContainer = ({ juego }) => {

  console.log(juego)

  return (
   <p className='h2Tittle'>{juego.nombre}</p>
  )
}
