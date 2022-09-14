import { Count } from '../Counter/Count'
import estilos from './itemDetail.module.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



export const ItemDetail = ({ id, title, price ,description, stock,img }) => {
    const [cantidad, setCantidad] = useState(0);
    const {addToCart} = useContext(CartContext);


    const handleOnAdd = (cantidadItem)=>{
    
    addToCart({id, title, price, cantidadItem});
    setCantidad(cantidadItem);
};
    
    return (
        <div className={estilos.container}>
        <div className={estilos.cardcontainer}>
            <h2>{title}</h2>
            <div>
                <img className={estilos.img} src={img} alt=""/>
            </div>
            <p>$ {price}</p>
            <div>
            {cantidad === 0 ? ( 
                <Count  stock={stock} initial={1} onAdd={handleOnAdd}/>
                ) : (
                <button className={estilos.color}>    
                <Link to='/cart'>Ir al Carrito</Link>
                </button>
            )}
            </div>
            <p>{description}</p>
            <h3>Stock: {stock}</h3>
            
        </div>
        </div>
    )
}



