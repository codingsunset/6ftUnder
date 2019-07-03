import React from "react";
import "./style.css";
import CompostEntry from "../CompostEntry";

class CompostEntryList extends React.Component {
    // state={entries:[]};

    // viewEntries = () => {
    //     // console.log("click received")
    //     axios.get("/api/records")
    //       .then(function (entries) {
    //         console.log(entries);
    //         this.setState({entries})
    //       })
    //   }

    render(){
        return(
            <div className = "entry">
                <ul>
                    {this.props.entries.map(entry =>
                        <li><CompostEntry name = {entry.name} quantity = {entry.quantity}/></li>)}
                </ul>
            </div>
        )
    }

}
export default CompostEntryList;