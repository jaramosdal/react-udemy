import React, { useState, useCallback, useEffect } from 'react';
import '../02-useEffect/effect.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1);
    // }    

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    useEffect(() => {
        // ???
        // Con useCallback la función no está cambiando, 
        // con lo que el useEffect no se renderiza todo el rato
    }, [increment]);

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
