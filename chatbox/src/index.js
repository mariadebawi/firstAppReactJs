import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Connection from "./component/Connection" ;

import NotFound from "./component/NotFound" ;


import {BrowserRouter , Switch , Route} from 'react-router-dom'

const Root = ()=> (
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Connection}/>
          <Route  path='/pseudo/:pseudo' component={App}/>
          <Route  component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
)




ReactDOM.render(
 <Root/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
