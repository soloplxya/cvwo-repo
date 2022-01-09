import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo"
import InputTodo from "./InputTodo";
import Command from "../filter/Command"

const ListTodos = props => {
  const [todos, setTodos] = useState([]);


  const getTodos = () => {
    const url = "http://localhost:3001/tasks"; 
    axios.get(
      url, 
      { withCredentials: true }
      ).then(response => {
      console.log(response.data)
      setTodos(response.data.tasks)
      // this.props.handleSuccessfulAuth(response.data);
    }).catch(error => {
      console.log("task retrieving error", error)
    })
  };

  
  useEffect(() => {
    getTodos();
  }, []);
  

  return (
    <Fragment>
      <Command test={'/tags'} name={'Tags'}/> 
      <InputTodo {...props} />
        {todos.map((x,i) => {
          return <Todo key={i} todo={x} setTodos={setTodos} todos={todos}></Todo>
        })}
    </Fragment>
  );
};

export default ListTodos;


