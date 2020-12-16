import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories)

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Otra']);
    //     // el callback recibe el estado anterior y devuelve el nuevo
    //     setCategories(cats => [...cats, 'Otra']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {
                categories.map(category => 
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />)
            }
        </>
    )
};

export default GifExpertApp;