import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"
import { useSingleGame } from "../hooks/useGames"

export const Item = () => {

  const { id } = useParams();

  const { juego, loading, error } = useSingleGame(id);

  return (
    <div>
      {loading ? (
        <h1 className="text-white display-6 d-flex justify-content-center align-items-center">va snipet de carga</h1>
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemDetailContainer juego={juego} />
      )}
    </div>
  )
}
