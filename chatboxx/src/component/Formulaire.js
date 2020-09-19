import React, { PureComponent } from 'react'

class Formulaire extends PureComponent {
  
    state = {
        message : '',
        length:this.props.length,
    }



    submitHandler= event  => {
       event.preventDefault() ;
       this.createMessage() ;
    }

    changeHandler= event =>{
      const msg = event.target.value;

        const length = this.props.length - msg.length ;
        this.setState({message:msg , length:length });
     

    }


    createMessage=()=> {

        const{addMessage , pseudo ,length } = this.props ;



        const message={
            pseudo,
            message : this.state.message,
            length: this.state.length
        }


         
        addMessage(message)

        this.setState({message : '' , length:length})
      }

      
    

    OnkeyUpHandler = event => {
       if(event.key === 'Enter'){
           this.createMessage()
       }
    }




    render() {
        return (
           <form className="form" onSubmit={this.submitHandler}>
              
               <textarea  maxLength={this.props.length} required 
                onChange={this.changeHandler}  onKeyUp={this.OnkeyUpHandler} value={this.state.message}  />  

               <div className="info">
                   {this.state.length}
               </div>
               <button type="submit"> Envoyer</button>

           </form>
        )
    }
}




export default  Formulaire  ;