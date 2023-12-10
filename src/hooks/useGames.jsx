import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, doc, getDoc, query, where } from 'firebase/firestore';

export const useAllGames = () => {
    const [listaJuegos, setListaJuegos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const gamesCollection = collection(db, 'games');

        getDocs(gamesCollection).then((snapshot)=>{
            setListaJuegos(snapshot.docs.map(doc => ( {id: doc.id, ...doc.data() })))
        }).then(() => setLoading(false))
        .catch((error) => setError(error));

    }, []);

    return {listaJuegos, loading, error};
}

export const useSingleGame = (id) => {
    const [juego, setJuego] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const singleGame = doc(db, 'games', id);

        getDoc(singleGame).then((snapshot) => {
            setJuego({id: snapshot.id, ...snapshot.data()})
        }).then(() => setLoading(false))
        .catch((error) => setError(error));

      }, [id]);

    return {juego, loading, error};
}

export const useGamesByCategory = (categoryId) => {
    const [juegosFiltrados, setJuegosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const gameCollectionByCategory = query(
            collection(db, 'games'),
            where('genero', '==', categoryId)
        );

        getDocs(gameCollectionByCategory).then((snapshot)=>{
            setJuegosFiltrados(snapshot.docs.map(doc => ( {id: doc.id, ...doc.data() })))
        }).then(() => setLoading(false))
        .catch((error) => setError(error));

    }, [categoryId]);

    return {juegosFiltrados, loading, error};
}

export const useSearchGames = (busqueda) => {
    const [juegosBuscados, setjuegosBuscados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const gamesCollection = collection(db, 'games');

        getDocs(gamesCollection)
        .then((snapshot)=>{
            if(busqueda == 'todo'){
                setjuegosBuscados(snapshot.docs.map(doc => ( {id: doc.id, ...doc.data() })));
            }
            else{
                setjuegosBuscados(
                    snapshot.docs.map(doc => ( {id: doc.id, ...doc.data() })).filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()))
                );
            }
        })
        .then(() => setLoading(false))
        .catch((error) => setError(error));

    }, [busqueda]);

    return {juegosBuscados, loading, error};
}