import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import {Route , Redirect } from 'react-router-dom';

import ContactData from '../Checkout/ContactData/ContactData'

import {connect} from 'react-redux' ;


class Checkout extends Component {
/*
    componentWillMount(){
        this.props.onInitPurchase()
    }

*/

    CheckoutcanceledHandler = () => {
        this.props.history.goBack() ;
    }


    CheckoutcontinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data') ;

    }


    
    render(){
        let summary = <Redirect to='/'/>
        
        if(this.props.ings){
            const purchasedRedirect =  this.props.purchased ? <Redirect to="/"/> : null ;
            summary = (
                <div>
                   {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ings}  
                        Cancelled={this.CheckoutcanceledHandler}   
                        Continued={this.CheckoutcontinuedHandler}   />
                    <Route path={this.props.match.path + '/contact-data'}  component={ContactData}   />

                </div>
                
            );
        }
        return summary
  }
}



const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased :  state.order.purchased,
       // price: state.totalPrice
    };
}




export default connect(mapStateToProps ) (Checkout);