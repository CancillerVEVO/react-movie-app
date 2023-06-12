import { Link } from "react-router-dom";
import styles from "./auth.module.css";
import { loginRequest } from "./api";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <header>
          <h2>Login</h2>
        </header>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const formValues = {
              email: `${formData.get("email") ?? ""}`,
              password: `${formData.get("password") ?? ""}`,
            };

            try {
              const response = await loginRequest(formValues);
              console.log(response);
            } catch (error) {
              error instanceof Error
                ? setError(error.message)
                : console.error(error);
            }
          }}
        >
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

        {error ? (
          <div className={styles.errorContainer}>
            <ul className={styles.errorList}>
              <li>Credenciales Invalidas</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
