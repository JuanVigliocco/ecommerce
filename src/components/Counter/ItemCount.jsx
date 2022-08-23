import React, { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) =>{
    //const estado= useState(0);
    //const miVariableDeEstado= estado [0]    
    //const miVariableDeEstado= estado [1];
        //es lo mismo que
    
    const [count, setCount]= useState(initial)

    
    const sumar = (num) =>{
        if (count<stock) {
            setCount(count + num);
        } else {
            alert('Maximo de Stock')
        }
        //TERNARIO DE ESTA CONSTANTE count < tope ? setCount(count + num) : alert('Maximo de Stock')
    };
    const restar = (num) =>{
        if (count>0) {
            setCount (count - num)
        } else {

        }

    }

    

    return(
        <div>
            <button onClick={()=>sumar(1)}>+</button>
            <button onClick={()=>restar(1)}>-</button>
            <p>Cantidad: {count}</p>
            <button onClick={onAdd} disabled={count === 0 } >Agregar al Carrito</button>
        </div>
    )

}

export default ItemCount