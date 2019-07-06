import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Records extends Component {
  state = {
    records: [],
    vegetableName: "",
    vegetableAmount: "",
    notes: ""
  };

  componentDidMount() {
    this.loadRecords();
  }

  loadRecords = () => {
    API.getRecords(sessionStorage.user_id)
      .then(res =>
        this.setState({
          records: res.data,
          vegetableName: "",
          vegetableAmount: "",
          notes: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteRecord = id => {
    API.deleteRecord(id)
      .then(res => this.loadRecords())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.vegetableName && this.state.vegetableAmount) {
      API.saveRecord({
        vegetableName: this.state.vegetableName,
        vegetableAmount: this.state.vegetableAmount,
        notes: this.state.notes,
        user_id: sessionStorage.user_id
      })
        .then(res => this.loadRecords())
        .catch(err => console.log(err));
    }
  };

  handleLogOut = () => {
    API.userLogOut();
  }

  render() {
    return (
      <Container fluid>
        <h1> Hello {sessionStorage.user_name} </h1>
        <FormBtn onClick={this.handleLogOut}> Log Out </FormBtn>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Input Fields</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.vegetableName}
                onChange={this.handleInputChange}
                name="vegetableName"
                placeholder="Name of veggie (required)"
              />
              <Input
                value={this.state.vegetableAmount}
                onChange={this.handleInputChange}
                name="vegetableAmount"
                placeholder="Amount of veggie (required)"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="notes (optional)"
              />
              <FormBtn
                disabled={!(this.state.vegetableAmount && this.state.vegetableName)}
                onClick={this.handleFormSubmit}
              >
                Submit Record
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Data items readout</h1>
            </Jumbotron>
            {this.state.records.length ? (
              <List>
                {this.state.records.map(record => (
                  <ListItem key={record._id}>
                    <Link to={"/records/" + record._id}>
                      <strong>
                        {record.vegetableName} of {record.vegetableAmount} pounds
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteRecord(record._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Records;
