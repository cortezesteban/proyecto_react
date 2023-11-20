import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"
import { obtenerJuegos } from "../services/apiJuegos"

export const Item = () => {

  const [juego, setJuego] = useState({});

  const { id } = useParams();

  useEffect(() => {
    obtenerJuegos()
        .then((res) => setJuego(res.data.find(juego => juego.id == id)))
        .catch((err) => console.log(err));
  }, [id])
  
  return (
   <ItemDetailContainer juego={juego}/>
  )
}
