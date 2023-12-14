import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const useAllCategory = () => {
    const [listaCategoria, setListaCategoria] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const categoryCollection = collection(db, 'category');

        getDocs(categoryCollection).then((snapshot)=>{
            setListaCategoria(snapshot.docs.map(doc => ( {id: doc.id, ...doc.data() })))
        }).catch((error) => setError(error));

    }, []);

    return {listaCategoria, error};
}