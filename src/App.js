import React from "react";
import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handler = (myValue) => {
    this.setState({
      inputValue: myValue,
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/login">
            <Login myValue={(e) => this.handler(e.target.value)} />
          </Route>
          <Route path="/Home">
            <HomePage />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
