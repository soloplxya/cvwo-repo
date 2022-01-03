import axios from "axios";
import React, { Component, Fragment, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



const InputTodo = props => {
  const navigation = useNavigate();
  const [allValues, setAllValues] = useState({
    description: "",
    user_id: "",
    status: "", 
    complete: "", 
 });

  // using a scaffolder
    const onSubmitForm = event => {
    console.log('onsubmitfunction')
    const url = "http://localhost:3001/tasks"; 
    axios.post(
      url, 
      { task: {
         description: allValues.description, 
         user_id: allValues.user_id, 
         status: allValues.status, 
         complete: allValues.complete,
      }}, 
      { withCredentials: true }
    ).then(response => {
      if (response.data.status === "created") {
          console.log('task created')
          // this.props.handleSuccessfulAuth(response.data);
      }
    }).catch(error => {
      console.log("task creation error", error)
    })

    event.preventDefault()

  };

  // something like component did mount 
  useEffect(() => {
    console.log({...props})
    setAllValues({...allValues, ['user_id']: props.user.id})
  }, [navigation, props.loggedInStatus, props.user])

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <div id="todo-form-div">
      <form className="todo-form" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Add your todo here!"
          className="form-control"
          value={allValues.description}
          onChange={e =>  setAllValues({...allValues, ['description']: e.target.value})}
        />
      </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;