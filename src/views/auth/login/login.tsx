import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../services/auth/auth-slice";
import {
  fakeLogin,
  login,
  validateLogin,
} from "../../../services/auth/auth-service";
import styles from "../auth.module.scss";
import { ValidationErrorsLogin } from "../../../models/auth/validators";
import { Link } from "react-router-dom";
import { authLinks } from "../../../constants/nav-links";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ### Erreurs ### //
  const [apiError, setApiError] = useState<string | null>(null);
  const [errorsForm, setErrorsForm] = useState<ValidationErrorsLogin>({
    emailError: false,
    passwordError: false,
  });

  // ### Modification du titre de la page ### //
  useEffect(() => {
    document.title = "Nk | Connexion";
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // ### Vérification du formulaire ### //
    const validationErrors = validateLogin(email, password);
    setErrorsForm(validationErrors);

    // ### Si erreur alors on abandonne ### //
    if (validationErrors.emailError || validationErrors.passwordError) {
      return;
    }
    try {
      // ### Envoi des données du formulaire ### //
      
      const { token, user } = await fakeLogin(email, password); // A remplacer par la fonction login ci-dessous
      // const { token, user } = await login(email, password);

      // ### Sauvegarde des données renvoyées par l'API ### //
      dispatch(setUser({ token, user }));
      navigate("/");
    } catch (error) {
      setApiError(
        `Une erreur inattendue s'est produite. Veuillez réessayer. Err : (${error}).`
      );
    }
  };

  return (
    <main className={styles.authPage}>
      <div className={styles.authForm}>
        <h1>
          Connectez-vous à <br />
          <span>Nk React.Ts template</span>
        </h1>

        <p className={styles.description}>
          Logoden biniou degemer mat an penn ar bed puñs, merc’h porpant
          Mederieg rak deskiñ ha distreiñ vunutenn doug, drezout setu Rosporden
          tevel an flourañ doujañs. Mui neud yac’h an pepr chadenn bez pemp
          Pleiber-Krist, Plouezoc’h ugnet
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errorsForm.emailError ? styles.errorInput : ""}
            required
          />
          {errorsForm.emailError && (
            <span className={styles.errorMessage}>Email invalide</span>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errorsForm.passwordError ? styles.errorInput : ""}
            required
          />

          {errorsForm.passwordError && (
            <span className={styles.errorMessage}>
              Le mot de passe doit contenir au moins 6 caractères
            </span>
          )}

          <button type="submit">Login</button>

          {apiError && <span className={styles.errorMessage}>{apiError}</span>}

          <p className={styles.account}>
            Vous n'avez pas de compte ?{" "}
            <Link to={authLinks[1].href}>S'inscrire</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
