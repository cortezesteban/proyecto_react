
# Project Title INFINITEGAME

Proyecto que simula una app de venta de video juegos, muestra una lista que se obtiene de Firebase.
- Permite listar por genero de video juego (Rol, Estrategia, Disparos, etc)
- Permite buscar un juego por nombre
- Muestra el detalle de un juego
- Permite agrega a un carrito


## Firebase

#### Nombre de Colleccion - games

Colleccion con los juegos disponibles para la venta

Documento

|   Name         | Type     | Description                |
| :--------      | :------- | :------------------------- |
|  nombre        | `string` |     nombre del juego       |
|  empresa       | `string` | empresa creadora del juego |
|  genero        | `string` |      tipo de genero        |
|  precio        | `number` |      precio por unidad     |
|  stock         | `number` |      copias disponibles    |
|  imagenPequeña | `string` |  url a un recurso visual   |
|  imagenGrande  | `string` |  url a un recurso visual   |
|  video         | `string` |  url a un recurso visual   |


#### Nombre de Colleccion - category

Colleccion con los distintos genero de juegos

Documento

|   Name         | Type     | Description                |
| :--------      | :------- | :------------------------- |
|  category      | `string` |     tipo de categoria      |


## Authors

Esteban Cortez


## Installation

npm install
npm run dev
    