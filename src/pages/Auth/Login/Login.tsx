import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { authLinks } from '../../../common/constants/NAV_LINKS';
import { ValidatorErrorsLogin } from '../../../common/models/Auth/Validators';
import { setUser } from '../../../common/services/Store/Slices/authSlice';
import { authService } from '../../../common/services/authService';
import styles from '../Auth.module.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ### Erreurs ### //
  const [errorsForm, setErrorsForm] = useState<ValidatorErrorsLogin | null>({
    email: null,
    password: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ### Modification du titre de la page ### //
  useEffect(() => {
    document.title = 'Tash | Sign in';
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorsForm(null);

    // ### Vérification du formulaire ### //
    const validationErrors = authService.validateLogin(email, password);
    setErrorsForm(validationErrors);

    // ### Si erreur alors on abandonne ### //
    if (validationErrors !== null) {
      return;
    }

    try {
      // ### Envoi des données du formulaire ### //
      const { token, user } = await authService.login(email, password);

      // ### Sauvegarde des données renvoyées par l'API ### //
      dispatch(setUser({ token, user }));
      navigate('/');
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

          <h1>Welcome back!</h1>

          <p className={styles.description}>
            Log in to access your account and continue where you left off. We're glad to have you
            back on Tash!
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              id="email"
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
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errorsForm?.password ? styles.error_input : ''}
              aria-invalid={errorsForm?.password ? 'true' : 'false'}
              aria-describedby={errorsForm?.password ? 'password-error' : undefined}
              required
            />

            {errorsForm?.password && (
              <span id="password-error" role="alert" className={styles.error_text}>
                {errorsForm.password}
              </span>
            )}

            <button type="submit" aria-label="Sign in to your account">
              Sign In
            </button>

            <p className={styles.switch}>
              Don't have an account yet ? <Link to={authLinks.register.href}>Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
