import React, { Component } from 'react';
import Aux from '../../../hoc/aux'
import Backdrop from '../Backdrop/Backdrop'
import './modal.css'


const modal = (props) => (

    <Aux>
      <Backdrop show={props.show }  clicked={props.CloseModal }  />
        <div className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}  >
            {props.children}
        </div>
    </Aux>


)


export default modal;
