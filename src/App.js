
import _ from "lodash";
import React, { Component } from 'react';
import { Route,Switch } from 'react-router';
import { Layout } from './Layout';
import Withdraw from './Withdraw';

import  Trade  from './Trades/Trade';
import "bootstrap/dist/css/bootstrap.css";
import { NavMenu } from "./NavMenu";

class App extends Component {
  render() {
    return (
     
<React.Fragment>
       
        
        <NavMenu/>
        <Route path="/Trade" component={Trade}/>
        <Route path="/Withdraw" component={Withdraw}/>
      </React.Fragment>
    );
  }
}

export default App;
