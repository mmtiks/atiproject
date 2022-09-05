import React, { Component } from "react";
import ItemCode from "./ItemCode.js";
import RentalLength from "./RentalLength";
import UserCode from "./UserCode";

export default class RegisterRental extends Component {
  state = {
    step: 1,
    id: "",
    email_id: "",
    first_name: "",
    last_name: "",
    item_code: "",
    date: new Date().setHours(5),
    estimated_return: new Date(),
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleCalendar = (value) => {
    this.setState({ estimated_return: value.setHours(5) });
  };

  handleKeypress = (e) => {
    if (e.keyCode === 13) {
      this.btn.click();
    }
  };

  saved = () => {
    this.setState({
      step: 1,
      id: "",
      email_id: "",
      first_name: "",
      last_name: "",
      item_code: "",
    });
  };

  render() {
    const { step } = this.state;
    const {
      id,
      email_id,
      first_name,
      last_name,
      item_code,
      date,
      estimated_return,
    } = this.state;
    const values = {
      id,
      email_id,
      first_name,
      last_name,
      item_code,
      date,
      estimated_return,
    };
    switch (step) {
      default:
      case 1:
        return (
          <ItemCode
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserCode
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <RentalLength
            prevStep={this.prevStep}
            values={values}
            handleCalendar={this.handleCalendar}
            saved = {this.saved}
          />
        );
    }
  }
}
