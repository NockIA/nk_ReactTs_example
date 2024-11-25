import axios from "axios";
import { ValidationErrorsLogin } from "../../models/auth/validators";
import { ValidationErrorsRegister } from "../../models/auth/validators";

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

/**
 * Fonction de connexion à un compte
 *
 * @param {string} email
 * @param {string} password
 */
export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_ENDPOINT}/login`, {
    email,
    password,
  });
  return response.data;
};

/**
 * Fonction de validation du form de Login
 *
 * @param {string} email
 * @param {string} password
 */
export const validateLogin = (
  email: string,
  password: string
): ValidationErrorsLogin => {
  const errors: ValidationErrorsLogin = {
    emailError: false,
    passwordError: false,
  };

  if (!email.includes("@")) {
    errors.emailError = true;
  }

  if (password.length < 6) {
    errors.passwordError = true;
  }

  return errors;
};

/**
 * Fonction de création de compte
 *
 * @param {string} email
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} password
 * @param {string} confirmPassword
 */
export const register = async (
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  confirmPassword: string
) => {
  const response = await axios.post(`${API_ENDPOINT}/register`, {
    email,
    firstname,
    lastname,
    password,
    confirmPassword,
  });
  return response.data;
};

/**
 * Fonction de validation du form d'inscription
 *
 * @param {string} email
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} password
 * @param {string} confirmPassword
 */
export const validateRegister = (
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  confirmPassword: string
): ValidationErrorsRegister => {
  const errors: ValidationErrorsRegister = {
    emailError: false,
    firstnameError: false,
    lastnameError: false,
    passwordError: false,
    confirmPasswordError: false,
  };

  if (!email.includes("@")) {
    errors.emailError = true;
  }

  if (firstname.trim().length === 0) {
    errors.firstnameError = true;
  }

  if (lastname.trim().length === 0) {
    errors.lastnameError = true;
  }

  if (password.length < 6) {
    errors.passwordError = true;
  }

  if (password !== confirmPassword) {
    errors.confirmPasswordError = true;
  }

  return errors;
};

/* ########################################################
      A SUPPRIMER LORS DE L'UTILISATION DU TEMPLATE
   ######################################################## */

/**
 * Fonction de test de connexion
 *
 * @param {string} email
 * @param {string} password
 */
export const fakeLogin = async (email: string, password: string) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      email,
      password,
    }
  );

  return {
    token: "fake-jwt-token",
    user: { id: response.data.id, email },
  };
};



/**
 * Fonction de test d'inscription
 *
 * @param {string} email
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} password
 * @param {string} confirmPassword
 */
export const fakeRegister = async (
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  confirmPassword: string
) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      email,
      firstname,
      lastname,
      password,
      confirmPassword,
    }
  );

  return {
    success: true,
    user: {
      id: response.data.id,
      email,
      firstname,
      lastname,
    },
  };
};
