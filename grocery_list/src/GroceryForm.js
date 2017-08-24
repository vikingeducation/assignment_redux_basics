import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

const CATEGORY_NAMES = [
  "produce",
  "dairy",
  "deli",
  "bulk",
  "cheese",
  "beer",
  "wine"
];

export default class GroceryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      amount: 1,
      category: "produce",
      purchased: false
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onNewGrocery = e => {
    e.preventDefault();

    this.props.actions.addGrocery(this.state);
  };

  render() {
    const { name, description, amount, category } = this.state;
    return (
      <form onSubmit={this.onNewGrocery}>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            required="true"
            type="text"
            name="name"
            value={name}
            onChange={this.onChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Description</ControlLabel>
          <FormControl
            type="text"
            name="description"
            value={description}
            onChange={this.onChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Amount</ControlLabel>
          <FormControl
            required="true"
            type="number"
            name="amount"
            value={amount}
            onChange={this.onChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Category</ControlLabel>
          <FormControl
            required="true"
            componentClass="select"
            name="category"
            value={category}
            onChange={this.onChangeInput}
          >
            {CATEGORY_NAMES.map(category =>
              <option key={category} value={category}>
                {category}
              </option>
            )}
          </FormControl>
        </FormGroup>

        <Button type="submit" bsStyle="primary">
          Submit
        </Button>
      </form>
    );
  }
}
