import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import {Route } from 'react-router-dom';

import ContactData from '../Checkout/ContactData/ContactData'

import {connect} from 'react-redux' ;



class Checkout extends Component {
 
  
  
  /*  state={
        ingredients : null ,
        price:0
       }
    

   componentWillMount(){
       const query = new URLSearchParams(this.props.location.search) ;
        let price = 0 ;
        const ingredients={} ;
        for(let param of query.entries()){
                if(param[0] === 'price'){
                    price = +param[1]
            }
            else{
                ingredients[param[0]] = +param[1] ;
            }
        }

        this.setState({ingredients : ingredients , price :price }) ;

       
   }

   */





    CheckoutcanceledHandler = () => {
        this.props.history.goBack() ;
    }


    CheckoutcontinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data') ;

    }


    
    render(){
        return (
            <div>
                <CheckoutSummary 
                 ingredients={this.props.ings}  
                 Cancelled={this.CheckoutcanceledHandler}   
                 Continued={this.CheckoutcontinuedHandler}   />
                 <Route path={this.props.match.path + '/contact-data'}  component={ContactData}   />
            </div>
        )

  }


}



const mapStateToProps = state => {
    return {
        ings: state.ingredients,
       // price: state.totalPrice
    };
}






export default connect(mapStateToProps) (Checkout);