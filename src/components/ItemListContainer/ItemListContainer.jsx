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
      <p className='h4Tittle fw-bold'>
        {genero == null ? 'Lista de Juegos' : `Genero ${genero}`}
      </p>
      <div className="contenedorFlex">
        {
          listaJuegos.map((juego) => {
            return (
              <div key={juego.id} className="colContenedor">
                <Link to={`/item/${juego.id}`}>
                  <img src={juego.imagen} className="primeraImagen" id={juego.nombre.replace(/\s+/g, '')} />
                  <video src={juego.video} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} type="video/mp4" muted
                    id={juego.nombre.replace(/\s+/g, '')} className="video" loop>
                  </video>
                </Link>
                <div className='nombrePrecioContenedor m-2'>
                  <h2 className='h3Tittle'>{juego.nombre}</h2>
                  <h3 className='h3Tittle'>${juego.precio}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};
