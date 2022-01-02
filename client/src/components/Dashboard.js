import React, { Fragment } from "react";
import "../App.css";
import ListTodos from "./todos/ListTodos";

const Dashboard = props => {
    return (
        <Fragment>
            <div className="container">
                <ListTodos />
            </div>
      </Fragment>
    )
}

export default Dashboard; 

