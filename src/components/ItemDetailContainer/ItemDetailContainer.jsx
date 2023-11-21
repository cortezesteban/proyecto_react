import './ItemDetailContainer.css';

export const ItemDetailContainer = ({ juego }) => {

  return (
    <div>
      <div className='containerDetailStyle'>
        <img src={juego?.imagenGrande} className='imgBackStyle'></img>
        <div className='detailStyle'>
          <img src={juego?.imagenPequeña} className='imgFrontStyle'></img>
          <div className='infoJuegoStyle'>
            <h2 className='text-white '>{juego?.nombre}</h2>
            <h4 className='text-white '><span className='spanDetailStyle'>Empresa: </span>{juego?.empresa}</h4>
            <h4 className='text-white '><span className='spanDetailStyle'>Genero: </span>{juego?.genero}</h4>
            <h4 className='text-white '><span className='spanDetailStyle'>Precio: </span>${juego?.precio}</h4>
            <button type="submit" className='btnDetailStyle'>Agregar al Carrito</button>
          </div>
        </div>
      </div>
      <div className='containerDescription'>
        <div>
          <h3 className='h3Tittle'>Acerca del Juego</h3>
          <p className='text-white'>{juego?.descripcion}</p>
        </div>
      </div>
    </div>
  )
}