import React, { Fragment } from "react";
import "../../App.css";
import FilterByTag from "./FilterByTag";
import { useNavigate } from 'react-router-dom';


const Command = ({props, test, name, tags, todos, setTodos, setGPFilteredTodos}) => {
    const navigation = useNavigate();

    const setPFilteredTodos = (filtered) => {
        setGPFilteredTodos(filtered)
    }

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
                            ?  <FilterByTag  {...props} tags={tags} todos={todos} setTodos={setTodos} setPFilteredTodos={setPFilteredTodos}/> 
                            :  <div /> 
                        }
                </div> 
            </div>
      </Fragment>
    )
}

export default Command; 
