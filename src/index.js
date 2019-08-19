import React from "react";
import ReactDOM from "react-dom";
import ReduxApp from "./ReduxApp";

import "./styles.css";
import AppContainer from "./containers/AppContainer";

function App() {
  return (
    <ReduxApp>
      <AppContainer />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </ReduxApp>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
