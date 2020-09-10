import React, { Component } from 'react';

import './NavigationItem.css' ;

import {NavLink } from 'react-router-dom';

const NavigationsItem = (props) => (
            <li className="NavigationItem" >
                     <NavLink to={props.link} activeClassName="active" exact={props.exact} >{props.children}</NavLink> 
             </li>
   
)


export default NavigationsItem;
