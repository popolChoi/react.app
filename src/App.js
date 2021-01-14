import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

import Routes from "./Routes";

//  {/* 출처:
//       https://codingbroker.tistory.com/72
//       https://www.hohyeonmoon.com/blog/react-js-github-pages-deploy/
//       https://velog.io/@byjihye/react-github-pages */}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout
            cayoutContent={
              <header className="App-header">
                <Routes />
              </header>
            }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
