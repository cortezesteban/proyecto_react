import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import { ImageComponent } from '../components/ImageComponent/ImageComponent';
import { useAllGames } from "../hooks/useGames";

export const Home = () => {

    const { listaJuegos, loading, error } = useAllGames();

    return (
        <div>
            {loading ? (
                <h1 className="text-white display-6 d-flex justify-content-center align-items-center">va snipet de carga</h1>
            ) : error ? (
                <div>Hubo un error</div>
            ) : (
                <div>
                    <ImageComponent juego={listaJuegos[Math.floor(Math.random() * listaJuegos.length)]} />
                    <ItemListContainer listaJuegos={listaJuegos} />
                </div>  
            )}
        </div>
    )
}

