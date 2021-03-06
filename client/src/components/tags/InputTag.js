import axios from "axios";
import { config } from '../../Constants'
import React, { Fragment, useState } from "react";
import {isMobile} from 'react-device-detect';



const InputTag = (props) => {
 
  const [name, setName] = useState("");
  const TAG_URL = config.url.API_TAGS_URL; 

  const onSubmitForm = event => {
    const token = localStorage.getItem('token')
    if (name.trim() !== "") { 
      axios.post(
        TAG_URL, 
        { tags: {
            name: name,
        }}, 
        { withCredentials: true, headers: {Authorization: token}},
      ).then(response => {
        if (response.data.status === "created") {
            console.log('tag created')
        }
      }).catch(error => {
        console.log("tag creation error", error)
      }).finally(
          () => refreshPage()
      )

      event.preventDefault();
    } else {
        console.log("test")
        alert("This field should not be empty!")
    }
  };


  const refreshPage = () => {
      const token = localStorage.getItem('token')
      axios.get(
        TAG_URL, 
        { withCredentials: true, headers:  {Authorization: token} }, 
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
                  maxLength="30"
                  onChange={e => setName(e.target.value)}
                />
              : <input
                  type="text"
                  placeholder="Add a new tag here!"
                  className="todo-input"
                  value={name}
                  style={{ width: "300px" }}
                  maxlength="30"
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