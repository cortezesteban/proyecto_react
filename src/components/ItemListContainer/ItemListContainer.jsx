import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({ listaJuegos }) => {

  const handleMouseOver = (e) => {
    e.preventDefault();
    e.target.play();
  }

  const handleMouseOut = (e) => {
    e.preventDefault();
    e.target.pause();
  }

  return (
    <div className="contenedorFlex">
      {
        listaJuegos.map((juego) => {
          return (
            <div key={juego.id} className="colContenedor">
              <img src={juego.imagen} className="primeraImagen" id={juego.nombre.replace(/\s+/g, '')} />
              <video src={juego.video} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} type="video/mp4" muted
                    id={juego.nombre.replace(/\s+/g, '')} className="video" loop>
              </video>
              <div className='nombrePrecioContenedor m-2'>
                <h2 className='h3Tittle'>{juego.nombre}</h2>
                <h3 className='h3Tittle'>${juego.precio}</h3>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};
