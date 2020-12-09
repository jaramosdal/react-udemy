import React, { useState } from 'react';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = () => {
        // setCategories([...categories, 'Otra']);
        // el callback recibe el estado anterior y devuelve el nuevo
        setCategories(cats => [...cats, 'Otra']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
            {
                categories.map(category => <li key={ category }>{ category }</li>)
            }
            </ol>
            
        </>
    )
};

export default GifExpertApp;