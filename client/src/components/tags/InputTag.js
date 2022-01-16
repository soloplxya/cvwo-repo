import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import {ConsoleView, isMobile} from 'react-device-detect';



const InputTag = (props) => {
  const [name, setName] = useState("");

  const onSubmitForm = event => {
    if (name.trim() !== "") { 
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
        }
      }).catch(error => {
        console.log("tag creation error", error)
      }).finally(
          refreshPage()
      )

      event.preventDefault();
    } else {
        console.log("test")
        alert("This field should not be empty!")
    }
  };


  const refreshPage = () => {
      const url = "http://localhost:3001/tags"; 
      axios.get(
        url, 
        { withCredentials: true }
        ).then(response => {
        props.setTags(response.data.tags)
      }).catch(error => {
        console.log("tag retrieving error", error)
      })
  };
  


  return (
    <Fragment>
      <h1 className="text-center mt-5">Tag List</h1>
      <div id="todo-form-div">
      <form className="todo-form" onSubmit={onSubmitForm}>
        
        { !isMobile 
              ? <input
                  type="text"
                  placeholder="Add a new tag here!"
                  className="todo-input"
                  style={{width: "725px"}}
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              : <input
                  type="text"
                  placeholder="Add a new tag here!"
                  className="todo-input"
                  value={name}
                  style={{ width: "300px" }}
                  onChange={e => setName(e.target.value)}
                />
        }
        
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