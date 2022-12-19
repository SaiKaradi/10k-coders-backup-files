import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super();
  }
  render() {
    const {handleChange,message} = this.props

    return (
      <div>
        <button onClick={handleChange}>Change Message</button>
        <p
          style={{
            background: "black",
            color: "blue",
            padding: 20,
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      </div>
    );
  }
}
export default Header;