import React from "react";
import "./App.css";
import { ListOfRepos } from "./containers/ListOfRepos";

function App() {
  return (
    <div className="App">
      <h2>List of most popular repositories for the last week</h2>
      <ListOfRepos />
    </div>
  );
}

export default App;
