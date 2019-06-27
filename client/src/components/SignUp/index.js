import React from "react";
import "./style.css";

class SignUp extends React.Component{
  render() {
    return (
      <form action method="post" name="myForm" autoComplete="on">
        <div className="container">
          <h1 className="header">6ft Under</h1>
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
            <h2 className="title">SIGN UP</h2>
            <div className="signup-field">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Type your first name"
                required
                autofocus
              />
            </div>
            <div className="signup-field">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                className="input-field"
                placeholder="Type your last name"
                required
              />
            </div>
            <div className="signup-field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="example@domain.com"
                required
              />
            </div>
            <div className="signup-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Type your password"
                required
              />
            </div>
            <fieldset>
              <legend className="gender">Choose gender:</legend>
              <div className="pretty p-icon p-round p-plain p-smooth p-bigger">
                <input type="radio" defaultValue="male" name="gender" />
                <div className="state p-primary-o">
                  <i className="fas fa-male icon" />
                  <label htmlFor="male">Male</label>
                </div>
              </div>
              <div className="pretty p-icon p-round p-plain p-smooth p-bigger">
                <input type="radio" defaultValue="female" name="gender" />
                <div className="state p-primary-o">
                  <i className="fas fa-female icon" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </fieldset>
            <div className="signup-button">
              <input type="submit" defaultValue="SUBMIT" />
            </div>
            {/* End of class="Form" container. */}
          </div>
        </div>
      </form>
    );
  }
};

export default SignUp;
