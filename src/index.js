import React from "react";
import ReactDOM from "react-dom";
import ReduxApp from "./ReduxApp";

import "./styles.css";
import UsingFormInputs from "./containers/UsingFormInputs";

function App() {
  return (
    <ReduxApp>
      <UsingFormInputs />
    </ReduxApp>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
