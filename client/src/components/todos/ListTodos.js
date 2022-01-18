import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { config } from '../../Constants';
import Todo from "./Todo"
import InputTodo from "./InputTodo";
import Command from "../filter/Command"



const ListTodos = props => {
  const TASK_URL = config.url.API_TASKS_URL;
  const [todos, setTodos] = useState([]);
  const [tags, setTags] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterValue, setFilterValue] = useState("none")


  const setParentTags = (tags) => {
    setTags(tags)
  }

  const setGPFilteredTodos = (filtered) => {
    setFiltered(filtered)
    console.log(filtered)
  }


  const getTodos = () => {
    axios.get(
      TASK_URL, 
      { withCredentials: true }
      ).then(response => {
        setTodos(response.data.tasks)
    }).catch(error => {
      console.log("Task retrieving error", error)
    })
  };


  useEffect(() => {
    getTodos();
  }, []);



  return (
    <Fragment>
      <Command  {...props} test={'/tags'} name={'Tags'} tags={tags} todos={todos} setTodos={setTodos} setGPFilteredTodos={setGPFilteredTodos} filter={filterValue} setFilterValue={setFilterValue}/> 
      {
      // if search filter exists
      filtered.length > 0 || filterValue !== "none"
        ? 
        <div>
        <InputTodo {...props} setParentTags={setParentTags} todos={todos} setTodos={setTodos}/>
          {filtered.map((x,i) => {
            return <Todo key={i} todo={x} setTodos={setTodos} todos={filtered} tags={tags}></Todo>
          })}
        </div>
        : 
        <div>
        <InputTodo {...props} setParentTags={setParentTags} todos={todos} setTodos={setTodos}/>
          {todos.map((x,i) => {
            return <Todo key={i} todo={x} setTodos={setTodos} todos={todos} tags={tags}></Todo>
          })}
        </div>
      }
    </Fragment>
  );
};

export default ListTodos;