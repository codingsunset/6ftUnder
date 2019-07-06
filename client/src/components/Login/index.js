import React from "react";
import "./style.css";

class Login extends React.Component{
  render() {
    return (
      <div className='login-page'>
        <h1 className={"styles.glow login-h1"}>6ft Under</h1>
        <form className="login-form " action method="post" name="myForm" autoComplete="on">
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
        </form>
      </div>
    );
  }
};
export default Login;