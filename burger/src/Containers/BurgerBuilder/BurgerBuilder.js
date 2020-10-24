import React, { Component } from 'react';

import Aux from '../../hoc/Aux/aux';

import Burger from '../../Components/Burger/Burger'

import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

import Modal from '../../Components/UI/Modal/Modal'

import OrderSammary   from '../../Components/Burger/OrderSammary/OrderSammary'

import axios from '../../../src/axios-order' ;

import Spinner from '../../Components/UI/Spinner/Spinner'

import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

import {connect} from 'react-redux' ;

import * as actions from '../../store/actions/index'


class BurgerBuilder extends Component {

    state ={
        purchasing:false ,
        loadinag : false,
    }
  
    componentDidMount(){
        console.log(this.props) ;
        this.props.onInitIngredient() ;
    }


    PurchaseHandler = () => {
        this.setState({purchasing : true });

    }

    CloseModalHandler = () => {
        this.setState({purchasing : false });

    }


    continuePuchaseHander=() => {
        this.props.onInitPurchase()
        this.props.history.push('/checkout')
    }


    updatePurchaseHandler(ingredients)  {
        
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey] //ingredients[salad] = 1 ;

        }).reduce((sum , el) => {
            return sum+el ; 
        }, 0)


       return  sum>0 ;

    }



    render() {
        const disabledInfo = {   ...this.props.ings} ;

        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0 // {salad:true , meat:false ......}

        }

        let orderSammary = null ; 

        let burger = this.props.errors ? <p>can't loaded Ingredients </p> : null

        if(this.props.ings){
            burger = (
                <Aux>
                    <Burger ingredients= {this.props.ings} />

                    <BuildControls
                        ingredientAdded= {this.props.onIngredientsAdded}  
                        ingredientRemoved= {this.props.onIngredientsRemoved}
                        disabled={disabledInfo}

                        price={this.props.price}

                        purchasable = {this.updatePurchaseHandler(this.props.ings)}

                        ordered = {this.PurchaseHandler}
                    />
                </Aux>
            )


            orderSammary=
                <OrderSammary 
                    ingredients= {this.props.ings}
                    cancelPurchase={this.CloseModalHandler} 
                    continuePurchase={this.continuePuchaseHander}
                    purchase = {this.props.price.toFixed(2)}
                /> 

               

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


const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        errors:state.burgerBuilder.errors

    };
}


const mapDispatchToProps = dispatch => {
    return {
      
        onIngredientsAdded:(ingName) => dispatch(actions.addIngredient(ingName)) ,
        onIngredientsRemoved:(ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredient:() => dispatch(actions.initIngredient()),
        onInitPurchase : () => dispatch(actions.PurchaseInit())

    }
}






export default  connect(mapStateToProps,mapDispatchToProps) (WithErrorHandler(BurgerBuilder , axios))

