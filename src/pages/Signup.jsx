import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      email,
      password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (


    <section className="hero has-background-white-ter is-fullheight">
      <div class='hero-body'>
        <div className="container">
          <div className="columns is-centered">
            <div class='column is-5-tablet is-4-desktop'>
              <form onSubmit={handleFormSubmission} className="signup__form">
                  <h1 class='title is-3'>Sign Up</h1>
                  <div className="field">
                    <label htmlFor="input-username" class='label'>Username</label>
                    <div className="control is-medium has-icon-left">
                      <input className="input "  
                        id="input-username"
                        type="text"
                        name="username"
                        placeholder="Text"
                        value={username}
                        onChange={handleInputChange}
                        required/>
                      </div>
                  </div>

                  <div className="field">
                    <label htmlFor="input-username" class='label'>Email</label>
                    <div className="control is-medium has-icon-left">
                      <input className="input "  
                        id="input-username"
                        type="text"
                        name="email"
                        placeholder="Text"
                        value={email}
                        onChange={handleInputChange}
                        required/>
                      </div>
                  </div>

                  <div className="field">
                    <label htmlFor="input-username" class='label'>Password</label>
                    <div className="control has-icon-left">
                      <input
                      class='input'
                      id="input-password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleInputChange}
                      required
                      minLength="8"
                      />
                      {error && (
                        <div className="error-block">
                          <p>There was an error submiting the form:</p>
                          <p>{error.message}</p>
                        </div>
                      )}
                    </div>
                  </div>  
                  <div className="field">
                  <button class="button is-success" type="submit">
                  Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>



    
  );
}
