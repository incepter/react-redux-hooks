import React from "react";
import ReactDOM from "react-dom";
import ReduxApp from "./ReduxApp";

import "./styles.css";
import AppContainer from "./containers/AppContainer";

function App() {
  return (
    <ReduxApp>
      <AppContainer />
    </ReduxApp>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
