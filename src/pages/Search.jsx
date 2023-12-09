import React from 'react'
import { useParams } from 'react-router-dom';
import { useSearchGames } from '../hooks/useGames';
import { LoaderComponent } from '../components/LoaderComponet/LoaderComponent';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';

export const Search = () => {

    const { busqueda } = useParams();

    const { juegosBuscados, loading, error } = useSearchGames(busqueda);

    return (
        <div>
            {loading ? (
                <LoaderComponent />
            ) : error ? (
                <div>Hubo un error</div>
            ) : (
                <ItemListContainer listaJuegos={juegosBuscados} />
            )}
        </div>
    )
}
