import React from 'react'
import "./AllItems.css"

const AllItems = (props) => {
    const {img,name,price,title} = props.foodItem
    return (
        <div className="all-items">
          <div className="items">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{title}</p>
            <h4>$ {price}</h4>
          </div>
        </div>
    );
}

export default AllItems
