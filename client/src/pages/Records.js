import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Modal from '../components/Modal';
import ReactTooltip from 'react-tooltip'
import Autosuggest from 'react-autosuggest';
import fruitsVeggies from '../../utils/list';
//import "./style.css";

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
  
  state= {value: "",
    suggestions: [],
    records: [],
    vegetableName: "",
    vegetableAmount: "",
    notes: "",
    showModal: false,
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    // console.log("newValue is " + newValue)
    // console.log("this.state ", this.state)
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
    if (!this.state.records) {
      this.setState({
        showModal: true
      })
    }

      API.saveRecord({
        vegetableName: this.state.vegetableName,
        vegetableAmount: this.state.vegetableAmount,
        notes: this.state.notes,
        user_id: sessionStorage.user_id
      })
        .then(res => this.loadRecords())
        .catch(err => console.log(err));
    }
  
    hideModal = () => {
      this.setState({
        showModal: false
      })
    }

  handleLogOut = () => {
    API.userLogOut();
  }

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
        <h1> Hello {sessionStorage.user_name} </h1>
        <FormBtn onClick={this.handleLogOut}> Log Out </FormBtn>
        <Modal showModal={this.state.showModal} hideModal={this.hideModal}/>

        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Input Fields</h1>
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
                disabled={!this.state.vegetableAmount && !this.state.vegetableName}
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
                        {record.vegetableName} of {record.vegetableAmount} oz
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
