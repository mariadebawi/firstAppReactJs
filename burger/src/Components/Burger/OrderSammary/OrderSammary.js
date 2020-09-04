import React, { Component } from 'react';

import Aux from '../../../hoc/aux'

const orderSammary = (props) => {
   const IngredientSummary = Object.keys(props.ingredients)
   .map(igkey => {
        return  <li key={igkey}> 
           <span style={{textTransform:'capitalize'}}>{igkey} </span>: {props.ingredients[igkey]}
        </li>
   })
   
   

   
   
    return (
            <Aux>

               <h3>Your Order :</h3>
               <p> A delicious burger with folowing ingredients :</p>

               <ul>
                    {IngredientSummary}

               </ul>

               <p>Continue to Checkout ?</p>

            
            </Aux>
  

)
}



export default orderSammary;