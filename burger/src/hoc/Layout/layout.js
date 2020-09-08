import React, { Component } from 'react';

import   './layout.css';

import Aux from '../Aux/aux';

import Toolbar from '../../Components/Navigation/Toolbar/toolbar';
import SideDrawer from '../../Components/Navigation/SideDraw/SideDraw';

class Layout extends Component {

            state = {
                  showSideDraw: false
            }
    
            sideDrawerClosedHandler = () => {
                  this.setState( { showSideDraw: false } );
            }
    
      
          
            sideDrawerToggleHandler = () => {
                  this.setState( ( prevState ) => {
                  return { showSideDraw: !prevState.showSideDraw };
                  } );
            }
  
    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDraw}
                   />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;