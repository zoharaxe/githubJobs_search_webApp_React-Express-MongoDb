import React, { Component } from "react";
import { Jumbotron, Card, CardBody, CardTitle, Button } from "reactstrap";
import axios from "axios";
import { Container } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Button from "@material-ui/core/Button";
// import Divider from "@material-ui/core/Divider";
import JobsExpansionPanel from "./ExpansionPanel";

class SavedJobs extends Component {
  constructor() {
    super();
    this.state = { jobsFromDB: [] };
  }

  // Getting the saved jobs from DB**************---------------------------------------------------------------
  GetTheJobs = () => {
    console.log("function is called");
    axios
      .get(`/savedJobsPage`)

      .then(res => {
        console.log("jobs from DB", res.data);

        let tmpData = [...this.state.jobsFromDB];
        tmpData.push(...res.data);
        this.setState({ jobsFromDB: tmpData });
        console.log("data in the state", this.state.jobsFromDB);
      })
      .catch(err => console.log(err));
  };
  componentDidMount(){
    {this.GetTheJobs()}
  }
  render() {
    // this.GetTheJobs()

    const ShowJobs = this.state.jobsFromDB.map((job, index) => {

      return (
        <div key={index}>
                  <JobsExpansionPanel job={job} />
        </div>
      );
    });

    return (
      <div>
        <Jumbotron
          fluid
          style={{
            color: "whiteSmoke",
            height: "400px",
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/10/24/23/11/doors-1767563_960_720.jpg')"
          }}
        >
          <h1 className="display-3" style={{marginTop:"-30px"}}>Your Opportunities</h1>
          <hr className="my-1" />
          <p></p>
          <p className="lead"></p>
          <br></br><br></br><br></br>
          {/* <Button  onClick={this.GetTheJobs}>Show Jobs</Button> */}
        </Jumbotron>

        <div>{ShowJobs}</div>
      </div>
    );
  }
}

export default SavedJobs;
