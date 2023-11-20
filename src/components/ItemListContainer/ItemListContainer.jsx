import React from 'react'
import './ItemListContainer.css'
import { Link } from 'react-router-dom'

export const ItemListContainer = ({ listaJuegos, genero }) => {

  const handleMouseOver = (e) => {
    e.preventDefault();
    e.target.play();
  }

  const handleMouseOut = (e) => {
    e.preventDefault();
    e.target.pause();
  }

  return (
    <div>
      <h3 className='h3Tittle fw-bold titleListItem'>
        {genero == null ? 'Lista de Juegos' : `${genero}`}
      </h3>
      <div className="contenedorFlex">
        {
          listaJuegos.map((juego) => {
            return (
              <div key={juego.id} className="colContenedor">
                <Link to={`/item/${juego.id}`}>
                  <img src={juego.imagenPequeña} className="primeraImagen" id={juego.nombre.replace(/\s+/g, '')} />
                  <video src={juego.video} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} type="video/mp4" muted
                    id={juego.nombre.replace(/\s+/g, '')} className="video" loop>
                  </video>
                </Link>
                <div className='nombrePrecioContenedor m-2'>
                  <p>{juego.nombre}</p>
                  <h3 className='h4Style'>${juego.precio}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};
