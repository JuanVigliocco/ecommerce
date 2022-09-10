import { Count } from '../Counter/Count'
import estilos from './itemDetail.module.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'



export const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(0)
    const onAdd = (cantidad)=>{
    setCantidad(cantidad);}
    
    return (
        <div className={estilos.container}>
        <div className={estilos.cardcontainer}>
            <h2>{item.title}</h2>
            <div>
                <img className={estilos.img} src={item.img} alt=""/>
            </div>
            <p>$ {item.price}</p>
            <div>
            {cantidad === 0 ? ( 
                <Count  stock={item.stock} initial={1} onAdd={onAdd}/>
                ) : (
                <button className={estilos.color}>    
                <Link to='/cart'>Ir al Carrito</Link>
                </button>
            )}
            </div>
            <p>{item.description}</p>
            <h3>Stock: {item.stock}</h3>
            
        </div>
        </div>
    )
}



