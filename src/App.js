import React, { Component } from 'react';
import _ from "lodash";

import Trade from './Trades/Trade';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          <Trade/>
          </p>         
        </header>
      </div>
    );
  }
}

export default App;
