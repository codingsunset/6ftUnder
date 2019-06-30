import React from "react";
import "./style.css";

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