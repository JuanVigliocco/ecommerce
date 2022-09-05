import React from 'react'
import { Item } from '../components/Card/Item'
import estilos from './itemList.module.css'





export const ItemList = ({productList}) => {


  return (
    <div className={estilos.container3}>
      {
        productList.map(item=><li key={item.id}><Item item={item}/></li>)
      }
    </div>
  )  
}

