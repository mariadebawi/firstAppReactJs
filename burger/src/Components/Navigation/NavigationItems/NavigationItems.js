import React, { Component } from 'react';

import NavigationsItem from './NavigationItem/NavigationItem'

import './NavigationItems.css' ;

import {NavLink } from 'react-router-dom';

const NavigationsItems = (props) => (
        <ul className="NavigationItems">

           <NavigationsItem  link="/" exact> Burger Builder</NavigationsItem>
           <NavigationsItem  link="/orders" > Orders</NavigationsItem>


        </ul>
)


export default NavigationsItems;
