import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import { ImageComponent } from '../components/ImageComponent/ImageComponent';
import { useEffect, useState } from 'react';
import { obtenerJuegos } from '../services/apiJuegos';

export const Home = () => {

    const [listaJuegos, setListaJuegos] = useState([]);

    useEffect(() => {
        obtenerJuegos()
            .then((res) => setListaJuegos(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <ImageComponent juego={listaJuegos[Math.floor(Math.random() * listaJuegos.length)]}/>
            <ItemListContainer listaJuegos={listaJuegos}/>
        </div>
    )
}

