import React, { Component } from 'react'
import './App.css';
import Formulaire from './component/Formulaire'
import Message from './component/message'

import base from './component/base' ;

class App extends Component {
  state={
    messages :{},
    pseudo : this.props.match.params.pseudo
  }
  
  addMessage = message => {
    const messages = {...this.state.messages} ;
    messages[`message-${Date.now()}`] = message
    this.setState({messages: messages})

  }

  componentDidMount(){
    base.syncState('/' ,{
        context : this ,
        state : 'message'
    } )
  }

  
  
  render() {
    const message = Object
      .keys(this.state.messages)
      .map(key => (
        <Message key={key} message={this.state.messages[key].message}  pseudo={this.state.messages[key].pseudo} />
      ))





    return (
      <div className="box">
        <div>
          <div className="messages">
            <div className="message">
               {message}
            </div>

          </div>
        </div>
        <Formulaire addMessage={this.addMessage} length={180}  pseudo={this.state.pseudo}/>
      </div>
  );
  }
}

export default App;