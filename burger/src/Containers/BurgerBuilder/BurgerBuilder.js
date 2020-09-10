import React, { Component } from 'react';

import Aux from '../../hoc/Aux/aux';

import Burger from '../../Components/Burger/Burger'

import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

import Modal from '../../Components/UI/Modal/Modal'

import OrderSammary   from '../../Components/Burger/OrderSammary/OrderSammary'

import axios from '../../../src/axios-order' ;

import Spinner from '../../Components/UI/Spinner/Spinner'

import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'



const PRICE_INGREDEINT = {
            salad : 0.4 ,
            bacon :0.6 ,
            cheese:1.4,
            meat :0.5
}



class BurgerBuilder extends Component {

    state ={
        ingredients : null,
        totalPrice : 4 ,
        purchasable:false,
        purchasing:false ,
        loadinag : false,
        errors:false
    }
  
    componentDidMount(){
        axios.get('https://reactproject-b61f5.firebaseio.com/ingredients.json').then(
           res => {
            this.setState({ingredients : res.data });
           }).catch(error => {
               this.setState({errors : true });

            })

    }


    PurchaseHandler = () => {
        this.setState({purchasing : true });

    }

    CloseModalHandler = () => {
        this.setState({purchasing : false });

    }


    continuePuchaseHander=() => {
      const QueryParam = [] ;
      for(let i in this.state.ingredients){
        QueryParam.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
      }

      QueryParam.push('price=' + this.state.totalPrice) ;


      const QueryParamString = QueryParam.join('&') ;
        this.props.history.push({
            pathname:'/checkout',
            search : '?'+QueryParamString
        }) ;

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

    }


    render() {
        const disabledInfo = {   ...this.state.ingredients} ;

        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0 // {salad:true , meat:false ......}

        }

        let orderSammary = null ; 

        let burger = this.state.errors ? <p>can't loaded Ingredients </p> : null

        if(this.state.ingredients){
            burger = (
                <Aux>
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


            orderSammary=
                <OrderSammary 
                    ingredients= {this.state.ingredients}
                    cancelPurchase={this.CloseModalHandler} 
                    continuePurchase={this.continuePuchaseHander}
                    purchase = {this.state.totalPrice.toFixed(2)}
                /> 

                if(this.state.loadinag ){
                    orderSammary= <Spinner/> ;
                }

        }


        return ( 
             <Aux>
                <Modal show={this.state.purchasing}  CloseModal= {this.CloseModalHandler} >
                         {orderSammary}
                </Modal>

                  {burger}
            </Aux>

        )
    } 
}


export default WithErrorHandler(BurgerBuilder , axios)