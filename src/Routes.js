import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import logo from "resource/img/logo.svg";
import { Layout } from "./layout";

import { Comments,Typing, CoinMarket } from "works";

class Routes extends PureComponent {
  contentLists = [
    // 분리좀...

    {path: "/#/Home", label: 'Home', component: Home  },

    {path: "/#/coinmarket", label: '', component: (e)=><CoinMarket {...e}/>  },

    {path: "/#/typing", label: '타이핑 테스트', component:(e)=><Typing {...e}/>  },
    {path: "/#/comments", label: '댓글창 폼', component: (e)=><Comments {...e}/> },
    // {path: "/coinmarket", label: '가상화페시세', component: (e)=><header className="App-header"><CoinMarket {...e}/></header>  },

    // ...new Array(100).fill(undefined).map((v,i) => (
    //   {path: `/test${i+1}`, label: `test${i+1}`, component: ()=> <header className="App-header">{`test${i+1}`}</header> }
    // ))
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
                <header className="App-header">
                {this.contentLists.map((c, i)=><Route exact key={i} path={`/react.app${c.path}`} component={c.component} />)}

                </header>

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
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

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
