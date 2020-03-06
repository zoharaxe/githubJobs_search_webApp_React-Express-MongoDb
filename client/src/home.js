import React, { Component } from "react";
import ValidationForLoadingData from "./ValidationForLoadingData";
// import SimpleReactFileUpload from './SimpleReactFileUpload';
// import ShowFromServer from './showFile';
import { Jumbotron, Card, CardBody, CardTitle, Button } from "reactstrap";
import { FormControl, InputGroup } from "react-bootstrap";

import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = { data: [], isClicked: false, search: "", filteredJobs: [] };
    // this.ClickHandler = this.ClickHandler.bind()
  }

  // Getting the jobs**************---------------------------------------------------------------

  ClickHandler = async () => {
    const url = "http://jobs.github.com/positions.json";

    let onPage = 0;
    let resultCount;

    console.log("clicked");
    do {
      await axios
        .get(`${url}?page=${onPage}`)

        .then(res => {
          console.log("got", res.data.length, "jobs");

          resultCount = res.data.length;
          let tmpData = [...this.state.data];
          tmpData.push(...res.data);
          this.setState({ data: tmpData });
          console.log("data in the state", this.state.data);
          onPage++;
        })
        .catch(err => console.log(err));
      console.log("resultCount is", resultCount);
    } while (resultCount > 0);
    this.setState({ isClicked: true });
    console.log("isClicked is", this.state.isClicked);
    console.log("list of jobs", this.state.data);
  };
  // -------------------------------------------------------------------------------------------------------------------
  
  // ניסיון לגרום לחיפוש לקרות רק בקליק*******
  // setClickedFalse = () =>{
  //   this.setState({isClicked:false})
  //   console.log(this.state.isClicked)
  // }

  render() {
    let filteredJobs = this.state.data.filter(job => {
      return (
        job.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <Jumbotron
          fluid
          style={{
            color: "grey",
            height: "450px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80')"
          }}
        >
          <h1 className="display-3">Welcom to La'Avoda website</h1>
          <p className="lead">Here you can find various high-tech jobs</p>
          <hr className="my-2" />
          <p></p>
          <p className="lead"></p>
          <InputGroup
            style={{ width: "50%", margin: "auto" }}
            onKeyPress={event=>{
              if (event.key === "Enter") {
                console.log("enter clicked")
                return this.ClickHandler()
                
              }
          
            }}
          >
            <FormControl
              placeholder="Insert job title"
              aria-label="Search"
              // aria-describedby="basic-addon2"
              onChange={event => {
                this.setState({ search: event.target.value });
              }}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.ClickHandler}>
                Get Jobs
              </Button>
            </InputGroup.Append>
          </InputGroup>
          {/* <br></br>
          <Button onClick={this.ClickHandler}>Get jobs </Button> */}
        </Jumbotron>

        {/* {showJobs} */}
        <div>
          <ValidationForLoadingData
            length={filteredJobs.length}
            isClicked={this.state.isClicked}
            filteredJobs={filteredJobs}
            search={this.state.search}
            saveJob={this.saveJob}
            // setClickedFalse={this.setClickedFalse()}
          />
        </div>
      </div>
    );
  }
}

export default Home;
