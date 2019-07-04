import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import AddRecord from "../AddRecord";
import ReactTooltip from 'react-tooltip'
import Autosuggest from 'react-autosuggest';
import fruitsVeggies from '../../utils/list';
import "./style.css";

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : fruitsVeggies.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <div className = "form-control">{suggestion.name}</div>;


class Records extends Component {
  state = {
    value: "",
    suggestions: [],
    records: [],
    vegetableName: "",
    vegetableAmount: "",
    notes: ""
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    console.log("newValue is " + newValue)
    console.log("this.state ", this.state)
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
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
    console.log( "Name and value on handleinputchange " + name + value)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.saveRecord({
        vegetableName: this.state.value,
        vegetableAmount: this.state.vegetableAmount,
        notes: this.state.notes
      })
        .then(res => this.loadRecords())
        .catch(err => console.log(err));
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      className: "form-control",
      placeholder: "Type a veggie or fruit!",
      value,
      onChange: this.onChange
    };
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Log Your Compost</h1>
            </Jumbotron>
            <form>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps }
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
                disabled={!this.state.vegetableAmount && !this.state.vegetableName}
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
                  console.log(record.vegetableName),
                  <ListItem key={record._id}>
                    <ReactTooltip id={record._id} effect="solid">
                      <ul>
                        {/* {record.vegetableName.map(vegetableName => (
                          <span>{vegetableName}</span>
                        ))} */}
                        <li><span>{record.vegetableName}</span> : <span>{record.vegetableAmount}</span></li>
                      </ul>
                    </ReactTooltip> 
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
