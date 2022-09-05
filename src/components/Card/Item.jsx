import React from "react";
import {Count} from "../Counter/Count";
import estilos from "./item.module.css";
import { Link } from "react-router-dom";


const onAdd= () =>{
    console.log(`Ha agregado un nuevo producto a su carrito`);
    alert(`Ha agregado un nuevo producto a su carrito`);
}



export const Item = ({ item }) =>{
    return(
        
        <div className={estilos.container}>
        <div className={estilos.cardcontainer}>
            <h2>{item.title}</h2>
            <div>
                <img className={estilos.img} src={item.img} alt=""/>
            </div>
            <p>$ {item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button>Ver Detalles</button>
            </Link>
            <p>Stock: {item.stock}</p>
            <Count  stock={10} initial={1} onAdd={onAdd}/>
        </div>
        </div>
        )
}