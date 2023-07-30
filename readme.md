# REACT DESDE 0
## Antes de empezar
### ¿Qué es React?
React es una librería de JavaScript para construir interfaces de usuario. Es mantenido por Facebook y la comunidad de software libre.

- React resuelve el problema de ataques  $xxs$, estos ataques se producen cuando se inyecta código, cuando estas ejecutando código del usuario
- Elimina el código imperativo, el código imperativo es decirle como lo tiene que hacer, es dar una serie de instrucciones para hacer alguna acción, por esta razon React es declarativo, es decir, le dices que quieres hacer y el se encarga de hacerlo.

### ¿Por qué React?
- React es declarativo
- Basado en componentes
- Aprender una vez, escribir donde sea
- JavaScript
- React es una librería, no un framework

### ¿Qué es un componente?
Un componente es una pieza de código que es reutilizable, que se puede utilizar en varias partes de la aplicacion. Cuando creamos elementos en react nosotros podemos tener los siguientes campos

```jsx
const button = React.createElement('button', null, 'Me gusta')`
```

Donde los parámetros van de la siguiente manera

1. El elemento a crear
2. Un objeto con las propiedades de ese elemento
3. El texto que va dentro del elemento

### ¿Qué es JSX?
JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

Es muchos mas comodo utilizar JSX porque es mucho mas legible y expresivo, es decir, es mucho mas facil de leer y de entender incluso de mantener.

* Ejemplo de codigo React.createElement

``` jsx
const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)

const button = React.createElement('button', {"data-id":123}, 'Me gusta')
const button1 = React.createElement('button', {"data-id":456}, 'Me gusta')
const button2 = React.createElement('button', {"data-id":789}, 'Me gusta')

const app = React.createElement(React.Fragment,null,[button,button1,button2])

root.render(app)
```
* Ejemplo de codigo JSX

``` jsx
const appDomElement = document.getElementById('app')
```

## Instalación

Cuando vamos a utilizar React una de las mejores opciones es usar un transpilador o empaquetador de JavaScript, algunos ejemplos puede ser Babel, Create react app o Vite, en este caso vamos a utilizar Vite.

### swc

SWC es un transpilador de JavaScript escrito en Rust, es muy rapido y tiene una gran compatibilidad con TypeScript, es muy facil de configurar y es muy facil de utilizar.

### Estrucutra de carpetas
Al inicializar un proyecto con Vite nos crea una estructura de carpetas como la siguiente

```jsx
- node_modules
- public
- src
    - assets
    - components
    - pages
    - styles
    - index.html
- .gitignore
- index.html
- package.json
- README.md
```

1. En el index.html que esta en la raiz del proyecto vamos a tener el siguiente codigo

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

Esto nos carga la raiz de nuestro proyecto en el div con id root, y el script que carga el archivo main.jsx que es donde vamos a escribir nuestro codigo.

2. En el main.jsx vamos a tener el siguiente codigo

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render('Hola mundo')
```
- Primero que todo importamos React y ReactDOM
- Luego importamos el componente App que es donde vamos a escribir nuestro codigo
- Por ultimo renderizamos el componente App en el div con id root

## Componentes
### Creando nuestro primer componente
Un componenete es una funcion que lo que hace es crear un elemento de React, para crear un componente lo que tenemos que hacer es lo siguiente

```jsx
const Componente = () => {
    return React.createElement('h1',null,'Hola mundo')
}
```

Los componentes deben ser pascal case, es decir, la primera letra de cada palabra debe ir en mayuscula. Esto debido a que React utiliza el camel case para diferenciar entre componentes y elementos HTML.

### Componentes con JSX
Para crear un componente con JSX lo que tenemos que hacer es lo siguiente

```jsx
const Componente = () => {
    return <h1>Hola mundo</h1>
}
```

Como ya sabemos los componenetes son funciones que crean elementos de React, por lo tanto podemos pasarle propiedades a los componentes, para hacer esto, lo que tenemos que hacer es lo siguiente

```jsx
const Componente = (props) => {
    return <h1>{props.text}</h1>
}
```

donde props puede ser un objeto o un string, en este caso es un objeto, por lo tanto podemos acceder a las propiedades de este objeto de la siguiente manera

```jsx
const Componente = (props) => {
    return <h1>{props.text}</h1>
}
```

Ahora para renderiar este componenete lo que debemos hacer es lo siguiente

```jsx
const App = () => {
    return <Componente text="Hola mundo"/>
}
```

Fijenese que el componenete es escrito como si fuera un elemento HTML, pero en este caso es un componente de React y esto lo sabemos porque la primera letra inicia en mayuscula.

Una buena preactica en React es trabajar con componenetes por separado, es decir, tener un componente por cada archivo

### Como utilizar un componente

Cuando consturuimos componenetes lo que realmente estamos haciendo es ejecutar una funcion que nos retorna un elemento de React, por lo tanto nosotros debemos pasarle los parametros a nuestra funcion o tambien conocidos como props, para hacer esto lo que tenemos que hacer es lo siguiente

```jsx
const Componente = (props) => {
    return <h1>{props.text}</h1>
}
```
Todo lo que se pase como una prop sera utilizado en el componenete por ejemplo se pueden pasar listas, objetos, strings, numeros, e inculso funciones.

```jsx
//Creamos la funcion
const format = (username) => `@${username}`;

//Creamos el componente
function Componente ({formatearCadena}){
    return <h1>{format(`Hola Mundo`)}</h1>
}

//Le decimos al componente que la prop formatearCadena es la funcion format
return(
    <Componente formatearCadena={format}>
)
```
### Diferencia entre elemento y componente
Un componenete es una fabrica de elementos es una funcion que al ejecutarla te devuelve un elemento, el componenete es la fabrica y el elemnto es lo que renderizamos en el DOM.

### Nota :
- Las props deberian ser inmutables es decir, no deberian cambiar, pero si cambian el componente se va a volver a renderizar.

- Los componentes deben ser puros, es decir, no deben tener efectos secundarios, no deben modificar el estado de la aplicacion, no deben modificar el DOM, no deben hacer llamadas a una API, no deben modificar el estado de un componente padre, no deben modificar el estado de un componente hijo, no deben modificar el estado de un componente hermano, no deben modificar el estado de un componente abuelo, no deben modificar el estado de un componente nieto, no deben modificar el estado de un componente tataranieto, no deben modificar el estado de un componente bisabuelo, no deben modificar el estado de un componente

### Prop children
La prop children es una prop especial que nos permite pasarle elementos hijos a un componente, por ejemplo

```jsx
return(
    <Componente>
        Hola mundo
    </Componente>
)

const Componente = ({children}) => {
    return <h1>{children}</h1>
}
```

La prop children extrae el contenido que esta envuelto dentro del componenete, asi como una etiqueta HTML envuelve pontenido por ejemplo : 

```h
<button>
    Hola mundo
</button>
```

El hola mundo es el children del boton, asi mismo ocurre con los componentes, el children es el contenido que esta dentro del componente, y podemos acceder a ese contenido mediante la prop children.

### Estado de un componente
