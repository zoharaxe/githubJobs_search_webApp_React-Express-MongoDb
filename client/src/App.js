import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { Navbar, Nav, Form, Button, FormControl, Dropdown, NavDropdown} from "react-bootstrap";
// import ValidationForLoadingData from './ValidationForLoadingData';
// import SimpleReactFileUpload from './SimpleReactFileUpload';
// import ShowFromServer from './showFile';
import Home from "./pages/home";
import logo from "./logos/linkedin_banner_image_1.png";
import SavedJobs from './pages/SavedJobs';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [], isClicked: false };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar expand="lg" bg='white' sticky='top' >
				<Navbar.Brand >
          <Link className="navbar-brand" to="/">
              <img
                role='logo'
                alt=""
                src={logo}
                width='auto'
                height='100'
                className="d-inline-block align-top"
              />
            </Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link><Link  to='/SavedJobs'>Your Saved Jobs</Link></Nav.Link>
					</Nav>
          <Nav.Link><Link to='/Login'>Login</Link></Nav.Link>
          <NavDropdown title="" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>

          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home/>}
            />
             <Route
              exact
              path="/SavedJobs"
              render={() => <SavedJobs/>}
            />
              <Route
              exact
              path="/Login"
              render={() => <Login/>}
            />

            {/*
            <Route exact path="/AddPerson" render={() => <AddPerson addPerson={this.addPerson} />} />

            <Route component={Notfound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
