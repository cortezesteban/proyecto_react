import { useState, useEffect } from "react";
import { obtenerJuegos } from "../services/apiJuegos";

export const useAllGames = () => {
    const [listaJuegos, setListaJuegos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        obtenerJuegos()
            .then((res) => {
                setTimeout(() => {
                    setListaJuegos(res.data);
                    setLoading(false);
                  }, 3000)
                })
            .catch((err) => setError(err));
    }, []);

    return {listaJuegos, loading, error};
}

export const useSingleGame = (id) => {
    const [juego, setJuego] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        obtenerJuegos()
            .then((res) => {
                setTimeout(() => {
                    setJuego(res.data.find(juego => juego.id == id));
                    setLoading(false);
                }, 3000);
            })
            .catch((err) => setError(err));
      }, [id]);

    return {juego, loading, error};
}

export const useGamesByCategory = (categoryId) => {
    const [juegosFiltrados, setJuegosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        obtenerJuegos()
            .then((res) => {
                setLoading(true);
                setTimeout(() => {
                    setJuegosFiltrados(res.data.filter((juego) => juego.genero == categoryId));
                    setLoading(false);
                }, 3000);
            })
            .catch((err) => setError(err));
    }, [categoryId]);

    return {juegosFiltrados, loading, error};
}