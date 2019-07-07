import React from "react";
import "./style.css";

class Login2 extends React.Component{
  render() {
    return (
      <div className="container login-page">
        <h1 className="glow">6ft Under</h1>
        <form action method="post" name="myForm" autoComplete="on">
          <h4>Sign In</h4>
          <div className="floating-input">
            <input required id="email" type="text" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="floating-input">
            <input required id="password" type="password" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-button ">
            <input type="button" defaultValue="Sign In" />
            <div className="ripple-container" />
          </div>
          <h6>
            Not Registered?<a href="#"> Sign Up please</a>
          </h6>
          <div id="contact-icons">
            <div className="secondary-head">
              <a href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter" />{" "}
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
};
export default Login2;