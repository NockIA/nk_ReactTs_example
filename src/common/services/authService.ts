import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { ValidatorErrorsLogin, ValidatorErrorsRegister } from '../models/Auth/Validators';
import { logout as logoutRedux } from './Store/Slices/authSlice';
import axiosInstance from './axiosInstance';

const isDev = import.meta.env.MODE === 'development';

export const authService = {
  /**
   * Fonction de connexion à un compte
   *
   * @param {string} email
   * @param {string} password
   */
  login: async (email: string, password: string) => {
    try {
      if (isDev) {
        console.log('[DEV MODE] Login simulation');
        Cookies.set('tashToken', 'dev-token', {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
        });
        return { user: { email, username: 'DevUser' } };
      }

      const response = await axiosInstance.post(`/login`, {
        email,
        password,
      });

      if (response.status !== 200) {
        throw new Error('An error occurred during login.');
      }

      Cookies.set('tashToken', response.data.token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict',
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  },

  /**
   * Fonction de création de compte
   *
   * @param {string} email
   * @param {string} username
   * @param {string} password
   * @param {string} confirmPassword
   */
  register: async (email: string, username: string, password: string, confirmPassword: string) => {
    try {
      if (isDev) {
        console.log('[DEV MODE] Register simulation');
        Cookies.set('tashToken', 'dev-token', {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
        });

        return { user: { email, username } };
      }

      const response = await axiosInstance.post(`/register`, {
        email,
        username,
        password,
        confirmPassword,
      });

      if (response.status !== 201) throw new Error('Registration failed.');

      Cookies.set('tashToken', response.data.token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict',
      });

      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  },

  /**
   * Fonction de déconnexion
   */
  logout: (dispatch: Dispatch<UnknownAction>) => {
    Cookies.remove('tashToken');
    dispatch(logoutRedux());
  },

  /**
   * Fonction pour récupérer le jeton d'authentification depuis les cookies
   */
  getAuthToken: () => {
    return Cookies.get('tashToken');
  },

  /**
   * Fonction de validation du form de Login
   *
   * @param {string} email
   * @param {string} password
   */
  validateLogin: (email: string, password: string): ValidatorErrorsLogin | null => {
    let isValid = true;

    const errors: ValidatorErrorsLogin = {
      email: null,
      password: null,
    };

    if (!email) {
      errors.email = 'Email required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid.';
      isValid = false;
    }

    if (!authService.isValidPassword(password)) {
      errors.password =
        'The password must contain at least 8 characters, one upper case, one lower case, one number and one special character';
      isValid = false;
    }

    return isValid ? null : errors;
  },

  /**
   * Fonction de validation du form d'inscription
   *
   * @param {string} email
   * @param {string} username
   * @param {string} password
   * @param {string} confirmPassword
   */
  validateRegister: (
    email: string,
    username: string,
    password: string,
    confirmPassword: string
  ): ValidatorErrorsRegister | null => {
    let isValid = true;
    const errors: ValidatorErrorsRegister = {
      email: null,
      username: null,
      password: null,
    };

    if (!email) {
      isValid = false;
      errors.email = 'Email required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      // Vérifie la validité de l'email avec un @ et un .
      isValid = false;
      errors.email = 'Email address is invalid.';
    }

    if (username.trim().length === 0) {
      // Vérifie que le prénom n'est pas vide
      isValid = false;
      errors.username = 'Username required.';
    } else if (!/^[a-zA-ZÀ-ÿ' -]+$/.test(username)) {
      // Vérifie que le prénom ne contient que des lettres
      isValid = false;
      errors.username = 'Username must contain only letters.';
    }

    if (!authService.isValidPassword(password)) {
      isValid = false;
      errors.password =
        'The password must contain at least 8 characters, one upper case, one lower case, one number and one special character';
    }

    if (password !== confirmPassword) {
      isValid = false;
      errors.password = 'Passwords do not match.';
    }

    return isValid ? null : errors;
  },

  /**
   * Fonction de validation du mot de passe
   *
   * @param {string} password
   */
  isValidPassword: (password: string): boolean => {
    if (password.length < 8) {
      return false;
    }
    const hasUpper = /[A-Z]/.test(password); // Vérifie la présence de majuscules
    const hasLower = /[a-z]/.test(password); // Vérifie la présence de minuscules
    const hasDigit = /[0-9]/.test(password); // Vérifie la présence de chiffres
    const hasSpecial = /[!@#~$%€^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password); // Vérifie la présence de caractères spéciaux

    return hasUpper && hasLower && hasDigit && hasSpecial;
  },
};
