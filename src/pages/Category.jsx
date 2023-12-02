import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { useParams } from 'react-router-dom';
import { useGamesByCategory } from "../hooks/useGames";

export const Category = () => {

    const { categoryId } = useParams();

    const { juegosFiltrados, loading, error } = useGamesByCategory(categoryId);

    return (
        <div>
            {loading ? (
                <h1 className="text-white display-6 d-flex justify-content-center align-items-center">va snipet de carga</h1>
            ) : error ? (
                <div>Hubo un error</div>
            ) : (
                <ItemListContainer listaJuegos={juegosFiltrados} genero={juegosFiltrados[0]?.genero} />
            )}
        </div>
    )
}
