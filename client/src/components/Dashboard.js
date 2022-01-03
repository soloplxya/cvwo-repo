import React, { Fragment } from "react";
import "../App.css";
import ListTodos from "./todos/ListTodos";

const Dashboard = props => {
    console.log(props.user)
    return (
        <Fragment>
            <div className="container">
                <ListTodos {...props}/>
            </div>
      </Fragment>
    )
}

export default Dashboard; 

