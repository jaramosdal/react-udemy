import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);
    
    // console.log('initialState: ', initialState);

    // console.log('values: ', values);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value 
        })
    }

    return [values, handleInputChange, reset];
}