import React, { Component } from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Aux/aux'


const WithErrorHandler = (WrappedComponent , axios) => {
    return class extends Component {

        state = {
            errors : null
        }

        componentWillMount() {
            this.reqInterceptors =  axios.interceptors.request.use(req => {
                this.setState({errors : null})
                return req ;
            });
            this.resInterceptors = axios.interceptors.response.use(res => res , error => {
                this.setState({errors : error})
            })
        }

        errorsConfirmHandler = () =>{
            this.setState({errors : null})

        }


        componentWillUnmount(){
            axios.interceptors.request.eject( this.reqInterceptors) ;
            axios.interceptors.response.eject( this.resInterceptors
                ) ;
        }



        render(){
            return(
                <Aux>
                    <Modal show={this.state.errors} clicked={this.errorsConfirmHandler}> 
                        { this.state.errors ? this.state.errors.message : null }
                    </Modal>
                    <WrappedComponent  {...this.props} />
    
                </Aux>
             )
        }
    }
    

}
   



export default WithErrorHandler;

