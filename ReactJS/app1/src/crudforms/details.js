import React ,{Component} from "react" ;
export default class details extends Component{
    constructor(props){
        super(props);
        this.state={
            details:{
                street:"",
                city:"",
                zipcode:"",
                country:""

            },
            alldetails:[
                {
                    street:"",
                    city:"",
                    state:"",
                    zipcode:"",
                    country:"",
                },
            ],
            editIndex:null,
        };
    }
    handlechange=(e)=>{
        var newdetails={...this.state.address};
        newdetails[e.target.name]=e.target.value;
        this.setState({address:newdetails});
    };
    adddetails = () => {
        
        var newalldetails = [...this.state.alldetails];
       newalldetails.push(this.state.details);
        this.setState({ alldetails: newalldetails });
        this.clearForm();
        console.log("add details");
      };
      clearForm=()=>{
        var presentdetails={
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:"",
        };
        this.setState({details:presentdetails});
      };
    editdetails = (dets, i) => {
        this.setState({ details: dets, editIndex: i });
      };
    
      deletedetails = (dets) => {
        var newalldetails = this.state.alldetails.filter(
          (mydets) => mydets.street !== dets.street
        );
        this.setState({ allUsers: newalldetails });
      };
    
      updatedetails = () => {
        var newdetails = [...this.state.alldetails];
       newdetails[this.state.editIndex] = this.state.details;
        this.setState({ alldetails: newdetails});
        this.clearForm()
      };
      render(){
        return(
            <div>
                <label htmlFor="">street:</label>
                <input type="text" name="street" value={this.state.details.street} onChange={(e)=>{this.handlechange(e);}}/>{""}
                <br/><br/>
                <label htmlFor="">city:</label>
                <input type="text" name="city" value={this.state.details.street} onChange={(e)=>{this.handlechange(e);}}/>{""}
                <br/><br/>
                <label htmlFor="">state:</label>
                <input type="text" name="state" value={this.state.details.street} onChange={(e)=>{this.handlechange(e);}}/>{""}
                <br/><br/>
                <label htmlFor="">zipcode:</label>
                <input type="text" name="zipcode" value={this.state.details.street} onChange={(e)=>{this.handlechange(e);}}/>{""}
                <br/><br/>
                <label htmlFor="">country:</label>
                <input type="text"
                 name="country" 
                 value={this.state.details.street} 
                 onChange={(e)=>{this.handlechange(e);
                 }}/>{""}
                <br/><br/>
                {this.state.editIndex !== null ? (
            <button
              type="button"
              onClick={this.updatedetails}
              className="btn btn-primary"
            >
              Update details
            </button>
          ) : (
            <button
              type="button"
              onClick={this.adddetails}
              className="btn btn-primary"
            >
              Add details
            </button>
          )}
          <table className="table table-striped">
            <thead>
              <tr>
                <th>street</th>
                <th>city</th>
                <th>state</th>
                <th>zipcode</th>
                <th>country</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.alldetails.map((dets, i) => (
                <tr key={i}>
                  <td>{dets.street}</td>
                  <td>{dets.city}</td>
                  <td>{dets.state}</td>
                  <td>{dets.zipcode}</td>
                  <td>{dets.country}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        this.editdetails(dets, i);
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
                        this.deletedetails(dets);
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
        )
      }

}

