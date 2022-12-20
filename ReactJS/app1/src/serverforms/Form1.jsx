import { Component } from "react";
import axios from 'axios'
export default class Form1 extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        id:"",
      university:"",
      institute:"",
      branch:"",
      graduated:"",
      averagecpi:"",
      experience:"",
      website:"",

      },
      allUsers: [],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    var newPerson = { ...this.state.person };
    newPerson[e.target.name] = e.target.value;
    this.setState({ person: newPerson })
  }; 
  addUser = () => {
    axios({
      method:"post",
      url:"http://localhost:3201/allUsers1/",
      data:this.state.person,
      headers:{'content-type':'application/json'}

    })
    console.log(this.state.person);
    var newAllUsers = [...this.state.allUsers];
    newAllUsers.push(this.state.person);
    this.setState({ allUsers: newAllUsers });
    this.clearForm();
  };
  clearForm = () => {
    var newForm = {
       id:"",
      university:"",
      institute:"",
      branch:"",
      graduated:"",
      averagecpi:"",
      experience:"",
      website:"",


    };
    this.setState({ person: newForm });
  };

  editUser = (usr, i) => {
    this.setState({ person: usr, editIndex: i });
  };

  deleteUser = (usr,id) => {
    console.log(usr,id)
    var number=id+1;
    axios.delete("http://localhost:3201/allUsers1/"+number).then((res)=> this.componentDidMount())

    // var latestUsers = this.state.allUsers.filter(
    //   (myUser,i) => myUser.institute !== usr.institute
    // );
    // this.setState({allUsers:latestUsers});
  };

  updateUser = () => {
    var number = this.state.editIndex+1;
    axios({
      method:"put",
      url:"http://localhost:3201/allUsers1/"+number,
      data:this.state.user
    })
    var latestUsers = [...this.state.allUsers];
    latestUsers[this.state.editIndex] = this.state.person;
    this.setState({allUsers:latestUsers,editIndex:null});
    this.clearForm()
  };
  render(){
    return (
    <div>
       <form>
          <h2>REGISTRATION DETAILS</h2>{" "}<br />
          <label htmlFor="">ID:</label>
          <input  type="number" placeholder="id"  name="id"  value={this.state.person.id}  onChange={(e) => {this.handleChange(e);}} disabled/>{" "}
          <br />
          <br />
          <label htmlFor="">UNIVERSITY:</label>
          <input  type="text" placeholder="university"  name="university"  value={this.state.person.university}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">INSTITUTE:</label>
          <input   type="text" placeholder="institute" name="institute"  value={this.state.person.institute}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">USERNAME:</label>  
          <select name="branch" value={this.state.person.branch}  onChange={(e) => {this.handleChange(e); }}>
                <option> -----select---</option>
                <option> CIVIL ENGINEERING</option>
                <option> CSE </option>
                <option> EEE</option>
                <option> ECE</option>
            </select>
          <br />
          <br />
          <label htmlFor="">DEGREE:</label>
          <select name="degree" value={this.state.person.degree} onChange={(e) => {this.handleChange(e);}} >
                <option > -----select---</option>
                <option > BACHELOR OF SCIENCE</option>
                <option >BACHELOR OF ARTS</option>
                <option >ASSOCIATE DEGREE</option>
                <option >BACHELOR OF TECHNOLOGY</option>
            </select>
            <input type="radio" name="graduated" checked={this.state.person.graduated === "pursuing"} value={"pursuing"} onChange={(e) => {this.handleChange(e);}}/>PURSUING
            <input type="radio" name="graduated" checked={this.state.person.graduated === "completed"} value={"completed"} onChange={(e) => {this.handleChange(e);}}/>COMPLETED
          <br />
          <br />
          <label htmlFor="">AVERAGE CPI:</label>
          <input  type="number" name="averagecpi" value={this.state.person.averagecpi} onChange={(e) => {this.handleChange(e);}} />{" "}
          <br />
          <br />
          <label htmlFor="">EXPERIENCE:</label>
          <input type="number" name="experience" value={this.state.person.experience}onChange={(e) => { this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">WEBSITE:</label>
          <input type="url" name="website" value={this.state.person.website} onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          {this.state.editIndex !== null ? 
          (
            <button type="button" onClick={this.updateUser} className="btn btn-primary">Update User</button>
          ) : 
          (
            <button type="button" onClick={this.addUser} className="btn btn-primary"> add User </button>
          )
          }  
        </form>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>UNIVESITY</th>
              <th>INSTITUTE</th>
              <th>BRANCH</th>
              <th>DEGREE</th>
              <th>GRADUATED</th>
              <th>AVERAGE CPI</th>
              <th>EXPERIENCE</th>
              <th>WEBSITE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.university}</td>
                <td>{usr.institute}</td>
                <td>{usr.branch}</td>
                <td>{usr.degree}</td>
                <td>{usr.graduated}</td>
                <td>{usr.averagecpi}</td>
                <td>{usr.experience}</td>
                <td>{usr.website}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => {this.editUser(usr, i);}}> Edit </button>{" "}
                </td>
                <td>
                <button  className="btn btn-danger" onClick={() => {this.deleteUser(usr,i);}}> Delete </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
      }
      async componentDidMount  () {
        let response =await axios.get("http://localhost:3001/allUsers1/")
    console.log(response)
    this.setState({ allUsers:response.data})
      }
    }    

  
