import React, { Fragment, useState } from "react";
import "../../App.css";
import FilterByTag from "./FilterByTag";
import { useNavigate } from 'react-router-dom';


const Command = (props) => {
    const [loggedInStatus, setLoggedInStatus] = useState(props.loggedInStatus)
    const [user, setUser] = useState(props.user)
    const navigation = useNavigate();
    console.log(props)

    const setPFilteredTodos = (filtered) => {
        props.setGPFilteredTodos(filtered)
    }

    const handleLogout = () => {
        setLoggedInStatus('NOT_LOGGED_IN')
        setUser('')
        localStorage.clear()
        navigation('/loginPage')
    }

    return (
        <Fragment>
            <div className="container">
               <div className="command" style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
                    <button 
                        className="todo-button"
                        onClick={() => navigation(props.test)}
                        >
                        { props.name }
                    </button>
                        { props.test === "/tags" 
                            ?  <FilterByTag  {...props} tags={props.tags} todos={props.todos} setTodos={props.setTodos} setPFilteredTodos={setPFilteredTodos} filter={props.filterValue} setFilterValue={props.setFilterValue}/> 
                            :  <div /> 
                        }
                    <button
                        className="todo-button"
                        onClick={() => handleLogout()}>
                        Logout
                    </button>
                </div> 
            </div>
      </Fragment>
    )
}

export default Command; 
