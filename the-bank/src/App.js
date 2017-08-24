import React, { Component } from "react";
import "./App.css";
import Pane from "./components/Pane";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Bank</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <Pane />
            <Pane />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
