import React, { Fragment, useEffect, useState } from "react";
import Todo from "./Todo"
import InputTodo from "./InputTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);


  const getTodos = async () => {
    // change to use axios 
    /*
    try {
      const response = await fetch("/todoes");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
    */ 
  };

  useEffect(() => {
    getTodos();
  }, []);
  

  return (
    <Fragment>
      <InputTodo />
        {todos.map((x,i) => {
          return <Todo key={i} todo={x} setTodos={setTodos} todos={todos}></Todo>
        })}
    </Fragment>
  );
};

export default ListTodos;


