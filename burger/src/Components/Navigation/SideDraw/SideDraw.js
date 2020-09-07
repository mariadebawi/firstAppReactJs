import React, { Component } from 'react';
import Logo from '../../Logo/Logo' ;
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/aux'
import './SideDraw.css' ;

const SideDraw = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer','Open'];
    }

    

    return(
     <Aux>
        <Backdrop   show={props.open}   clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div className="Logoo">
                <Logo/>

            </div>

            <nav>
                <NavigationItems/>
            </nav>
        </div>
      </Aux>
   );      

   
}




export default SideDraw;
