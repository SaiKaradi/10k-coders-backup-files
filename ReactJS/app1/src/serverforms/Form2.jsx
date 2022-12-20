import { Component } from "react";
import axios from 'axios'
export default class Form2 extends Component{
    constructor(props){
        super(props);
        this.state={
              person:{
                id:"",
               username:"",
               password:"",
               emailaddress:"",
               dateofbirth:"",
               height:"",
               weight:"",
              },
               allUsers: [
              //   {
              //       username:"",
              //  password:"",
              //  emailaddress:"",
              //  dateofbirth:"",
              //  height:"",
              //  weight:"",
              //   },
              //   {
              //       username:"",
              //       password:"",
              //       emailaddress:"",
              //       dateofbirth:"",
              //       height:"",
              //       weight:""
              //   },
              //   {
              //       username:"",
              //  password:"",
              //  emailaddress:"",
              //  dateofbirth:"",
              //  height:"",
              //  weight:""
              //   },
              //   {
              //       username:"",
              //  password:"",
              //  emailaddress:"",
              //  dateofbirth:"",
              //  height:"",
              //  weight:""
              //   },
              //   {
              //       username:"",
              //       password:"",
              //       emailaddress:"",
              //       dateofbirth:"",
              //       height:"",
              //       weight:""
              //   }
               ],
              editIndex: null,
            
        };
    }
    handleChange = (e) => {
      var newPerson = { ...this.state.person };
      newPerson[e.target.name] = e.target.value;
      this.setState({ person: newPerson });
    };
    addUser = () => {
      axios({
        method:"post",
        url:"http://localhost:3201/allUsers4/",
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
        username:"",
        password:"",
        emailaddress:"",
        dateofbirth:"",
        height:"",
        weight:"",
      };
      this.setState({ person: newForm });
    };
  
    editUser = (usr, i) => {
      this.setState({ person: usr, editIndex: i });
    };
  
    deleteUser = (usr,id) => {
      console.log(usr,id)
      var number=id+1;
      axios.delete("http://localhost:3201/allUsers4/"+number).then((res)=> this.componentDidMount())
  

      // var latestUsers = this.state.allUsers.filter(
      //   (myUser) => myUser.username !== usr.username
      // );
      // this.setState({ allUsers: latestUsers });
    };
  
    updateUser = () => {
      var number = this.state.editIndex+1;
    axios({
      method:"put",
      url:"http://localhost:3201/allUsers4/"+number,
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
              <h2>PINA LOVE.COM</h2>
            <label htmlFor="">ID:</label>
          <input  type="number" placeholder="id"  name="id"  value={this.state.person.id}  onChange={(e) => {this.handleChange(e);}} disabled/>{" "}
          <br />
          <br />
          <label htmlFor="">USER NAME:</label>
          <input  type="text"  placeholder="Enter your username" name="username"  value={this.state.person.username}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">PASSWORD:</label>
          <input  type="text"  placeholder="Enter your password" name="password"  value={this.state.person.password}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">EMAIL ADDRESS:</label>
          <input  type="email" placeholder="Enter your email"  name="dateofbirth"  value={this.state.person.emailaddress}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <select name="Iam a Man">
                <option value=""> -----select---</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
          <br />
          <br />
          <select name="I want to find women">
                <option value=""> -----select---</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
          <br />
          <br />
          <label htmlFor="">DATE OF BIRTH:</label>
          <input  type="date"   name="dateofbirth"  value={this.state.person.dateofbirth}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">HEIGHT:</label>                                        
          <input  type="number" placeholder="height" name="height" value={this.state.person.height}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">WEIGHT:</label>                                        
          <input  type="number" placeholder="weight" name="weight" value={this.state.person.weight}  onChange={(e) => {this.handleChange(e);}}/>{" "}
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
            <table className="table table-hover table-secondary">
            <thead>
            <tr>
              <th>ID</th>
              <th>USERNAME</th>
              <th>PASSWORD</th>
              <th>EMAIL ADDRESS</th>
              <th>DATE OF BIRTH</th>
              <th>HEIGHT</th>
              <th>WEIGHT</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.username}</td>
                <td>{usr.password}</td>
                <td>{usr.emailaddress}</td>
                <td>{usr.dateofbirth}</td>
                <td>{usr.height}</td>
                <td>{usr.weight}</td>
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
        )
    }
    async componentDidMount  () {
      let response =await axios.get("http://localhost:3201/allUsers4/")
  console.log(response)
  this.setState({ allUsers:response.data})
    }
}