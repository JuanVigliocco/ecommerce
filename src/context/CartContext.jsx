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
        console.log(productToAdd)
        const productInCart = cart.find(product => product.id === productToAdd.id);
        if (productInCart) {
           setCart([ ...cart.filter(prod => prod.id !== productToAdd.id), { ...productToAdd, cantidadItem: productInCart.cantidadItem + productToAdd.cantidadItem}]);            
        } else{
            setCart([...cart, productToAdd]);
        }
    };





    const sumarCantidad= () =>{
        let total=0
        cart.forEach(prod =>{
            console.log(prod.cantidadItem)
            total += prod.cantidadItem
        })
                return total
            }


    const eliminarProd= (id) => {
        console.log(`Eliminando producto ${id}`)
        const carritoFiltrado = cart.filter((prod)=> prod.id !== id)
        setCart(carritoFiltrado);
    };


    const totalPrice = () =>{
        let acumulador = 0
        cart.forEach((prod)=>{
            acumulador += prod.price * prod.cantidadItem
        });
        return acumulador;
    };

    const clearCart = () => {
        setCart([])
    };

    const getProductQuantity = (id) =>{
        const product = cart.find((prod)=>prod.id === id)
        return product?.cantidadItem;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, eliminarProd, sumarCantidad, getProductQuantity, totalPrice , cantidad}}>
            {children}
        </CartContext.Provider>
    )
};

