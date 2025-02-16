import React, { useState } from 'react'

const EntradaSimple2 = () => {

    const [ inputValue, setInputValue] = useState('');

    const validateInput = () => {
        if (inputValue === "") { 
            alert("La casilla no debe estar vacía")
        } else {
            alert("Todo correcto");
        }
    }

    return (
        <>
            <h3>Entrada Simple 2</h3>
            <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
            <button onClick={validateInput}>Valida si está vacía la casilla</button>
        </>
    )
}

export default EntradaSimple2;