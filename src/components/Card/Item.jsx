import React from "react";

import estilos from "./item.module.css";
import { Link } from "react-router-dom";






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
        </div>
        </div>
        )
}