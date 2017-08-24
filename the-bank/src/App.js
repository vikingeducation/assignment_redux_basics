import React, { Component } from "react";
import "./App.css";
import Pane from "./components/Pane";
import Button from "./components/elements/Button";
class App extends Component {
  render() {
    let { accounts } = this.props;
    console.log(accounts, " accounts ");
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Bank</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <Pane accounts={accounts} />
            <Pane accounts={accounts} />
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
