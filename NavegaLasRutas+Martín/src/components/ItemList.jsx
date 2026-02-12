import React from 'react'
import Item from  './item'
import '../assets/css/ItemList.css'

const ItemList = ({data}) => {
    return (
        <div className="product-card" style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
            {data.map((prod) => <Item key={prod.id} prod={prod} />)}
        </div>
    )
}

export default ItemList