import {
  SigninFormProps,
  SignupFormProps,
  ValidationErrors,
} from "../models/auth";
import { apiKey, apiURL } from "../utils/api";
import axios, { AxiosResponse } from "axios";

export class AuthService {
  // ----------------------------- //
  // -----------signin------------ //
  // ----------------------------- //
  async signin(userData: SigninFormProps): Promise<AxiosResponse> {
    try {
      const response = await axios.post(`${apiURL}/signin`, userData, {
        headers: {
          Authorization: apiKey + ":",
        },
      });
      return response;
    } catch (error: any) {
      throw new Error(`Error signing in: ${error.message}`);
    }
  }

  // ----------------------------- //
  // -----------signup------------ //
  // ----------------------------- //
  async signup(userData: SignupFormProps): Promise<AxiosResponse> {
    try {
      const response = await axios.post(`${apiURL}/signup`, userData, {
        headers: {
          Authorization: apiKey + ":",
        },
      });
      return response;
    } catch (error: any) {
      throw new Error(`Error signing up: ${error.message}`);
    }
  }

  // ------------------------------------ //
  // -----------resetPassword------------ //
  // ------------------------------------ //
  async resetPassword(userData: SigninFormProps): Promise<AxiosResponse> {
    try {
      const response = await axios.post(`${apiURL}/reset-password`, userData, {
        headers: {
          Authorization: apiKey + ":",
        },
      });
      return response;
    } catch (error: any) {
      throw new Error(`Error signing up: ${error.message}`);
    }
  }

  // ------------------------------------ //
  // -----------validateLogin------------ //
  // ------------------------------------ //
  validateLogin(loginForm: SigninFormProps): ValidationErrors {
    const errors: ValidationErrors = {};
    if (!loginForm.login) {
      errors.username?.push("Username is required");
    }
    if (!loginForm.password) {
      errors.password?.push("Password is required");
    }
    return errors;
  }

  // -------------------------------------------- //
  // -----------validateResetPassword------------ //
  // -------------------------------------------- //
  validateResetPassword(loginForm: SigninFormProps): ValidationErrors {
    const errors: ValidationErrors = {};
    if (!loginForm.login) {
      errors.email?.push("Email is required");
    }
    if (!loginForm.password) {
      errors.password?.push("Password is required");
    }
    return errors;
  }

  // ------------------------------------- //
  // -----------validateSignup------------ //
  // ------------------------------------- //
  validateSignup(signupForm: SignupFormProps): ValidationErrors {
    const errors: ValidationErrors = {};
    if (!signupForm.username) {
      errors.username?.push("Username is required");
    }
    if (!signupForm.email) {
      errors.email?.push("Email address is required");
    }
    if (!signupForm.password) {
      errors.password?.push("Password is required");
    } else if (signupForm.password.length < 8) {
      errors.password?.push("Password must be at least 8 characters long");
    }
    return errors;
  }
}
