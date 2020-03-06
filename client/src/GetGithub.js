import React, { Component } from "react";
import axios from "axios";

class GetGithub extends Component {
  // url = "https://jobs.github.com/positions.json";
  state = { data: [] };

  componentDidMount() {
    // clickHandler = () => {
    //   console.log("clicked");
    // axios
    // .get(this.url)
    
      axios.get("https://jobs.github.com/positions.json" )
      .then(
        results => {results.json()}
      )
      .then(data => 
        console.log(data)
      )
      .catch(err => console.log(err));
    // fetch(this.url)
    //   .then(res => res.json())
    //   .then(data => this.setState({data : data.res}))
    //   .catch(err => console.log(err));
      }

  render() {
    return (
      <div className="App">
        <p>Github</p>
        {/* <button onClick={this.clickHandler}>get jobs </button> */}
        {/* <p>Got : {this.state.data}</p> */}
        
      </div>
      
    );
  }
}

export default GetGithub;
