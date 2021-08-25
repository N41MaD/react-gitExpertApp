import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import {GifGrid } from './Components/GifGrid'

//const categories = ['Dragon Ball', 'Naruto', 'Saint Seiya'];


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball'])
    
    // const handleAdd = () => {
    //     //setCategories([...categories, 'Captain Tsubasa']);
    //     setCategories(cats => [...cats, 'Captain Tsubasa']);
    //     //console.log(categories);
    // };
    

    //console.log(categories);
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories = {setCategories}/>
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>    
                {categories.map(category => 
                    // <li key={category}>{category}</li>
                    < GifGrid 
                        key={category} 
                        category = {category}
                    />
                )}
            </ol>
        </>
    )
}

export default GifExpertApp;