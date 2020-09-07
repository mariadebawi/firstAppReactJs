import React, { Component } from 'react';
import Logo from '../../Logo/Logo'
import NavigationsItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDraw/DrawerToggle/DrawerToggle'
import  './Toolbar.css' ;

const toolbar = (props) => (
  
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div  className="Logo">
          <Logo/>
      </div>
    <nav className="DesktopOnly">
        <NavigationsItems/>
    </nav>
   
  </header>



)


export default toolbar;
