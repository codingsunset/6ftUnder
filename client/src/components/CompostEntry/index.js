import React from "react";
import "./styles.css";

const CompostEntry = (Props) => {
    return(
        <div>
           <p>{Props.name}</p>
           <p>{Props.quantity}</p> 
        </div>
    );
}
export default CompostEntry;
