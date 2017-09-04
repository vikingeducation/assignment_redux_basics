import React from "react";

class Table extends React.Component {
  render() {
    console.log(this.props.value);
    return (
      <table>
        <thead>
          <tr>
            <td>Account Number</td>
            <td>Account Owner</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {this.props.value.map(account =>
            <tr>
              <td>
                {account.id}
              </td>
              <td>
                {account.owner}
              </td>
              <td>
                {account.amount}
              </td>
              <td />
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
