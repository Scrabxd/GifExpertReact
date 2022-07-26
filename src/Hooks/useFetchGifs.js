//Un hook es una funcion que regresa algo. en este caso estamos regresando, un arreglo con las imagenes y que el loading es falso.

import { useState,useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);    
    const [isLoading, setIsLoading] = useState(true);    


    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
        
    }

    useEffect( () =>{
        getImages() 
    },[] )
    return{
        images,
        isLoading
    }
}
//esta solo el return sin nada, porque son del mismo nombre, es decir estamos llamando de propiedades algo con el mismo nombre.