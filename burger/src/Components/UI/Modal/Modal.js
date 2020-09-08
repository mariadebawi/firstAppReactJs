import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/aux'
import Backdrop from '../Backdrop/Backdrop'
import './modal.css'


class Modal extends Component {


    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
    
        return (  
            <Aux>
        <Backdrop show={this.props.show }  clicked={this.props.CloseModal }  />
          <div className="Modal"
              style={{
                  transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: this.props.show ? '1' : '0',
              }}  >
              {this.props.children}
          </div>
      </Aux>
      )
            }


}

export default Modal;
