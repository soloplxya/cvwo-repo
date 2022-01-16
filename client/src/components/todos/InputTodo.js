import axios from "axios";
import {isMobile} from 'react-device-detect';
import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



const InputTodo = (props) => {
 
  const navigation = useNavigate();
  const [tags, setTags] = useState([]);
  const [allValues, setAllValues] = useState({
    description: "",
    user_id: "",
    status: "", 
    completed: "", 
  });


  const setParentTag = (tags) => {
    props.setParentTags(tags)
  }

  const getTags = () => {
    const url = "http://localhost:3001/tags"; 
    axios.get(
      url, 
      { withCredentials: true }
      ).then(response => {
      console.log(response.data)
      setTags(response.data.tags)
      setParentTag(response.data.tags)
    }).catch(error => {
      console.log("tag retrieving error", error)
    })

  };


  const onSubmitForm = event => {
    if (allValues.description.trim() !== "") {
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
        }
      }).catch(error => {
        console.log("task creation error", error)
      }).finally(
        refreshPage()
      )

      event.preventDefault()
    } else {
        alert("Description for task should not be empty!")
    }
  };


  const refreshPage = () => {
    const url = "http://localhost:3001/tasks"; 
      axios.get(
        url, 
        { withCredentials: true }
        ).then(response => {
          props.setTodos(response.data.tasks)
      }).catch(error => {
        console.log("Task retrieving error", error)
      })
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
        <div style={{display: "flex", justifyContent: "center"}}>

          { !isMobile 
            ? <input
                type="text"
                placeholder="Add your todo here!"
                className="todo-input"
                style={{width: "600px"}}
                value={allValues.description}
                onChange={e => setAllValues({...allValues, ['description']: e.target.value})}
               /> 
            : <input
                type="text"
                placeholder="Add your todo here!"
                className="todo-input"
                style={{width: "200px"}}
                value={allValues.description}
                onChange={e => setAllValues({...allValues, ['description']: e.target.value})}
              /> 
          }
          <select
            id="tagList"
            onChange={e => setAllValues({...allValues, ['status']: e.target.value})}>
              <option value="" disabled selected hidden>Choose Tag</option>
              { tags.map(tag => <option key={tag.id} value={tag.name}>{tag.name}</option> )}
          </select>
          <button 
          type="submit"
          className="todo-button"
          > Submit </button>
        </div>
      </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;