import { Component } from "react";
import Login from "../Login";

class HomePage extends Component {
  render() {
    const { myValue } = this.props
    return <div>Привет {myValue}</div>
  }
}

export default HomePage;
