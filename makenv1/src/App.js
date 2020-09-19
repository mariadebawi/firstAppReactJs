import React, { Component } from 'react'
import axios from 'axios';

 class App extends Component {

  componentDidMount() {


  axios.get('http://www.makan.cloud/api/v1/maintenance')
  .then(function (response) {
     console.log(response);
  });

//http://www.makan.cloud/api/v1/categories


  
}


  render() {
    return (
      <div>
        
      </div>
    )
  }
}


export default  App ;