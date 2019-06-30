import React from "react";
import "./style.css";
import Autosuggest from 'react-autosuggest';

const fruitsVeggies = [
    {
        name: 'carrot',
        weight: 1.2
    },
    {
        name: 'apple',
        weight: 3.4
    },
];

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : fruitsVeggies.filter
}

class AddRecord extends React.Component {

    render() {
        return (
            <div>

                <form>
                <input placeholder="Date">
                </input>
                <input placeholder="Fruit or Vegetable">
                </input>
                <button placeholder="Submit">
                </button>
                </form> 
                

            </div>
        )
    }

}

export default AddRecord