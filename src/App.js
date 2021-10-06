import React from "react";
import { BrowserRouter,Route} from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { useState } from "react";

function App(){
  const [name, setName] = useState('');
  const nameSetter = (newName) => {
    setName(newName)
  }
return (
  <BrowserRouter>
    <div>
      <Route exact path="/login">
        <Login nameCreator = {nameSetter} />
      </Route>
      <Route path="/Home">
        <HomePage name = {name} />
      </Route>
    </div>
  </BrowserRouter>
)
}
export default App;
