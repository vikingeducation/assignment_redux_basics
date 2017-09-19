import React, { Component } from "react";
import AccountViewer from "./AccountViewer";
class Pane extends Component {
  render() {
    let { account } = this.props;
    return (
      <div className="col-12 col-md-6">
        <h5>
          {account}'s Account
        </h5>
        {/* some select stuff here */}
        <AccountViewer {...account} />
      </div>
    );
  }
}
export default Pane;
