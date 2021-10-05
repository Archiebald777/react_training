import { useState } from "react";
import styles from "./Login.module.scss";

function Login(props) {
const [newName, setName] = useState(null);
const changeName = ({target: {value}}) => {
  setName(value)
}
  return (
    <div className={styles.loginBox}>
      <h2>Login</h2>
      <form>
        <div className={styles.userBox}>
          <input onChange={changeName} value={newName} type="text" name required />
          <label>Username</label>
        </div>
        <div className={styles.userBox}>
          <input type="password" name required />
          <label>Password</label>
        </div>
        <a href="/Home">
          <span />
          <span />
          <span />
          <span />
          Submit
        </a>
      </form>
    </div>
  );
}
export default Login;
