import React, { Component } from 'react'
export default class address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fname: "",
                lname: "",
                email: "",
            },
            editIndex: null,
        };
    }

    render() {
        return (
            <div>
                <h1><span>details</span></h1>
                <form>
                    <label htmlFor="">FirstName:</label>
                    <input type="text" name="fname" value={this.state.fname} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">LastName</label>
                    <input type="text" name="lname" value={this.state.lname} onChange={(e) => { this.handleChange(e) }} />  <br />
                    <label htmlFor="">email</label>
                    <input type="text" name="email" value={this.state.email} onChange={(e) => { this.handleChange(e) }} />  <br />

                    <button type="button" onClick={this.adduser}>AddUser</button>
                    <button type="button" onClick={this.edituser}>Edit</button>


                </form>
            </div>

        )
    }
}
