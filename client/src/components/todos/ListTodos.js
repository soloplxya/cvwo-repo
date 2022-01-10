import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo"
import InputTodo from "./InputTodo";
import Command from "../filter/Command"


const ListTodos = props => {
  const [todos, setTodos] = useState([]);
  const [tags, setTags] = useState([]);
  const [filtered, setFiltered] = useState([]);

  
  const setParentTags = (tags) => {
    setTags(tags)
  }

  const setGPFilteredTodos = (filtered) => {
    setFiltered(filtered)
    console.log(filtered)
  }


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
      <Command  {...props} test={'/tags'} name={'Tags'} tags={tags} todos={todos} setTodos={setTodos} setGPFilteredTodos={setGPFilteredTodos}/> {
        
      }
      {
      // if search filter exists
      filtered.length > 0
        ? 
        <div>
        <InputTodo {...props} setParentTags={setParentTags} />
          {filtered.map((x,i) => {
            return <Todo key={i} todo={x} setTodos={setTodos} todos={filtered}></Todo>
          })}
        </div>
        : 
        <div>
        <InputTodo {...props} setParentTags={setParentTags} />
          {todos.map((x,i) => {
            return <Todo key={i} todo={x} setTodos={setTodos} todos={todos}></Todo>
          })}
        </div>
      }
    </Fragment>
  );
};

export default ListTodos;


