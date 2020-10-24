import React, { Component } from 'react';
import Order from '../../Components/Order/Order'
import './Orders.css' ;

import axios from '../../axios-order' ;

import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

import Spinner from '../../Components/UI/Spinner/Spinner'


import {connect} from 'react-redux' ;

import * as actions from '../../store/actions/index'



class Orders extends Component {
   state={
       loading:true,
       orders:[]
   }
    componentDidMount(){
       this.props.onFetchOrders() ;
    }


        render(){

            let orders = <Spinner/> ;
            if(!this.props.loading){
                orders= (this.props.orders.map(order => (
                    <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}

                    />
                )))

            }
            return (
                <div>
                    {orders}
                </div>
            
            )
        }
        

}





const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,

    };
}


const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders:() => dispatch(actions.fetchOrders()) 


    }
}


export default   connect(mapStateToProps ,mapDispatchToProps) (WithErrorHandler(Orders , axios));