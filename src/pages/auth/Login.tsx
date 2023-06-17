import { Link } from "react-router-dom";
import styles from "./auth.module.css";
import { useLogin } from "./hooks/useLogin";

export default function Login() {
  const { mutate, isError } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const credentials = {
      email: `${formData.get("email") ?? ""}`,
      password: `${formData.get("password") ?? ""}`,
    };

    mutate(credentials);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <header>
          <h2>Login</h2>
        </header>

        <form onSubmit={handleSubmit}>
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

        {isError ? (
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
