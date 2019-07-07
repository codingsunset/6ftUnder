import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom';
import "../components/Login/style.css";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      toDashboard: false,
      showError: false
    };
  }
  // state = {
  //   email: "",
  //   password: ""
  // };

  componentDidMount() {
    // this.loadRecords();
    console.log("LogIn component loaded successfully");
  }

  // loadRecords = () => {
  //   API.getRecords()
  //     .then(res =>
  //       this.setState({
  //         records: res.data,
  //         vegetableName: "",
  //         vegetableAmount: "",
  //         notes: ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log("state set");
  };

  handleFormSubmit(event) {
    event.preventDefault();
    console.log("LogIn form submitted")
    if (this.state.email && this.state.password) {
      API.userLogIn({ email: this.state.email, password: this.state.password })
        .then(res => {
          // console.log(res.status);
          if (res.status === 200) {
            console.log(res.status, res.data);
            const { _id, name, email } = res.data;
            sessionStorage.user_id = _id
            sessionStorage.user_name = name
            sessionStorage.user_email = email
            this.setState({ toDashboard: true })
          }
          // have never reached here:
          // else if (res.status === 401) {
          //   console.log(res.status);
          // }
        })
        .catch(err => {
          console.log(err, "wrong credentials");
          this.setState({ showError: true });
        });
      // API.saveRecord({
      //   vegetableName: this.state.vegetableName,
      //   vegetableAmount: this.state.vegetableAmount,
      //   notes: this.state.notes
      // })
      //   .then(res => this.loadRecords())
      //   .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/records' />;
    }
    return (
    
      <div className='login-page'>
        <Container fluid>
          <Row>
            <Col size="md-12">
            <h1 className={"styles.glow login-h1"}>6ft Under</h1>
              <div className="row mt-5">
                <div className="col-md-6 m-auto">
                  <div className="card card-body">
                    <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Log In</h1>
                    {/* <% include ./partials/messages %> */}
                    <form className="login-form" action="/users/login" method="POST">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter Email"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter Password"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary btn-block login-button">Login</button>
                      {/* <FormBtn onClick={this.handleFormSubmit} className="btn btn-primary btn-block">
                        Log In
                      </FormBtn> */}
                    </form>
                    {/* <p className="lead mt-4 text-account">
                      No Account? <a className="text-register" href="/signup">Register</a> */}

      {/* <Container fluid>
        <Row>
          <Col size="md-12">
            <div className="row mt-5">
              <div className="col-md-6 m-auto">
                <h1 className="glow">6ft Under</h1>
                <div className="card card-body">
                  <h1 className="text-center mb-3">
                    <i className="fas fa-sign-in-alt"></i>
                    Log In
                  </h1>
                  <form action="/users/login" method="POST">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary btn-block">Log In</button>
                    {/* <FormBtn onClick={this.handleFormSubmit} className="btn btn-primary btn-block">
                      Log In
                    </FormBtn> */}
                  {/* </form> */}
                  <p className="lead mt-4 text-register">
                    No Account? <a className="text-account" href="/signup">Sign Up</a>
                  </p>
                    {this.state.showError &&
                      <p className="warning-text">
                        Log In is not successful :(
                      </p>
                    }
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
    );
  }
}

export default LogIn;
