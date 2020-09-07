import React, { Component } from 'react';

import Aux from '../../../hoc/aux' ;

import Button from '../../UI/Button/Button'



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

               <p><strong> Total Price :  {props.purchase} </strong></p>

               <p>Continue to Checkout ?</p>
           
            
               <Button btnType="Danger" clicked={props.cancelPurchase} >CANCEL</Button>
               <Button btnType="Success" clicked={props.continuePurchase}>CONTUNUE</Button>
            
            </Aux>
  

)
}



export default orderSammary;