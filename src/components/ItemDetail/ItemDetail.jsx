import { Count } from '../Counter/Count'
import estilos from './itemDetail.module.css'


export const ItemDetail = ({item}) => {
    const onAdd = ()=> alert('Has agregado al carrito!');
    
    return (
        <div className={estilos.container}>
        <div className={estilos.cardcontainer}>
            <h2>{item.title}</h2>
            <div>
                <img className={estilos.img} src={item.img} alt=""/>
            </div>
            <p>$ {item.price}</p>
            <p>{item.description}</p>
            <h3>Stock: {item.stock}</h3>
            <Count  stock={10} initial={1} onAdd={onAdd}/>
        </div>
        </div>
    )
}