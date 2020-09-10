import React, { Component } from 'react';
import Order from '../../Components/Order/Order'
import './Orders.css' ;

import axios from '../../axios-order' ;

import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

class Orders extends Component {
   state={
       loading:true,
       orders:[]
   }
    componentDidMount(){
        axios.get('/orders.json')
        .then(res => {
            const fetchOrder=[] ;
            for(let key in res.data){
                fetchOrder.push({
                    ...res.data[key],
                    id:key
                })
            }
            this.setState({loading:false ,orders:fetchOrder })

        })
        .catch(err=> {
            console.log(err)
            this.setState({loading:false})

        })
    }


        render(){
            return (
                <div>
                  
                  {this.state.orders.map(order => (
                      <Order 
                      key={order.id}
                      ingredients={order.ingredients}
                      price={order.price}

                      />
                  ))}


                </div>
            
            )
        }
        

}




export default WithErrorHandler(Orders , axios);