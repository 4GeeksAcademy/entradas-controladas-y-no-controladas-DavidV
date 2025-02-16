import React, { useState } from 'react'

const EntradaSimple1 = () => {

    const [ inputValue, setInputValue] = useState('');

    console.log(inputValue);

    return (
        <>
            <h3>Entrada Simple 1</h3>
            <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
            <p>{inputValue}</p>
        </>
    )
}

export default EntradaSimple1;