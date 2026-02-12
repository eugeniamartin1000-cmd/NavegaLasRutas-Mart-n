import React from 'react'
import ItemCount from './ItemCount'
import '../assets/css/Itemdetail.css'

const ItemDetail = ({detail}) => {
  const onAdd = (cantidad)=>{
    console.log(`Agregaste del  ${detail.name},  ${cantidad} unidades`)
  }
  return (
    <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        
        <h1>Detalle del: {detail.name}</h1>
        <img src={detail.img} alt={detail.name}/>
        <p className='title'>{detail.description}</p>
        <p className='price'>${detail.price},00</p>
        <p className='stock'> Stock disponible: {detail.stock} unidades</p>
        <ItemCount stock={detail.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail

