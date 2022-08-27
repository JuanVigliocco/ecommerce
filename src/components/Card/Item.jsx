import React from "react";
import {Count} from "../Counter/Count";
import estilos from "./item.module.css"

const onAdd= () =>{
    console.log(`Ha agregado un nuevo producto a su carrito`);
    alert(`Ha agregado un nuevo producto a su carrito`);
}


export const Item = ({
    title = 'Producto de Testeo',
    img = '',
    price = 500,
    stock= 10
}) =>{
    return(
        <div className={estilos.container}>
        <div className={estilos.cardcontainer}>
            <h4>{title}</h4>
            <div>
                <img className="" src={img} alt={`Imagen del producto ${title}`}/>
            </div>
            <p className="price">$ {price}</p>
            <p>Stock: {stock}</p>
            <Count  stock={10} initial={1} onAdd={onAdd}/>
        </div>
        </div>
        )
}