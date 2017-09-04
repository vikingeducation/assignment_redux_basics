import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accounts: []
    };
  }

  showTransfers = () => {};
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Table value={this.props.value} state={this.state} />
        <form>
          <label>name</label>
          <input type="text" name="name" id="name" />
          <label>amount</label>
          <input type="number" name="amount" id="amount" />
          <button type="submit" onSubmit={this.props.onSubmit}>
            add user
          </button>
        </form>
      </div>
    );
  }
}

export default App;
