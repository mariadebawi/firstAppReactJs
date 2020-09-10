import React, { Component } from 'react';
import Layout from './hoc/Layout/layout';

import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

import Checkout from './Containers/Checkout/Checkout'

import Orders  from './Containers/Orders/Orders'

import {Route , Switch} from 'react-router-dom';


class App extends Component {



  render() {
    return (
      <React.Fragment>
         <div>
            <Layout>

              <Switch>
               <Route path="/" exact component={BurgerBuilder}   />

               <Route path="/checkout" component={Checkout}   />

               <Route path="/orders" component={Orders}   />


              </Switch>
            </Layout>

         </div>
      </React.Fragment>
 )
}

}


export default App;
