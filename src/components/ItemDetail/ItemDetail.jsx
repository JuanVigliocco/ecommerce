import React from 'react'
import { Count } from '../Counter/Count'
import estilos from './itemDetail.module.css'

export const ItemDetail = ({item}) => {
    const onAdd = (param) =>{
        console.log(param)
    };
    return (
    <div className={estilos.container}>

        <div className={estilos.efectosombra}>
            <h3>{item.title}</h3>
            <img className={estilos.img} src={item.img} alt={item.title} />    
            <h3>$ {item.price}</h3>
            <Count stock={10} initial={1} onAdd={onAdd} />
        </div>
    </div>
    )
}