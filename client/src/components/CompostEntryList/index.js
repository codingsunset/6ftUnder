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
        // console.log(this.props.entries[0] && this.props.entries[0]._id)
        return(
            <div className = "entry">
                <ul>
                    {this.props.entries.map(entry =>
                        <li key = {entry._id}><CompostEntry name = {entry.vegetableName} quantity = {entry.quantity}/></li>)}
                </ul>
            </div>
        )
    }

}
export default CompostEntryList;