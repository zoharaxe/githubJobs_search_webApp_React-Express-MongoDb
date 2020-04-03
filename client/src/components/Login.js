import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <div>
            <br/>
        <h1>Login</h1>
        <div
        style={{width:"30%", margin:"auto"}}>
            <br/>
        <FormControl
          placeholder="Type your email address"
          type="email"
          //   onChange={event => {
          //     this.setState({ search: event.target.value });
          //   }}
        />
        <FormControl
          placeholder="Type your password"
          type="password"
          //   onChange={event => {
          //     this.setState({ search: event.target.value });
          //   }}
        />
        </div>
      </div>
    );
  }
}
