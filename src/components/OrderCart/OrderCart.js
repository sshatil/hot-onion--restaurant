import React, { useContext } from 'react'
import { FoodContext } from '../../App'

const OrderCart = () => {
    const [orderFood, setOrderFood] = useContext(FoodContext)
    console.log(orderFood);
    return (
        <div>
            {
                orderFood.map((food)=> (
                    <div>
                        <h1>{food.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default OrderCart
