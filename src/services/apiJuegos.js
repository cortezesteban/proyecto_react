import axios from 'axios';

export const obtenerJuegos = () => {
    return axios.get('/JuegosData.json');
}
