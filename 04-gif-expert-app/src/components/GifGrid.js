import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const [iamges, setIamges] = useState([])

    useEffect(() => {
        getGifs(category).then(setIamges);
    }, [category]);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
            {
                iamges.map((img) => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img } 
                    />
                ))
            }
            </div>
        </>
       
    )
}
