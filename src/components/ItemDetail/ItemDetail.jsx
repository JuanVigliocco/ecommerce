import { Count } from '../Counter/Count'
import estilos from './itemDetail.module.css'


export const ItemDetail = ({item}) => {
    const onAdd = ()=> alert('Has agregado al carrito!');
    
    return (
        <div className={estilos.container}>
        <div className={estilos.cardcontainer}>
            <span>{item.title}</span>
            <div>
                <img className={estilos.img} src={item.img} alt=""/>
            </div>
            <span>$ {item.price}</span>
            <span>Stock: {item.stock}</span>
            <Count  stock={10} initial={1} onAdd={onAdd}/>
        </div>
        </div>
    )
}