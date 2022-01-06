
import { TiEdit } from 'react-icons/ti';
import React, { Fragment, useState } from "react";
import Modal from "react-modal"
import axios from "axios"

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    //setDescription(description)
    setIsOpen(!isOpen);
  }

  function handleSubmit() {
    //updateDescription(description)
    try {
      updateTodo(todo.id)
      setIsOpen(!isOpen)
    } catch (error) {
      console.log(error)
    }
    
  }

  const updateTodo = (id) => {
    axios
    .put(`http://localhost:3001/tasks/${id}`, 
    {task: {
      description: description
    }},
    { withCredentials: true })
    .then(response => {
      console.log(response.status)
    })
    .catch(error => console.log(error))
    .finally(
      window.location = '/Dashboard'
    ); 
  }; 

  return (
    <Fragment>
      <TiEdit
        type="button"
        className="edit-icon"
        onClick={toggleModal}
        label="Edit"
      >
        Edit
      </TiEdit>
      <Modal 
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="editDialog"
      > 
        <h1> test </h1> 
          <input 
            type="text"
            onChange={e => setDescription(e.target.value)}
          ></input>
          <button 
            type="button"
            class="btn btn-warning"
            onClick={toggleModal}
          > Close Modal </button>
          <button 
            type="button"
            class="btn btn-danger"
            onClick={handleSubmit}
          > Save changes 
          </button> 
      </Modal>
    </Fragment>
  );
};

export default EditTodo;