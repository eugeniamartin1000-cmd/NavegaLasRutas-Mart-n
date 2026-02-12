import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/css/Item.css'

const Item = ({prod}) => {
    return (
        <Card className='product-card'>
            <Card.Img className="product-img" variant="top" src={prod.img}/>
            <Card.Body className='card'> 
                <Card.Title className='title'>{prod.name}</Card.Title>
                <Card.Text>
                    ${prod.price},00
                </Card.Text>
                <Link to={`/item/${prod.id}`} className="btn btn-dark">Ver más</Link>
            </Card.Body>
        </Card>
    )
}

export default Item