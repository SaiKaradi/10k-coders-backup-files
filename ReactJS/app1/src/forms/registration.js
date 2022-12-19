import React, { Component } from "react";


export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registrationform: {
        userName: "",
        password: "",
        email: "",
        gender: "",
        dateOfBirth: "",
      },
      allregistration: [
        {
          userName: "",
          password: "",
          email: "",
          gender: "",
          dateOfBirth: "",
        },
      ],
      editIndex:null,
    };
  }
  handleChange = (e) => {
    let getregistration = { ...this.state.registrationform };
    getregistration[e.target.name] = e.target.value;
    this.setState({ registrationform: getregistration });
  };

  addregistration = ()=>{
    let newregistration = [...this.state.allregistration]
    newregistration.push(this.state.registrationform)
    this.setState({allregistration:newregistration})
    this.clearForm()
  }
  clearForm = ()=>{
    let getNewregistration ={
      userName: "",
        password: "",
        email: "",
        gender: "",
        dateOfBirth: "",
    }
    this.setState({registrationform:getNewregistration})
  }

  deleteregistration= (reg)=>{
    let delregistration = this.state.allregistration.filter((myreg)=>myreg.userName !== reg.userName)
    this.setState({allregistration:delregistration})
  }

  editregistration = (reg,i)=>{
    this.setState({registrationform:reg,editIndex:i})
  }

  updateregistration = ()=>{
    let latestregistration = [...this.state.allregistration]
    latestregistration[this.state.editIndex] =this.state.registrationform
    this.setState({allregistration:latestregistration})
  }
  render() {
    return (
      <>
        <div>
          <form>
            <label htmlFor="">username : </label>
            <input
              type="text"
              name="userName"
              id=""
              value={this.state.registrationform.userName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="">password : </label>
            <input
              type="text"
              name="password"
              id=""
              value={this.state.registrationform.password}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="">email : </label>
            <input
              type="text"
              name="email"
              id=""
              value={this.state.registrationform.email}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="gender">gender : </label>
            <select
              name="gender"
              id="gender"
              value={this.state.registrationform.gender}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option value="select">select</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="others">others</option>
            </select>
            <br />
            <br />
            <label htmlFor="">dateOfBirth : </label>
            <input
              type="date"
              name="dateOfBirth"
              id=""
              value={this.state.registrationform.dateOfBirth}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            {/* <button
              type="button"
              className="btn btn-primary mb-3"
              onClick={this.addEmployee}
            >
              addEmployee
            </button> */}
          </form>
          {this.state.editIndex !== null  ? (
             <button
             type="button"
             className="btn btn-primary mb-3"
             onClick={this.updateregistration}
           >
            updateregistration
          
           </button>
          ):(
            <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={this.addregistration}
          >
           addregistration
          </button>
          )}

          <table className="table table-striped">
            <thead>
              <tr>
                <td>userName</td>
                <td>password</td>
                <td>email</td>
                <td>gender</td>
                <td>dateOfBirth</td>
                <td>edit</td>
                <td>delete</td>
              </tr>
            </thead>
            <tbody>
              {this.state.allregistration.map((reg, i) => (
                <tr key={i}>
                  <td>{reg.userName}</td>
                  <td>{reg.password}</td>
                  <td>{reg.email}</td>
                  <td>{reg.gender}</td>
                  <td>{reg.dateOfBirth}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        this.editregistration(reg, i);
                      }}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteregistration(reg);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
