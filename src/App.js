import React from "react";
import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";


function App(){
  
return (
  <BrowserRouter>
    <div>
      <Route exact path="/login">
        <Login  />
      </Route>
      <Route path="/Home">
        <HomePage />
      </Route>
    </div>
  </BrowserRouter>
)
}
export default App;
