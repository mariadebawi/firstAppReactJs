import React, { Component } from 'react';

import './ContactData.css' ;
import Button from '../../../Components/UI/Button/Button' ;
import axios from '../../../axios-order'

import Spinner  from '../../../Components/UI/Spinner/Spinner' ;


import Input from '../../../Components/UI/Input/Input'

import {connect} from 'react-redux' ;


import WithErrorHandler from '../../../hoc/WithErrorHandler/WithErrorHandler'


import * as actions from '../../../store/actions/index'

class ContactData extends Component {
    state ={
          orderForm:{
            name : {
                elementType : 'input',
                elementConfig :{
                    type:'text',
                    placeholder:'Your name'
                },
                value:'',
                validation:{
                    required:true,
                    maxlength:15,
                    minlength:5 ,
                },
                valid:false,
                touched:false
            },
            adress : {
                elementType : 'input',
                elementConfig :{
                    type:'text',
                    placeholder:'Your Adress'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            street :  {
                elementType : 'input',
                elementConfig :{
                    type:'text',
                    placeholder:'Street'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            zipCode : {
                elementType : 'input',
                elementConfig :{
                    type:'text',
                    placeholder:'Your Zip Code'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            country :  {
                elementType : 'input',
                elementConfig :{
                    type:'text',
                    placeholder:'country'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
             email : {
                elementType : 'input',
                elementConfig :{
                    type:'text',
                    placeholder:'Your Email'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },

             deliveryMethod  : {
                elementType : 'select',
                elementConfig :{
                   options:[
                       {value:'fastest' , displayValue : 'Fastest'},
                       {value:'cheapest' , displayValue : 'Cheapest'}
                   ]
                },
                value:'fastest',
                valid:true,
                validation:{}
            },

          },
             formIsValid:false

        }



    orderHandler = (event) =>{
  
        event.preventDefault() ;

      //this.setState({loadinag:true})

      const formData = {} ;

      for(let ElementInputIdentifier in this.state.orderForm ){
        formData[ElementInputIdentifier]=this.state.orderForm[ElementInputIdentifier].value
      }
      const order = {
          ingredients : this.props.ings ,
          price : this.props.price,
          orderData:formData
 
      }


      this.props.onOrderBurger(order)

  
    }

    CheckValidate(value , rules){
        let isValid = true ;
       
        if(!rules){
            return true ;
        }
        if(rules.required){
            isValid=value.trim() !== '' && isValid ;
        }

        if(rules.minlength){
            isValid=value.length >= rules.minlength  && isValid;

        }

        if(rules.maxlength){
            isValid=value.length <= rules.maxlength && isValid ;

        }

        return isValid ;
    }



    changedHandler = (event , InputIdentifier) => {
      const updatedOrderForm={...this.state.orderForm /*copie*/ }

      const updateFormElement={...updatedOrderForm[InputIdentifier]}

      updateFormElement.value=event.target.value ;

      updateFormElement.valid = this.CheckValidate(updateFormElement.value , updateFormElement.validation)

      updateFormElement.touched = true ;
    
      updatedOrderForm[InputIdentifier] = updateFormElement ;

      let formIsVld = true ;
      for(InputIdentifier in updatedOrderForm ){
        formIsVld = updatedOrderForm[InputIdentifier].valid && formIsVld ;
      }

      this.setState({orderForm :updatedOrderForm , formIsValid: formIsVld})
    }

 


    render(){
        const formElementsArray = [] ;
        for(let key in this.state.orderForm ){
            formElementsArray.push({
                id : key ,
                config : this.state.orderForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event)=> this.changedHandler(event ,formElement.id )}
                       />
                ))}
                <Button btnType="Success"  disabled={!this.state.formIsValid} clicked={this.orderHandler}>ORDER</Button>
            </form>
        );




        return ( 
              <div className="ContactData">
                <h4>Enter Your Contact Data</h4>
                 {form}
            </div>
        )

    }
}



const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading:state.order.loading
    };
}


const mapDispatchToProp = dispatch =>{
   return {
       onOrderBurger:(orderData) => dispatch(actions.PurchaseBurger(orderData)) 
    
   } 
}




export default connect(mapStateToProps , mapDispatchToProp)  (WithErrorHandler(ContactData , axios));