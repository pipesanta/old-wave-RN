import { useState, useEffect } from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500) => {

    const [debouncedValue, setDebouncedValue] = useState(input);


    console.log('Hola');
    
    useEffect(() => {

        const timeout = setTimeout(() => {
            setDebouncedValue(input);
        }, time)

        return () => {
            clearTimeout(timeout);
        }
    }, [input])


    return debouncedValue;
}
