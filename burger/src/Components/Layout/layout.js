import React, { Component } from 'react';
import Aux from '../../hoc/aux';

import'./layout.css'


const layout = (props) => (

      <Aux>
            <div> tolbar , sidebar , cccc </div>
            <main className="Content">
              {props.children}
            </main>
      </Aux>

)




export default layout;
