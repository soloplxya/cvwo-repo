import React, { Fragment } from "react";
import "../../App.css";
import FilterByTag from "./FilterByTag";
import { useNavigate } from 'react-router-dom';


const Command = ({test, name, tags, todos, setTodos}) => {
    const navigation = useNavigate();
    return (
        <Fragment>
            <div className="container">
               <div className="command" style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
                    <button 
                        className="todo-button"
                        onClick={() => navigation(test)}
                        >
                        { name }
                    </button>
                        { test === "/tags" 
                            ?  <FilterByTag tags={tags} todos={todos} setTodos={setTodos}/> 
                            :  <div /> 
                        }
                </div> 
            </div>
      </Fragment>
    )
}

export default Command; 
