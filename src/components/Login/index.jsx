import { useState } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
function Login(props) {
  const [inputValue, setInputValue] = useState('');
  const valueSetter = (e) => {
    setInputValue(e.target.value)
  }
  const changeName = () => {
    const {nameCreator} = props;
    nameCreator(inputValue);
  }
  return (
    <div className={styles.loginBox}>
      <h2>Login</h2>
      <form>
        <div className={styles.userBox}>
          <input onChange={valueSetter} value = {inputValue} type="text"  />
          <label>Enter your Name</label>
        </div>
      
        <Link onClick={changeName} to="/Home">
          <span />
          <span />
          <span />
          <span />
          Submit
        </Link>
      </form>
    </div>
  );
}
export default Login;
