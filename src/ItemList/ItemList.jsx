import React from 'react'
import { Item } from '../components/Card/Item'





export const ItemList = ({productList}) => {

  productList.map(item => item.title )

  return (
    <div style={{display: 'flex'}}>
      {
        productList.map(item=> <Item key={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price}/>)
      }
    </div>
  )  
}



