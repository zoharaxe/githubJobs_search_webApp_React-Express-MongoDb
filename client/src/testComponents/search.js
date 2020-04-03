// import React, { Component } from "react";

// class Search extends Component {
//   state = { search: "", jobs:[
//       {title:'junior', salary:10000},
//       {title:'senior', salary:20000}
//   ] };

//   showjobs=()=>{

//   }
//   render() {
//       let filteredJobs = this.state.jobs.filter(
//           (job)=>{
//               return job.title.indexOf(this.state.search)!==-1;
              
//           }
//       );
//     return (
//       <div>
//         <input type="text" placeholder="search" onChange = {(event)=>{
//             this.setState({search:event.target.value})
//         }}></input>
//             <button onClick={()=>{
//                 {this.showjobs}
//             }}>go</button>
//         <ul>
//             <li>yo</li>
//             {filteredJobs.map((job)=>{
//                 return <li>{job.title}</li>
//             })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Search;
