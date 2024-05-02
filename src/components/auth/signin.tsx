import "./sign.css";
import "../../styles/global.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../../services/auth_service";
import { SigninFormProps, ValidationErrors } from "../../models/auth";
import { Store } from "../../services/localstorage";
import icon from "/images/icons/icon.png";

const SignIn: React.FC = () => {
  const _store: Store = new Store("userData");

  const [username, setUserName] = useState("");
  const [password1, setPassword1] = useState("");
  const _authService: AuthService = new AuthService();
  const [error, setError] = useState<ValidationErrors | null>(null);
  const navigate = useNavigate();

  // --------------------------- //
  // -----------Send------------ //
  // --------------------------- //

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const userData: SigninFormProps = {
      login: username,
      password: password1,
    };
    const errors: ValidationErrors = _authService.validateLogin(userData);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await _authService.signin(userData);
        if (response.data) {
          _store.save(response.data.jwt);
          navigate("/home");
        } else {
          setError({ other: ["Invalid credentials"] });
        }
      } catch (error: any) {
        setError({ other: ["An error occured while trying to signin"] });
      }
    } else {
      setError(errors);
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
          aria-label="Switch to signup"
          role="button"
          tabIndex={5}
          className="button-sign button-sign-white"
          to={"/signup"}
        >
          Sign Up
        </Link>
      </section>
      <span className="separation-sign"></span>
      <section
        className="flex-col container-right-section"
        aria-label="SignIn section"
      >
        <div className="flex-col container-header-form ">
          <h1>Sign In</h1>
          <h2>Connect to your account</h2>
        </div>
        <form
          role="form"
          aria-label="Form signin"
          className="flex-col container-form"
          onSubmit={handleSubmit}
        >
          <fieldset className="flex-col">
            <input
              aria-label="Input username"
              tabIndex={0}
              style={{
                borderColor: error?.username
                  ? "var(--error-code)"
                  : "transparent",
              }}
              onChange={(e) => setUserName(e.target.value)}
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
              tabIndex={1}
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
          <Link
            role="button"
            aria-label="Go to forget password page"
            tabIndex={3}
            className="password"
            to={"/reset-password"}
          >
            Forget your password ?
          </Link>
          <button
            role="button"
            aria-label="Submit form signin"
            tabIndex={4}
            onClick={() => handleSubmit}
            className="button-sign button-sign-black "
          >
            Sign In
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

export default SignIn;