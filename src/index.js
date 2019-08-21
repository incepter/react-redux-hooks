import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import ReduxApp from "./ReduxApp";

import "./styles.css";
import UsingFormInputs from "./containers/UsingFormInputs";
import UsingStoreForm from "./containers/UsingStoreForm";

function App() {
  return (
    <ReduxApp>
      <Grid container>
        <Grid item xs={6}>
          <fieldset>
            <legend>Using store form</legend>
            <UsingStoreForm />
          </fieldset>
        </Grid>
        <Grid>
          <fieldset>
            <legend>Using Local user input form</legend>
            <UsingFormInputs />
          </fieldset>
        </Grid>
      </Grid>
    </ReduxApp>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
