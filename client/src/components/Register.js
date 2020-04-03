import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div>
        <br />
        <h1>Register</h1>
        <div style={{ width: "30%", margin: "auto" }}>
          <br />
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
          <BrowserRouter>
           <p style={{color:"red"}}> * if you already have an account <a href="/Login">click here</a></p>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
