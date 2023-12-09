import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { useParams } from 'react-router-dom';
import { useGamesByCategory } from "../hooks/useGames";
import { LoaderComponent } from "../components/LoaderComponet/LoaderComponent";

export const Category = () => {

    const { categoryId } = useParams();

    const { juegosFiltrados, loading, error } = useGamesByCategory(categoryId);

    return (
        <div>
            {loading ? (
                <LoaderComponent/>
            ) : error ? (
                <div>Hubo un error</div>
            ) : (
                <ItemListContainer listaJuegos={juegosFiltrados} genero={juegosFiltrados[0]?.genero} />
            )}
        </div>
    )
}
