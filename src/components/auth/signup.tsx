import "./sign.css";
import "../../styles/global.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../../services/auth_service";
import { SignupFormProps, ValidationErrors } from "../../models/auth";
import { Store } from "../../services/localstorage";
import icon from "/images/icons/icon.png";

const SignUp: React.FC = () => {
  const _store: Store = new Store("userData");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState<ValidationErrors | null>(null);
  const navigate = useNavigate();
  const _authService: AuthService = new AuthService();

  // --------------------------- //
  // -----------Send------------ //
  // --------------------------- //

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (password1 != password2) {
      setError({ password: ["Password do not match"] });
      return;
    } else {
      const userData: SignupFormProps = {
        username: username,
        email: email,
        password: password1,
      };
      const errors: ValidationErrors = _authService.validateSignup(userData);
      if (Object.keys(errors).length === 0) {
        try {
          const response = await _authService.signup(userData);
          if (response.data) {
            _store.save(response.data.jwt);
            navigate("/home");
          } else {
            setError({ other: ["Invalid credentials"] });
          }
        } catch (error: any) {
          setError({ other: ["An error occured while trying to signup"] });
        }
      } else {
        setError(errors);
      }
    }
  };

  return (
    <main className="container-sign flex-row" role="main">
      <section
        className="container-left-section flex-col"
        aria-label="App presentation"
      >
        <div className="flex-row container-logo">
          <img src={icon} />
          <h5>
            Aym<span>Labo</span>
          </h5>
        </div>
        <div className="flex-col container-content">
          <h2>Improve your aim</h2>
          <p>
            By playing to this game you will improve by 5 times your level in
            any shooting game
          </p>
        </div>
        <Link
          aria-label="Switch to signin"
          role="button"
          className="button-sign button-sign-white"
          to={"/"}
          tabIndex={5}
        >
          Sign In
        </Link>
      </section>
      <span className="separation-sign"></span>
      <section
        className="flex-col container-right-section"
        aria-label="SignIn section"
      >
        <div className="flex-col container-header-form ">
          <h1>Sign Up</h1>
          <h2>Create your account</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-col container-form"
          role="form"
          aria-label="Form signin"
        >
          <fieldset className="flex-col">
            <input
              aria-label="Input email"
              tabIndex={0}
              style={{
                borderColor: error?.email ? "var(--error-code)" : "transparent",
              }}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
            {error?.email && (
              <p aria-label="email error" className="error-message">
                {error.email}
              </p>
            )}
          </fieldset>
          <fieldset className="flex-col">
            <input
              aria-label="Input username"
              tabIndex={1}
              style={{
                borderColor: error?.username
                  ? "var(--error-code)"
                  : "transparent",
              }}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              type="text"
            />
            {error?.username && (
              <p aria-label="username error" className="error-message">
                {error.username}
              </p>
            )}
          </fieldset>
          <fieldset className="flex-col">
            <input
              aria-label="Input password"
              tabIndex={2}
              style={{
                borderColor: error?.password
                  ? "var(--error-code)"
                  : "transparent",
              }}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Password"
              type="password"
            />
            {error?.password && (
              <p aria-label="password error" className="error-message">
                {error.password}
              </p>
            )}
          </fieldset>
          <fieldset className="flex-col">
            <input
              aria-label="Input confirm password"
              tabIndex={3}
              style={{
                borderColor: error?.password
                  ? "var(--error-code)"
                  : "transparent",
              }}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm"
              type="password"
            />
            {error?.password && (
              <p aria-label="password error" className="error-message">
                {error.password}
              </p>
            )}
          </fieldset>

          <button
            tabIndex={4}
            onClick={() => handleSubmit}
            role="button"
            aria-label="submit signup form"
            className="button-sign-black button-sign"
          >
            Sign Up
          </button>
          {error?.other && (
            <p aria-label="others error" className="error-message">
              {error.other}
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default SignUp;