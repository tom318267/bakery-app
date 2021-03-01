import React, { useState } from "react";
import { Link } from "react-router-dom";
import bakingImg from "../../assets/baking.png";
import partyImg from "../../assets/party.png";
import wave from "../../assets/wave.png";
import GoogleButton from "react-google-button";
import "./Signup.scss";

const Signup = () => {
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setForm({
      displayName: e.target.value,
      email: e.target.value,
      password: e.target.value,
      confirmPassword: e.target.value,
    });
  };

  const container = document.getElementById("container");

  const signUp = () => {
    container.classList.add("right-panel-active");
  };

  const signIn = () => {
    container.classList.remove("right-panel-active");
  };

  return (
    <div className="Signup">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input onChange={onChange} type="text" placeholder="Display Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <GoogleButton className="google-button" />
            </div>
            <span>or use your account</span>
            <input onChange={onChange} type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link className="forgot" href="#">
              Forgot your password?
            </Link>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <img className="party" src={partyImg} alt="party" />
              <div className="welcome-container"></div>
              <h1 className="welcome">Welcome Back!</h1>
              <p className="connect">
                To keep connected with us please login with your personal info
              </p>
              <button onClick={signIn} className="ghost signInBlue" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Sign up so you can buy the best baked goods!</h1>
              <img className="bakingImg" src={bakingImg} alt="baking-img" />
              <button onClick={signUp} className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="wave" src={wave} alt="wave" />
    </div>
  );
};

export default Signup;
