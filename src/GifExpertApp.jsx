import { useState } from "react"
import { AddCathegory,GifGrid } from "./components";


export const GifExpertApp = () => {

const [categories, setCategories] = useState(['']);


    const onAddCategory = (newCathegory) =>{
      if (categories.includes( newCathegory) )return;
        setCategories([newCathegory,...categories,])


        // console.log(newCathegory);
        // setCategories(cat =>[...cat, 'Valorant']) ;        
        //Importante el ... es spread, arrastras los datos del que menciones, y ocn la coma y el '' agregas uino nuevo
    }

  return (
    <>
    <div>GifExpertApp</div>


    <AddCathegory
    //  setCategories={setCategories}
        onNewCathegory = {onAddCategory}
     />



    {categories.map(category => (
          <GifGrid key={category} 
          category = {category}
          />
        ))
  }


    </>
  )
}
