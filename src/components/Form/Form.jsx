import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react';

export const Form = () => {
    const [nombre, setNombre] = useState ('')
    const [apellido, setApellido] = useState ('')
    const [tamaño, setTamaño] = useState ('')

    const handleSubmit= (event) =>{
    event.preventDefault();
    console.log(nombre, apellido, tamaño) // enviar la info a la base de datos
    // console.log(event.target.elements.nombre.value);
    // console.log(event.target.elements.apellido.value);
};

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value)
    };

    const handleChangeTamaño = (event) => {
        setTamaño(event.target.value)
    };

    // useEffect(()=>{
    //     const handleMouseMove = (e) => {
    //         console.log ({ x: e.clientX, y: e.clientY});
    
    //     };
    //     window.addEventListener('mousemove', handleMouseMove);
    //     console.log('Creo Evento');

    //     return () => {
    //         //se ejecuta siempre antes que de lo de "window.addEventListener('mousemove', handleMouseMove);"
    //         window.removeEventListener('mousemove', handleMouseMove);
    //         console.log('Borro Evento');
    //     };
    // }, [])




    return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Nombre...' 
                name='nombre' 
                value={nombre} 
                onChange={handleChangeNombre} 
            />



            <input 
                type="text" 
                placeholder='Apellido...' 
                name='apellido' 
                value={apellido} 
                onChange={handleChangeApellido} 
            />

            <select value={tamaño} onChange={handleChangeTamaño}>
            <option value="chica">Chica 500ml</option>
            <option value="mediana">Mediana 1.5l</option>
            <option value="grande">Grande 2.25l</option>
            </select>
            <button>Enviar</button>
        </form>
    </div>
)
}

