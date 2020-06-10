import React from "react";
import "./App.css";
import { ListOfRepos } from "./containers/ListOfRepos";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <CssBaseline>
      <div className="App">
        <h2>List of most popular repositories for the last week</h2>
        <ListOfRepos />
      </div>
    </CssBaseline>
  );
}

export default App;
