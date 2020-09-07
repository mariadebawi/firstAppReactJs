import React, { Component } from 'react';
import NavigationsItem from './NavigationItem/NavigationItem'
import './NavigationItems.css' ;

const NavigationsItems = (props) => (
        <ul className="NavigationItems">

           <NavigationsItem  link="/" active> Burger Builder</NavigationsItem>
           <NavigationsItem  link="/" > Checkout</NavigationsItem>


        </ul>
)


export default NavigationsItems;
