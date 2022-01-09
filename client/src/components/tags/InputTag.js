import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



const InputTag = props => {
  // const navigation = useNavigate();
  const [name, setName] = useState("");


const onSubmitForm = event => {
  console.log('onsubmitfunction')
  const url = "http://localhost:3001/tags"; 
  axios.post(
    url, 
    { tags: {
        name: name,
    }}, 
    { withCredentials: true }
  ).then(response => {
    if (response.data.status === "created") {
        console.log('tag created')
        // this.props.handleSuccessfulAuth(response.data);
    }
  }).catch(error => {
    console.log("tag creation error", error)
  }).finally(
     window.location("/dashboard")
  )

  event.preventDefault()
};


  return (
    <Fragment>
      <h1 className="text-center mt-5">Tag List</h1>
      <div id="todo-form-div">
      <form className="todo-form" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Add a new tag here!"
          className="todo-input"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button 
          type="submit"
          className="todo-button"
        > Submit </button>
      </form>
      </div>
    </Fragment>
  );
};

export default InputTag;