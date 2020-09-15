import React, { Component , createRef } from 'react'
import './App.css';
import Formulaire from './component/Formulaire'
import Message from './component/message'

import base from './component/base' ;

import { CSSTransition ,TransitionGroup } from 'react-transition-group';

import './animation.css'  ;


class App extends Component {
  state={
    messages :{},
    pseudo : this.props.match.params.pseudo
  }

  messagesRef=createRef() ;
  
  addMessage = message => {
    const messages = {...this.state.messages} ;
    messages[`message-${Date.now()}`] = message
    this.setState({messages: messages})
  

  }

  componentDidMount(){
    base.syncState('/' ,{
        context : this ,
        state : 'messages'
    } )

  }




  componentDidUpdate(){
    const ref = this.messagesRef.current
   ref.scrollTop = ref.scrollHeight
  }
  

  isUser = pseudo => pseudo === this.state.pseudo

  
  render() {
    const message = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition
         in={true}
          key={key} 
           timeout={200} 
          classNames='fade' >
              <Message  
              isUser={this.isUser}  
              message={this.state.messages[key].message}  
              pseudo={this.state.messages[key].pseudo} />
        </CSSTransition>  
      ))





    return (
      <div className="box">
        <div>
          <div className="messages" ref={this.messagesRef}>
            <TransitionGroup>
              <div className="message">
                  {message}
                </div>
            </TransitionGroup>
           
          </div>
        </div>
        <Formulaire addMessage={this.addMessage} length={180}  pseudo={this.state.pseudo}/>
      </div>
  );
  }
}

export default App;