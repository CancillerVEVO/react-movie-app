import { Link } from "react-router-dom";
import styles from "./auth.module.css";

export default function Register() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2>Register</h2>
        <form>
          <div className={styles.inputContainer}>
            <label htmlFor="nombre">Nombre:</label>
            <input name="nombre" type="text" required />
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" required />
            <label htmlFor="password">Contraseña:</label>
            <input name="password" type="password" required />
            <label htmlFor="passwordConfirmation">Confirmar Contraseña:</label>
            <input name="passwordConfirmation" type="password" required />
            <button type="submit">Register</button>
          </div>
        </form>

        <p>
          Alredy have an account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
}
