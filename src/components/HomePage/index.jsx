import Login from "../Login";
import { useState } from "react";

function HomePage(props){
  const [name, setNewName] = useState(null);
  const nameHandler = () => {
    setName(name + newName);
  };
return(
  <div>
    <p>Привет, {nameHandler} </p>
  </div>
)
}



export default HomePage;
