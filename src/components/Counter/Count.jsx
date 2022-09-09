import React, { useState } from "react"




export const Count = ({stock, initial, onAdd}) =>{
    //const estado= useState(0);
    //const miVariableDeEstado= estado [0]    
    //const miVariableDeEstado= estado [1];
        //es lo mismo que
    
    const [count, setCount]= useState(initial)


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
    }
   // const onAdd= () =>{
    //    console.log(`Ha agregado un nuevo producto a su carrito`);
   //     alert(`Ha agregado un nuevo producto a su carrito`);
   //   }
    

    return(
        <div>
            <button onClick={()=>restar(1)}>-</button>
            <button onClick={()=>sumar(1)}>+</button>
            <p>Cantidad: {count}</p>
            <button onClick={()=> onAdd (count)} >Agregar al Carrito</button>
        </div>
    )

}

