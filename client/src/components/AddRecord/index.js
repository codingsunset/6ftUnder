import React from "react";
import "./style.css";
import Autosuggest from "react-autosuggest";


const fruitsVeggies = [
  {
    name: "carrot",
    weight: 1.2
  },
  {
    name: "apple",
    weight: 3.4
  }
];

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

class AddRecord extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    console.log("newValue is " + newValue)
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

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      className: "form-control",
      placeholder: "Type a veggie or fruit!",
      value,
      onAutoSuggestChange: this.onAutoSuggestChange
    };

    return (
      <div >
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps }
        />

      </div>
    );
  }
}

export default AddRecord;
