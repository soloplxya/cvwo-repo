import { Fragment, useState } from "react";
import { TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr'

import Modal from "react-modal";
import axios from 'axios';
import { config } from '../../Constants';
import TagBadge from "./TagBadge";
import "../../App.css";


const Todo = ({todo, setTodos, todos, tags}) => {
    const TASKS_URL = config.url.API_TASKS_URL;
    const [description, setDescription] = useState(todo.description);
    const [name, setName] = useState(todo.status);
    const [isOpen, setIsOpen] = useState(false);


    // styles
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        background: "#A9927D", 
        transform: 'translate(-50%, -50%)',
        border: "solid black 2px",
      },
      background: "red"
    };
    

    const deleteTodo = (id) => {
      const token = localStorage.getItem('token')
      console.log(id)
      axios
      .delete(`${TASKS_URL}/${id}`, { withCredentials: true, headers: {Authorization: token}})
      .then(response => {
        console.log(response.status)
      })
      .catch(error => console.log(error))
      .finally( setTodos(todos.filter(todo => todo.id !== id))); 
    }; 

    const updateTodo = (id) => {
      const token = localStorage.getItem('token')
      axios
      .put(`${TASKS_URL}/${id}`, 
      { task: {
        description: description, 
        status: name,
      }},
      { withCredentials: true, headers: {Authorization: token}})
      .then(response => {
        console.log(response.status)
      })
      .catch(error => console.log(error))
      .finally(
          editTodo(id)
      ); 
    }; 

    function editTodo(id)  {
      let editTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.description = description;
          todo.status = name; 
        }
        return todo;
      });
      setTodos(editTodos);
    };


    function toggleModal() {
      setIsOpen(!isOpen);
    }
  
    function handleSubmit() {
      try {
        updateTodo(todo.id)
        setIsOpen(!isOpen)
      } catch (error) {
        console.log(error)
      }
    }
  

    return (
        <Fragment>
        <div className="todo-row"> 
          <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            <div key={todo.id} style={{textOverflow: "ellipsis", whiteSpace: "nowrap", width: "200px", display: "inline-block", overflow:"hidden"}}>
              {todo.description}
            </div> 
          </div> 
          <div className='icons'>
            {
              todo.status
              ? <TagBadge text={todo.status}></TagBadge>
              : <div></div>
            }  
            <TiEdit
              type="button"
              className="edit-icon"
              onClick={toggleModal}
              style={{fontSize: "24px"}}
              label="Edit"
            >
              Edit
            </TiEdit>
            <Modal 
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="editDialog"
              style={customStyles}
            > 
                <GrClose
                  type="button"
                  className="close-icon"
                  onClick={toggleModal}
                  style={{ float: "right" }}
                >
                  Edit
                </GrClose>
                <h1> Edit </h1> 
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                  <input 
                    type="text"
                    color="white"
                    text-align="center"
                    placeholder="Task description"
                    style={{padding: "12px 20px", border: "2px solid black"}}
                    onChange={e => setDescription(e.target.value)}
                  ></input>
                  <select
                    style={{marginTop:"20px", width: "300px", border: "2px solid black", padding: "12px 18px"}}
                    onChange={e => setName(e.target.value)}>
                      <option value="" disabled selected hidden>Edit Tag</option>
                      { tags.map(tag => <option key={tag.id} value={tag.name}>{tag.name}</option> )}
                  </select>
                  <button 
                    style={{marginTop: "20px", marginBottom: "20px"}}
                    type="button"
                    className="todo-button"
                    onClick={handleSubmit}
                  > Save changes 
                  </button>           
                </div> 
            </Modal>
            <RiCloseCircleLine
                onClick={() => deleteTodo(todo.id)}
                className='delete-icon'
                style={{fontSize: "24px"}}
            />
            </div>
        </div>
      </Fragment> 
    )
}

export default Todo;


