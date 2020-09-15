import React, { Component } from 'react'
import {Redirect } from 'react-router-dom'

 class Connection extends Component {

    state ={
        pseudo : '',
        goTOchat : false 
    }
    OnchangeHandler = (event ) =>{
      const pseudoo = event.target.value  ;
      this.setState({pseudo:pseudoo }) ;
    }

    submitHandleer = (event) => {
        event.preventDefault() ;
        this.setState({goTOchat:true }) ;

    }
    render() {

        if(this.state.goTOchat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }
        return (
            <div className="connexionBox">

              <form  className="connexion" onSubmit={this.submitHandleer}>
                  <input type="text" placeholder="pseudo"  onChange={this.OnchangeHandler} required/>

                  <button type="submit">GO</button>

              </form>
                
            </div>
        )
    }
}



export default Connection ;