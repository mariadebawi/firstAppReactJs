import React, { Component } from 'react';

import './Order.css' ;

const Order = (props) => {
   const ingredients=[] ;

   for(let ingredientName in props.ingredients){
    ingredients.push({
        name:ingredientName,
        amount :  props.ingredients[ingredientName]
    })
   }

   const outputIngredients = ingredients.map(ig => {
       return <span key={ig.name}
               style={{
                   textTransform:'capitalize',
                   display:'inline-block',
                   margin:'0 8px' ,
                   border:'1px solid #ccc' ,
                   padding:'5px'
               }}
       
       
              >{ig.name}({ig.amount})</span> ;
   })

    return (
        <div className="Order">
            <p>Ingredients : {outputIngredients}</p>
            <p>Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
      
    )

}




export default Order;