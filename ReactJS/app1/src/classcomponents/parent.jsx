import Header from "./Header";

const { Component } = require("react");

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage:
        "Hello 10K Coders .. Welcome to React JS Training Sessions !!!",
      employee: {
        fname: "kuamr",
        email: "kumar@gmail.com",
        city: "guntur",
        role: "asian",
      },
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  // changeMessage(){
  //   // console.log("Hello from Normal Function")
  //   this.setState({welcomeMessage:"Hello ParentComp ... I am Changing You !!"})
  // }
  changeMessage = () => {
    this.setState({
      welcomeMessage: "Hello ParentComp ... I am Changing You !!",
    });
  };
  render() {
    const {welcomeMessage} = this.state
    return (
      <div>
        <h2>Welcome to Parent Component</h2>
        {/* <Header {...this.state}/> */}
        <Header
          message={welcomeMessage}
          handleChange={this.changeMessage}
        />
      </div>
    );
  }
}

export default ParentComponent;