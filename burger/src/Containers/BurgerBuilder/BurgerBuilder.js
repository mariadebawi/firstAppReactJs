import React, { Component } from 'react';

import Aux from '../../hoc/Aux/aux';

import Burger from '../../Components/Burger/Burger'

import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

import Modal from '../../Components/UI/Modal/Modal'

import OrderSammary   from '../../Components/Burger/OrderSammary/OrderSammary'

import axios from '../../../src/axios-order' ;

import Spinner from '../../Components/UI/Spinner/Spinner'

const PRICE_INGREDEINT = {
            salad : 0.4 ,
            bacon :0.6 ,
            cheese:1.4,
            meat :0.5
}



class BurgerBuilder extends Component {

    state ={
        ingredients :{
            salad : 0 ,
            bacon :0 ,
            cheese:0,
            meat :0
        },
        totalPrice : 4 ,
        purchasable:false,
        purchasing:false ,
        loadinag : false
    }



    PurchaseHandler = () => {
        this.setState({purchasing : true });

    }

    CloseModalHandler = () => {
        this.setState({purchasing : false });

    }


    continuePuchaseHander=() => {
      //alert("contunue !!!")
      this.setState({loadinag:true})
      const order = {
          ingredients : this.state.ingredients ,
          price : this.state.totalPrice,
          customer :{
              name : 'maria',
              adress :{
                  street : 'testtest',
                  zipCode : 'testtest',
                  country : 'Tunisia'
              },
              email : "mdebawi@gmail.com"
          },
          deliveryMethod  : 'fastTest'

      }

      axios.post('/orders.json', order)
      .then(Response => {
          this.setState({loadinag:false , purchasing:false})

      })
      .catch(error => {  this.setState({loadinag:false , purchasing:false}) })

    }


    updatePurchaseHandler(ingredients)  {
        
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey] //ingredients[salad] = 1 ;

        }).reduce((sum , el) => {
            return sum+el ; 
        }, 0)


        this.setState({purchasable : sum>0 });

    }




    AddInggredientHandler = (type) => {
        const oldCount = this.state.ingredients[type] ;
        const updatedCount = oldCount+1 ;
        const updatedIngredeint = {
            ...this.state.ingredients
        };

        updatedIngredeint[type] = updatedCount;
        const priceAddition  = PRICE_INGREDEINT[type];
        const oldPrice = this.state.totalPrice ;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice , ingredients:updatedIngredeint})
        this.updatePurchaseHandler(updatedIngredeint) ;


       // console.log(updatedIngredeint )
    }



    RemoveInggredientHandler = (type) => {
        const oldCount = this.state.ingredients[type] ;
           if(oldCount <= 0){
               return ;
           }

        const updatedCount = oldCount-1 ;

        const updatedIngredeint = {
            ...this.state.ingredients
        };

        updatedIngredeint[type] = updatedCount;
        const Reduceprice  = PRICE_INGREDEINT[type];
        const oldPrice = this.state.totalPrice ;
        const newPrice = oldPrice-Reduceprice;
        this.setState({totalPrice:newPrice , ingredients:updatedIngredeint})
        this.updatePurchaseHandler(updatedIngredeint) ;



       // console.log(updatedIngredeint )
    }








    render() {
        const disabledInfo = {   ...this.state.ingredients} ;

        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0 // {salad:true , meat:false ......}

        }


        let orderSammary =  
            <OrderSammary ingredients= {this.state.ingredients}
                    cancelPurchase={this.CloseModalHandler} continuePurchase={this.continuePuchaseHander}
                    purchase = {this.state.totalPrice.toFixed(2)}
            /> 

        if(this.state.loadinag ){
            orderSammary= <Spinner/>
        }
        

        return ( 

        
             <Aux>

                <Modal show={this.state.purchasing}  CloseModal= {this.CloseModalHandler} >
                         {orderSammary}
                </Modal>

                <Burger ingredients= {this.state.ingredients} />

                <BuildControls
                  ingredientAdded= {this.AddInggredientHandler}  
                  ingredientRemoved= {this.RemoveInggredientHandler}
                  disabled={disabledInfo}

                  price={this.state.totalPrice}

                  purchasable = {this.state.purchasable}

                  ordered = {this.PurchaseHandler}
                   />



            </Aux>


        )
    } 
}






export default BurgerBuilder