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

import * as actionsType from '../../store/action' ;




class BurgerBuilder extends Component {

    state ={
       // ingredients : null,
       // totalPrice : 4 ,
        //purchasable:false,
        purchasing:false ,
        loadinag : false,
        errors:false
    }
  
    componentDidMount(){
        console.log(this.props)
       /* axios.get('https://reactproject-b61f5.firebaseio.com/ingredients.json').then(
           res => {
            this.setState({ingredients : res.data });
           }).catch(error => {
               this.setState({errors : true });

            })
            */
    }


    PurchaseHandler = () => {
        this.setState({purchasing : true });

    }

    CloseModalHandler = () => {
        this.setState({purchasing : false });

    }


    continuePuchaseHander=() => {
    /*
        const QueryParam = [] ;
      for(let i in this.state.ingredients){
        QueryParam.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
      }

      QueryParam.push('price=' + this.props.price) ;


      const QueryParamString = QueryParam.join('&') ;
        this.props.history.push({
            pathname:'/checkout',
            search : '?'+QueryParamString
        }) ;
*/

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

        let burger = this.state.errors ? <p>can't loaded Ingredients </p> : null

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


const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}


const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded:(ingName) => dispatch({type: actionsType.ADD_INGREDIENTS ,ingredientName: ingName }),
        onIngredientsRemoved:(ingName) => dispatch({type: actionsType.REMOVE_INGREDIENTS ,ingredientName: ingName  })

        
    }
}






export default  connect(mapStateToProps,mapDispatchToProps) (WithErrorHandler(BurgerBuilder , axios))

