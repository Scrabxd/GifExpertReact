import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs( category );
    

    // // si ponemos solamente el arreglo vacio estamos diciendole que solo renderice los objetos"" la primera vez que se construyen

    
//Recuarda que si hacemos el map estamos haciendo el arreglo, y con la funcion de flecha le decimos que itere dentro de los elementos del map y que los cree con un LI con el key asignado y 
//con el texto que le asignamos con funcion de js. El images esta definido arriba por lo tanto  al ser un useState, lo podemos cambiar y con el then del set images estamos haciendolo cambiar una sola
//vez, es decir, usamos el images que esta recibiendo new images del get gifs que definimos en useEffect, de ahi lo carga por categoria, y el then ase que el set images sea a la funcion que ya definimos en el
//use state, basicamente, jalas el getGifs cone l useEffect haciendo que se renderice una vez por siempre, y cuando lo jalaste le dices que le asigne lo que jalaste al setImage que le damos el nombre 
//newImages, y lo usamos abajo.
  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
         
        }

        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem 
                    key={image.id}
                    //Con el spread aca, estamos agarrando todas las propiedades de la clase imagen definidos en getGifs.js
                    {...image}

                    /> 
                ))
            }
        </div>

    </>
    )
}
