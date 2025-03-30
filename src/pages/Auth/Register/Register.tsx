import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { authLinks, navLinks } from '../../../common/constants/NAV_LINKS';
import { ValidatorErrorsRegister } from '../../../common/models/Auth/Validators';
import { setUser } from '../../../common/services/Store/Slices/authSlice';
import { authService } from '../../../common/services/authService';
import styles from '../Auth.module.scss';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  // ### Erreurs ### //
  const [errorsForm, setErrorsForm] = useState<ValidatorErrorsRegister | null>({
    email: null,
    username: null,
    password: null,
  });

  const navigate = useNavigate();

  // ### Modification du titre de la page ### //
  useEffect(() => {
    document.title = 'Tash | Sign up';
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorsForm(null);

    // ### Vérification du formulaire ### //
    const validationErrors = authService.validateRegister(
      email,
      username,
      password,
      confirmPassword
    );
    setErrorsForm(validationErrors);

    // ### Si erreur alors on abandonne ### //
    if (validationErrors != null) {
      return;
    }

    try {
      // ### Envoi des données du formulaire ### //
      const { token, user } = await authService.register(
        email,
        username,
        password,
        confirmPassword
      );
      dispatch(setUser({ token, user }));
      navigate(navLinks.home.href);
    } catch (error: any) {
      setErrorsForm(error.message);
    }
  };

  return (
    <main className={styles.container_auth}>
      <img
        src={'/assets/images/others/connexion-bg.png'}
        className={styles.background}
        alt="background"
      />
      <div className={styles.form_wrap}>
        <div className={styles.form_container}>
          <img className={styles.logo} src="/assets/images/others/logo-black.png" alt="logo" />
          <h1>Create an Account</h1>

          <p className={styles.description}>
            Sign up now to collaborate with your team, track tasks, and achieve your goals—all in
            one place!
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errorsForm?.email ? styles.error_input : ''}
              aria-invalid={errorsForm?.email ? 'true' : 'false'}
              aria-describedby={errorsForm?.email ? 'email-error' : undefined}
              required
            />
            {errorsForm?.email && (
              <span id="email-error" role="alert" className={styles.error_text}>
                {errorsForm.email}
              </span>
            )}

            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className={errorsForm?.username ? styles.error_input : ''}
              required
              aria-invalid={errorsForm?.username ? 'true' : 'false'}
              aria-describedby={errorsForm?.username ? 'username-error' : undefined}
            />

            {errorsForm?.username && (
              <span id="username-error" role="alert" className={styles.error_text}>
                {errorsForm.username}
              </span>
            )}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errorsForm?.password ? styles.error_input : ''}
              required
              aria-invalid={errorsForm?.password ? 'true' : 'false'}
              aria-describedby={errorsForm?.password ? 'password-error' : undefined}
            />

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errorsForm?.password ? styles.error_input : ''}
              required
              aria-invalid={errorsForm?.password ? 'true' : 'false'}
              aria-describedby={errorsForm?.password ? 'confirm-password-error' : undefined}
            />

            {errorsForm?.password && (
              <span id="confirm-password-error" role="alert" className={styles.error_text}>
                {errorsForm.password}
              </span>
            )}
            <button type="submit" aria-label="Sign up for an account">
              Sign Up
            </button>

            <p className={styles.switch}>
              Already registered ? <Link to={authLinks.login.href}>Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
