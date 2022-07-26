import { useState } from "react";


export const AddCathegory = ({onNewCathegory}) => {
  
    const [inputvalue, setInputvalue] = useState('');

    const onInputChange = ({target}) => {
        setInputvalue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if( inputvalue.trim().length <= 1 )return;

        // setCategories((categories) => [inputvalue, ...categories]);
        onNewCathegory(inputvalue.trim());
        setInputvalue('');
        
    }
    
    
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar GIFs"
                value={inputvalue}
                onChange={ onInputChange}
                />
        </form>
    )
}
