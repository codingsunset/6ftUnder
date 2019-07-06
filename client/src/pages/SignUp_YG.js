import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
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
    console.log("SignUp form submitted",
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.password2);

    if (this.state.name && this.state.email && this.state.password) {
      API.userSignUp({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
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
    if (this.state.toDashboard === true) {
      return <Redirect to='/records' />;
    }
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div className="row mt-5">
              <div className="col-md-6 m-auto">
                <div className="card card-body">
                  <h1 className="text-center mb-3">
                    <i className="fas fa-user-plus"></i> Register
                  </h1>
                  {/* <% include ./partials/messages %> */}
                  <form action="/users/register" method="POST">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
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
                      <label htmlFor="email">Email</label>
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
                      <label htmlFor="password">Password</label>
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
                      <label htmlFor="password2">Confirm Password</label>
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
                    <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary btn-block">
                      Register
                    </button>
                  </form>
                  <p className="lead mt-4">Have An Account? <a href="/login">Login</a></p>
                </div>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    );
  };
}

export default SignUp;
