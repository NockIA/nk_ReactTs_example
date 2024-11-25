import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../auth.module.scss";
import {
  fakeRegister,
  register,
  validateRegister,
} from "../../../services/auth/auth-service";
import { authLinks } from "../../../constants/nav-links";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ### Erreurs ### //
  const [apiError, setApiError] = useState<string | null>(null);
  const [errorsForm, setErrorsForm] = useState({
    emailError: false,
    firstnameError: false,
    lastnameError: false,
    passwordError: false,
    confirmPasswordError: false,
  });
  const navigate = useNavigate();

  // ### Modification du titre de la page ### //
  useEffect(() => {
    document.title = "Nk | Inscription";
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // ### Vérification du formulaire ### //
    const validationErrors = validateRegister(
      email,
      firstname,
      lastname,
      password,
      confirmPassword
    );
    setErrorsForm(validationErrors);

    // ### Si erreur alors on abandonne ### //
    if (
      validationErrors.emailError ||
      validationErrors.firstnameError ||
      validationErrors.lastnameError ||
      validationErrors.passwordError ||
      validationErrors.confirmPasswordError
    ) {
      return;
    }

    try {
      // ### Envoi des données du formulaire ### //
      await fakeRegister(email, firstname, lastname, password, confirmPassword); // A remplacer par la fonction register ci-dessous
      //   await register(email, firstname, lastname, password, confirmPassword);

      navigate("/login");
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
          Inscrivez-vous sur <br />
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

          <div className={styles.doubleInputs}>
            <input
              type="text"
              placeholder="Prénom"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className={errorsForm.firstnameError ? styles.errorInput : ""}
              required
            />
            {errorsForm.firstnameError && (
              <span className={styles.errorMessage}>Prénom requis</span>
            )}

            <input
              type="text"
              placeholder="Nom"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className={errorsForm.lastnameError ? styles.errorInput : ""}
              required
            />
            {errorsForm.lastnameError && (
              <span className={styles.errorMessage}>Nom requis</span>
            )}
          </div>

          <input
            type="password"
            placeholder="Mot de passe"
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

          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={errorsForm.confirmPasswordError ? styles.errorInput : ""}
            required
          />
          {errorsForm.confirmPasswordError && (
            <span className={styles.errorMessage}>
              Les mots de passe ne correspondent pas
            </span>
          )}

          <button type="submit">S'inscrire</button>

          {apiError && <span className={styles.errorMessage}>{apiError}</span>}

          <p className={styles.account}>
            Vous avez déjà un compte ?{" "}
            <Link to={authLinks[0].href}>Se connecter</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
