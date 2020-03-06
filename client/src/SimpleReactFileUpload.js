import React from "react";
import axios, { post } from "axios";

class SimpleReactFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileName: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit() {
    // e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file)
    .then(response => {
      if (response.status===200){
      this.setState({ fileName: response.data.file.filename });
      console.log(response.data);
      }
      else {
        console.log(`error status code : ${response.status}`);
      }
    })
    .catch(err => console.log(err));
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  fileUpload(file) {
    const url = "/cv";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
        <p>newFileName : {this.state.fileName}</p>
      </form>
    );
  }
}

export default SimpleReactFileUpload;
