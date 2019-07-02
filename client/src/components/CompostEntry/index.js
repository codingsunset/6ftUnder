import React from "react";
import "./style.css";

class CompostEntry extends React.Component {
    //insert method here
        //insert setState({})

    state={
        //not sure what should go in here
        entries
    };

    render(){
        return(
            <div className = "entry">
                <ul>
                    {this.state.entries.map(entry =>
                        <li><CompostEntry name = {entry.name} quantity = {entry.quantity}/></li>)}
                </ul>
            </div>
        )
    }

}