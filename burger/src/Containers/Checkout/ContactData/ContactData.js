import React, { Component } from 'react';

import './ContactData.css' ;
import Button from '../../../Components/UI/Button/Button' ;
import axios from '../../../axios-order'

import Spinner  from '../../../Components/UI/Spinner/Spinner' ;

class ContactData extends Component {
    state ={
        name : '',
        email:'',
        adress:{
            street : '',
            postaleCode:''
        },
        loadinag:false


    }


    orderHandler = (event) =>{
        event.preventDefault() ;
       console.log(this.props)


      this.setState({loadinag:true})
      const order = {
          ingredients : this.props.ingredients ,
          price : this.props.price,
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
          this.setState({loadinag:false , purchasing:false});
          this.props.history.push('/') ;
      })
      .catch(error => {  this.setState({loadinag:false , purchasing:false}) })

     
    }




    render(){
      let form = (
          <form>
               <input type='text'  className="contactForm" placeholder='Your Name'  name ='name'/>
                <input type='email' className="contactForm" placeholder='Your email'  name ='email'/>
                <input type='text' className="contactForm" placeholder='street'  name ='street'/>
                <input type='text'  className="contactForm"  placeholder='postal'  name ='Postal Code'/>

                <Button btnType="Success"  clicked={this.orderHandler}   >  Order  </Button>
          </form>
       
      ) ;

      if(this.state.loadinag ){
        form= <Spinner/>
      }





        return (
            <div className="ContactData">
                <h4>Enter Your Contact Data</h4>
                {form}
              
            </div>
        )

    }
}

export default ContactData;