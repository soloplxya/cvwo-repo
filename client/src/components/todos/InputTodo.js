import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



const InputTodo = props => {
 
  const navigation = useNavigate();
  const [tags, setTags] = useState([]);
  const [allValues, setAllValues] = useState({
    description: "",
    user_id: "",
    status: "", 
    completed: "", 
 });



 const getTags = () => {
  const url = "http://localhost:3001/tags"; 
  axios.get(
    url, 
    { withCredentials: true }
    ).then(response => {
    console.log(response.data)
    setTags(response.data.tags)
    // this.props.handleSuccessfulAuth(response.data);
  }).catch(error => {
    console.log("tag retrieving error", error)
  })
};





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
  }).finally(
     window.location("/dashboard")
  )

  event.preventDefault()

};


useEffect(() => {
  setAllValues({...allValues, ['user_id']: props.user.id})
  getTags()
}, [navigation, props.loggedInStatus, props.user])


  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <div id="todo-form-div">
      <form className="todo-form" onSubmit={onSubmitForm}>
        <div className="combo">
          <input
            type="text"
            placeholder="Add your todo here!"
            className="todo-input"
            value={allValues.description}
            onChange={e => setAllValues({...allValues, ['description']: e.target.value})}
          /> 
          <select
            id="tagList">
              { tags.map(tag => <option key={tag.id} value={tag.name}>{tag.name}</option> )}
          </select>
        </div>
        <button 
          type="submit"
          className="todo-button"
        > Submit </button>
      </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;