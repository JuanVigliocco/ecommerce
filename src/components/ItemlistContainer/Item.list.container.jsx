import React from "react";
import estilos from "./itemlist.module.css"

const ItemListContainer = ({saludo}) =>{
    return(
        <div className={estilos.itemlist}>
            <h1>{saludo}</h1>
        </div>
    )
}

export default ItemListContainer;