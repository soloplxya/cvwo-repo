import React, { Fragment } from "react";
import "../App.css";
import ListTags from "./tags/ListTags.js";


const Tags = props => {
    return (
        <Fragment>
            <div className="container">
                <ListTags {...props}/>
            </div>
        </Fragment>
    )
}

export default Tags; 

