import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import { ImageComponent } from '../components/ImageComponent/ImageComponent';
import { useAllGames } from "../hooks/useGames";
import { LoaderComponent } from "../components/LoaderComponet/LoaderComponent";

export const Home = () => {

    const { listaJuegos, loading, error } = useAllGames();

    return (
        <div>
            {loading ? (
                <LoaderComponent/>
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

