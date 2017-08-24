import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import App from "./App";
class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    groceries: state.groceries,
    purchaseFilter: state.purchaseFilter,
    categoryFilter: state.categoryFilter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
