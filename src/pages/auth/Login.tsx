import { Link } from "react-router-dom";
import styles from "./auth.module.css";

export default function Login() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2>Login</h2>
        <form>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
            <button type="submit">Login</button>
          </div>
        </form>

        <p>
          Not a member? <Link to={"/register"}>Signup</Link>
        </p>
      </div>
    </div>
  );
}
