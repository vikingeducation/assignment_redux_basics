import React, { Component } from "react";
import "./App.css";
import Pane from "./components/Pane";
import Button from "./components/elements/Button";
class App extends Component {
  render() {
    // let { accounts, currentAccount } = this.props;
    // const account = accounts.find(acc => acc.id === currentAccount);
    // console.log(account);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Bank</h2>
        </div>
        {/*
        <div className="container-fluid">
          <div className="row">
            <Pane account={account} />
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
