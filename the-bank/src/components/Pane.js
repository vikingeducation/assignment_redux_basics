import React, { Component } from "react";
import AccountViewer from "./AccountViewer";
class Pane extends Component {
  render() {
    let { accounts } = this.props;
    return (
      <div className="col-12 col-md-6">
        <h5>
          {accounts[0].name}'s Account
        </h5>
        {/* some select stuff here */}
        <AccountViewer accounts={accounts[0].name} />
      </div>
    );
  }
}
export default Pane;
