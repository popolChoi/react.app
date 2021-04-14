import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter as BrowserRouter } from 'react-router-dom'

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
