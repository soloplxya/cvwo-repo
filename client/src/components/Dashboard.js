import React, { Fragment } from "react";
import "../App.css";
import ListTodos from "./todos/ListTodos";


const Dashboard = props => {
    return (
        <Fragment>
            <div className="container">
                <ListTodos {...props}/>
            </div>
      </Fragment>
    )
}

export default Dashboard; 

