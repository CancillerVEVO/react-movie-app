import { Link } from "react-router-dom";
import styles from "./auth.module.css";

export default function Login() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <header>
          <h2>Login</h2>
        </header>

        <form>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
            <button type="submit">Login</button>
          </div>
        </form>

        <footer>
          <p>
            Not a member?{" "}
            <Link className={styles.link} to={"/register"}>
              Signup
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
