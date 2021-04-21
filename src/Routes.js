import React, { PureComponent } from 'react';
import {
  BrowserRouter, Route, Switch, Link, Redirect,
} from 'react-router-dom';
import {
  Comments,
  Typing,
  MyDocument,
  CoinMarket,
} from './works';
import logo from './resource/img/logo.svg';
import { Layout } from './layout';

class Routes extends PureComponent {
  contentLists = [
    // 분리좀...

    { path: '/Home', label: 'Home', component: Home },

    { path: '/myDocument', label: 'myDocument', component: (e) => <div className="App-header fadein"><MyDocument {...e} /></div> },
    { path: '/typing', label: '타이핑 테스트', component: (e) => <div className="App-header fadein"><Typing {...e} /></div> },
    { path: '/comments', label: '댓글창 폼', component: (e) => <div className="App-header fadein"><Comments {...e} /></div> },
    { path: '/coinmarket', label: '가상화페시세', component: (e) => <div className=" fadein"><CoinMarket {...e} /></div> },

    // ...new Array(100).fill(undefined).map((v,i) => (
    //   {path: `/test${i+1}`, label: `test${i+1}`, component: ()=> <div className="App-header">{`test${i+1}`}</div> }
    // ))
  ]

  render() {
    return (
      <>
        {/* <Redirect from="/react.app" to="/react.app" /> */}
        <Route exact path="/" component={(e) => <Typing {...e} hint />} />

        <Switch>
          <Layout
            contentLists={this.contentLists}
            cayoutContent={(
              <>
                {/* <Route exact path="/react.app" component={Home}></Route> */}
                {this.contentLists.map((c, i) => <Route exact key={i} path={`${c.path}`} component={c.component} />)}
                <Route path="*" component={(e) => error404(e, this.contentLists)} />

              </>
            )}
          />

        </Switch>

      </>
    );
  }
}
export default Routes;

function Home(a) {
  console.log(a);
  return (
    <>
      <div className="App-header fadein"><img src={logo} className="App-logo" alt="logo" /></div>

      {/* <p> Edit <code>src/App.js</code> and save to reload.</p> */}
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </>
  );
}

function error404({ location = {} }, l) {
  const error = l.find((e) => e.path === location.pathname);
  if (!error) {
    return (
      <>
        {location.pathname !== '/' ? <div className="App-header">404</div> : Home}
      </>
    );
  }
  return null;
}
