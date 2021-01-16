import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import logo from "./resource/img/logo.svg";
import { Layout } from "./layout";
import Typing from "./Typing";

class Routes extends PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* react.app */}
        {/* <Redirect from="/react.app" to="/react.app" /> */}
        <Route exact path="/react.app" component={Typing} />
        <Layout
            cayoutContent={
              <header className="App-header">
                <Route exact path="/react.app/Home" component={Home}></Route>
                <Route path="/react.app/test1" component={() => '!!!'}></Route>
              </header>
            }
          />
       
      </React.Fragment>
    );
  }
}
export default Routes;

function Home() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
