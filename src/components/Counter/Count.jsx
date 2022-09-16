import React, { useState } from "react"
import { useEffect } from "react";




export const Count = ({stock, initial = 1, onAdd}) =>{
    //const estado= useState(0);
    //const miVariableDeEstado= estado [0]    
    //const miVariableDeEstado= estado [1];
        //es lo mismo que
    
    const [count, setCount]= useState(initial)

    useEffect(()=>{
        setCount(initial)
    },[initial])
    //otra forma de hacerlo
    // const sumar = ()=> {
    // count< stock && setCount(count +1);
    // };
    const sumar = () =>{
        if (count<stock) {
            setCount(count + 1);
        } else {
            alert('Maximo de Stock')
        }
        //TERNARIO DE ESTA CONSTANTE count < tope ? setCount(count + num) : alert('Maximo de Stock')
    };
    const restar = ()=>{
        setCount(count-1);
    };




    return(
        <div>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
            <p>Cantidad: {count}</p>
            <button onClick={()=> onAdd (count)} >Agregar al Carrito</button>
        </div>
    )

}

