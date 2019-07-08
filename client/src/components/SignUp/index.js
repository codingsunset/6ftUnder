import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom';
import "./style.css";
import Header from "../Header";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      message: [],
      toLogInPage: false
    };
  }
  // state = {
  //   email: "",
  //   password: ""
  // };

  componentDidMount() {
    // this.loadRecords();
    console.log("SignUp component loaded successfully");
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log("state set");
  };

  handleFormSubmit(event) {
    event.preventDefault();
    // console.log("SignUp form submitted",
    //   this.state.name,
    //   this.state.email,
    //   this.state.password,
    //   this.state.password2);

    const { name, email, password, password2 } = this.state;
    console.log("submit button clicked", name, email, password, password2);

    let errors = [];

    if (!name || !email || !password || !password2) {
      errors.push({ msg: 'Please enter all fields' });
    }

    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if (errors.length > 0) {
      console.log(errors, name, email, password, password2);
      this.setState({ message: errors });
    } else {
      // if (this.state.name && this.state.email && this.state.password)
      this.setState({
        message: [{ msg: 'Congrats on signing up successfully.' },
        { msg: 'Please log in to continue.' }]
      });
      API.userSignUp({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      });
      // .then(() => { this.setState({ toLogInPage: true }) });
    }
    //     .then(res => {
    //       // console.log(res.status);
    //       if (res.status === 200) {
    //         console.log(res.status, res.data);
    //         this.setState({ toDashboard: true })
    //       }
    //     })
    //     .catch(err => console.log(err, "wrong credentials"));

    // API.saveRecord({
    //   vegetableName: this.state.vegetableName,
    //   vegetableAmount: this.state.vegetableAmount,
    //   notes: this.state.notes
    // })
    //   .then(res => this.loadRecords())
    //   .catch(err => console.log(err));
  }


  render() {
    if (this.state.toLogInPage === true) {
      return <Redirect to='/login' />;
    }
    const { message } = this.state;
    const messageElement = message.map(item => <p className='alert-1'> {item.msg} </p>);
    // this.setState({ message: [] });
    return (
      <div className='signup-page'>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Header />
              {/* <h1 className="header signUp-header">6ft Under</h1> */}
              <div className="row mt-5">
                <div className="col-md-6 m-auto">
                  <div className="card card-body">
                    <h1 className="text-center mb-3 h1-text">
                      <i className="fas fa-user-plus"></i>
                      Sign Up
                    </h1>
                    {/* <% include ./partials/messages %> */}
                    <form className="signup-form" action="/users/register" method="POST">
                      <div className="form-group">
                        <label className="signup-labels" htmlFor="name">Name</label>
                        <input
                          type="name"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Enter Name"
                          // value="<%= typeof name != 'undefined' ? name : '' %>"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="signup-labels" htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter Email"
                          // value="<%= typeof email != 'undefined' ? email : '' %>"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="signup-labels" htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          placeholder="Create Password"
                          // value="<%= typeof password != 'undefined' ? password : '' %>"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="signup-labels" htmlFor="password2">Confirm Password</label>
                        <input
                          type="password"
                          id="password2"
                          name="password2"
                          className="form-control"
                          placeholder="Confirm Password"
                          // value="<%= typeof password2 != 'undefined' ? password2 : '' %>"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary btn-block signup-button">
                        Sign Up
                      </button>
                    </form>
                    <p className="lead mt-4 text-1">Have An Account? <a href="/login">Log in</a></p>
                    {messageElement}
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default SignUp;
