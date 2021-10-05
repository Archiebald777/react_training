import { Component } from "react";
import styles from "./Login.module.scss";
class Login extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form>
          <div className={styles.userBox}>
            <input
              onChange={myVaalue}
              type="text"
              name
              required
            />
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
}

export default Login;
