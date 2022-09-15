import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const CartContext = createContext();





export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0)

    useEffect(()=>{
        let totalCantidad = 0
        cart.forEach(prod => {
            totalCantidad += prod.cantidadItem
        })
        setCantidad(totalCantidad)
    },[cart])

    const addToCart = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
           //le sumo la cantidad 
            //alert("Ya esta en el carrito");
            setCart([...cart, productToAdd]);
        } 
    };

    //corroborar si el producto ya esta en el carrito (isInCart)

    const isInCart = (id) =>{
        return  cart.some((prod)=> prod.id === id) 
    };

    //sumar cantidad
    const sumarCantidad= () =>{
        let total=0
        cart.forEach(prod =>{
            console.log(prod.cantidadItem)
            total += prod.cantidadItem
        })
                return total
            }

    //eliminar un solo producto pasandole el id

    const eliminarProd= (id) => {
        console.log(`Eliminando producto ${id}`)
        const carritoFiltrado = cart.filter((prod)=> prod.id !== id)
        setCart(carritoFiltrado);
    };


    //limpiar carrito
    const clearCart = () => {
        setCart([])
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, eliminarProd, sumarCantidad, cantidad}}>
            {children}
        </CartContext.Provider>
    )
};

