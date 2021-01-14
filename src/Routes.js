import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import logo from "./resource/img/logo.svg";

class Routes extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Redirect from="/" to="/" />
        <Route exact path="/" component={Home}></Route>
        <Route path="/test1" component={() => <IoMdPerson />}></Route>
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
