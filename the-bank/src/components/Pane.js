import React, { Component } from "react";
import AccountViewer from "./AccountViewer";
class Pane extends Component {
  render() {
    return (
      <div className="col-12 col-md-6">
        <h5>
          {}'s Account
        </h5>
        {/* some select stuff here */}
        <AccountViewer />
      </div>
    );
  }
}
export default Pane;
