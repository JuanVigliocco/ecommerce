import React, { useState } from "react"
import { useEffect } from "react";




export const Count = ({stock, initial = 1, onAdd}) =>{

    
    const [count, setCount]= useState(initial)

    useEffect(()=>{
        setCount(initial)
    },[initial])

    const sumar = () =>{
        if (count<stock) {
            setCount(count + 1);
        } else {
            alert('Maximo de Stock')
        }

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

