import { useParams } from 'react-router-dom'
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"
import { useSingleGame } from "../hooks/useGames"
import { LoaderComponent } from "../components/LoaderComponet/LoaderComponent"

export const Item = () => {

  const { id } = useParams();

  const { juego, loading, error } = useSingleGame(id);

  return (
    <div>
      {loading ? (
        <LoaderComponent/>
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemDetailContainer juego={juego} />
      )}
    </div>
  )
}
