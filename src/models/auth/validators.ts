// ### Validators de connexion ### //
export interface ValidationErrorsLogin {
  emailError: boolean;
  passwordError: boolean;
}

// ### Validators d'inscription ### //
export interface ValidationErrorsRegister {
  emailError: boolean;
  firstnameError: boolean;
  lastnameError: boolean;
  passwordError: boolean;
  confirmPasswordError: boolean;
}
