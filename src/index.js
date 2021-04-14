import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
import "./resource/css/index.scss";

import App from "./App";

ReactDOM.render( 
  /* 
  StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구입니다. Fragment와 같이 UI를 렌더링하지 않으며, 자손들에 대한 부가적인 검사와 경고를 활성화합니다.
  주의: Strict 모드는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에는 영향을 끼치지 않습니다.
  */

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
  ,
  document.getElementById("root")
);

