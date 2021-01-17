import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import logo from "resource/img/logo.svg";
import { Layout } from "./layout";

import Comments from "works/comments";
import Typing from "works/Typing";





class Routes extends PureComponent {
  contentLists = [
    // 분리좀...

    {path: "/Home", label: 'Home', component: Home  },
    {path: "/typing", label: '/Typing.js', component:(e)=><header className="App-header"><Typing {...e}/></header>  },
    {path: "/comments", label: '/comments/', component: (e)=><header className="App-header"><Comments {...e}/></header>  },
    ...new Array(100).fill(undefined).map((v,i) => (
      {path: `/test${i+1}`, label: `test${i+1}`, component: ()=> <header className="App-header">{`test${i+1}`}</header> }
    ))
    // {path: "/test1", label: 'test1', component: ()=> <header className="App-header">'test1'</header> },
    // {path: "/test2", label: 'test2', component: ()=> <header className="App-header">'test2'</header> },
    // {path: "/test3", label: 'test3', component: ()=> <header className="App-header">'test3'</header> }
  
  ]
  render() {

    return (
      <React.Fragment>
        {/* <Redirect from="/react.app" to="/react.app" /> */}
        <Route exact path="/react.app" component={(e)=><Typing {...e} hint={true}/>} />
        <Switch>
          <Layout
            contentLists = {this.contentLists}
            cayoutContent={
              <React.Fragment >
                <Route exact path="/react.app" component={Home}></Route>
                {this.contentLists.map((c, i)=><Route exact key={i} path={`/react.app${c.path}`} component={c.component} />)}

              </React.Fragment >
            }
          />
            
          </Switch>

      </React.Fragment>
    );
  }
}
export default Routes;

function Home() {
  return (
    <React.Fragment >
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* <p> Edit <code>src/App.js</code> and save to reload.</p> */}
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </React.Fragment>
  );
}
