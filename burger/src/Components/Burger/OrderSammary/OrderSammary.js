import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/aux' ;

import Button from '../../UI/Button/Button'



class OrderSummary extends Component {
   // This could be a functional component, doesn't have to be a class
   componentWillUpdate() {
       console.log('[OrderSummary] WillUpdate');
   }

   render () {

   const IngredientSummary = Object.keys(this.props.ingredients)
   .map(igkey => {
        return  <li key={igkey}> 
           <span style={{textTransform:'capitalize'}}>{igkey} </span>: {this.props.ingredients[igkey]}
        </li>
   })
   
   

   
   
    return (
            <Aux>

               <h3>Your Order :</h3>
               <p> A delicious burger with folowing ingredients :</p>

               <ul>
                    {IngredientSummary}

               </ul>

               <p><strong> Total Price :  {this.props.purchase} </strong></p>

               <p>Continue to Checkout ?</p>
           
            
               <Button btnType="Danger" clicked={this.props.cancelPurchase} >CANCEL</Button>
               <Button btnType="Success" clicked={this.props.continuePurchase}>CONTUNUE</Button>
            
            </Aux>
  

)


    }
}



export default OrderSummary;