import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { obtenerJuegos } from "../services/apiJuegos";
import { ImageComponent } from '../components/ImageComponent/ImageComponent';

export const Category = () => {

    const [juegosFiltrados, setJuegosFiltrados] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        obtenerJuegos()
            .then((res) => setJuegosFiltrados(res.data.filter((juego) => juego.genero == categoryId)))
            .catch((err) => console.log(err));
    }, [categoryId]);

    return (
        <ItemListContainer listaJuegos={juegosFiltrados} genero={categoryId} />
    )
}
