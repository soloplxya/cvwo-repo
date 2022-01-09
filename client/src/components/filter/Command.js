import React, { Fragment } from "react";
import "../../App.css";
import { useNavigate } from 'react-router-dom';


const Command = ({test, name}) => {
    const navigation = useNavigate();
    return (
        <Fragment>
            <div className="container">
               <button 
                  className="todo-button"
                  onClick={() => navigation(test)}
                >
                   { name }
                </button>
            </div>
      </Fragment>
    )
}

export default Command; 
