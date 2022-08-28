import estilos from './CartWidget.module.css';
const CartWidget = () =>{
    return(
        <>
        <div className={estilos.cartWidget}>
        <span className="material-symbols-outlined">shopping_cart</span>
        </div>        
        </>
    );
};


export default CartWidget;