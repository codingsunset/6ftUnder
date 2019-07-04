import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import AddRecord from "../AddRecord";
import "./style.css";

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
    API.getRecords()
      .then(res =>
        this.setState({ records: res.data, vegetableName: "", vegetableAmount: "", notes: "" })
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
        notes: this.state.notes
      })
        .then(res => this.loadRecords())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Log Your Compost</h1>
            </Jumbotron>
            <form>
              <AddRecord
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
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (MM/DD/YYYY)"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                id="text-area"
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
              <h1>Your Composting History</h1>
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
                    {/* <DeleteBtn onClick={() => this.deleteRecord(record._id)} /> */}
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
