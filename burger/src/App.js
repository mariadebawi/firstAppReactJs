import React, { Component } from 'react';
import Layout from './Components/Layout/layout';

import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';





class App extends Component {



  render() {
    return (
      <React.Fragment>
         <div>
            <Layout>

            <BurgerBuilder />

            </Layout>

         </div>
      </React.Fragment>
 )
}

}


export default App;
