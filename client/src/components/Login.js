import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <br />
        <h1>Login</h1>
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
            <p style={{color:"red"}}>* if you have not registered yet <a href="/register">click here</a></p>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
