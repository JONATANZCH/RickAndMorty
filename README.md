
# Rick & Morty API

Proyecto hecho con React con JS y una extensión de la sintaxis de JavaScript que se utiliza comúnmente en React para definir la estructura del árbol de elementos de la interfaz de usuario JSX. Se usa Axios para la solicitudes, sweetalert2 para los mensajes y CSS vanilla para los componentes y su ordenamiento.
## API Reference

#### Get all items

```http
  GET https://rickandmortyapi.com/api/location/${dimension}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET https://rickandmortyapi.com/api/location/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `20`      | `int` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Installation

Install this project with npm start

```bash
  npm install
  cd RickAndMorty
  npm start
```
    