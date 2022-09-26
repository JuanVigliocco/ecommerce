import { Form } from '../Form/Form';
import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext'
import estilos from "./formCheckOut.module.css"

export const FormCheckOut = () => {
const [idCompra, setIdCompra] = useState("")
const {cart, clearCart, totalPrice} = useContext(CartContext);
console.log(cart);


const total = totalPrice();
const handleId = (id) =>{
    setIdCompra(id)
};

if (idCompra){
    return (<h2 className={estilos.compra}>Gracias por tu compra.<br/> El id de tu transacción es: {idCompra}</h2>)
}

return(
    <div className={estilos.caja}>
    <div className={estilos.body}>    
    <Form cart={cart} total={total} clearCart={clearCart} handleId={handleId}/>
    </div>
    </div>
    )}