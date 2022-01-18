import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { config } from '../../Constants';
import Todo from "./Todo"
import InputTodo from "./InputTodo";
import Command from "../filter/Command"
import { useNavigate } from 'react-router-dom';



const ListTodos = props => {
  const navigation = useNavigate();
  console.log(navigation)
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
  
    const token = localStorage.getItem('token')
    console.log(token)
    axios.get(
      TASK_URL, 
      { withCredentials: true, headers: { Authorization: token } }
      ).then(response => {
        setTodos(response.data.tasks)
    }).catch(error => {
      console.log("Task retrieving error", error)
      navigation("/loginPage")
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