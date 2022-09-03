import React from 'react'
import { Item } from '../components/Card/Item'
import estilos from './itemList.module.css'





export const ItemList = ({productList}) => {

  productList.map(item => item.title )

  return (
    <div className={estilos.container3}>
      {
        productList.map(item=> <Item key={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price}/>)
      }
    </div>
  )  
}



