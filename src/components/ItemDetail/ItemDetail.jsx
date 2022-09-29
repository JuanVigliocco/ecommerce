import { Count } from '../Counter/Count'
import estilos from './itemDetail.module.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



export const ItemDetail = ({ id, title, price ,description, stock,img }) => {
    const [cantidad, setCantidad] = useState(0);
    const {addToCart, getProductQuantity} = useContext(CartContext);


    const handleOnAdd = (cantidadItem)=>{
    
    addToCart({id, title, price, cantidadItem, img});
    setCantidad(cantidadItem);
};
    
    const quantity = getProductQuantity(id)

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
                <Count  stock={stock} initial={quantity} onAdd={handleOnAdd}/>
                ) : ( 
                <div className={estilos.centrar}>
                <Link to='/cart'><p className={estilos.botonCarrito}>Ir al Carrito</p></Link>
                </div>   
            )}
            </div>
            <p>{description}</p>
            <h3>Stock: {stock}</h3>
            
        </div>
        </div>
    )
}



