import { Fragment, useState } from "react";
import { TiDirections, TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';
import Modal from "react-modal"
import axios from 'axios'
import TagBadge from "./TagBadge";


const Todo = ({todo, setTodos, todos}) => {
    const [description, setDescription] = useState(todo.description);
    const [isOpen, setIsOpen] = useState(false);

    const deleteTodo = (id) => {
      console.log(id)
      axios
      .delete(`http://localhost:3001/tasks/${id}`, { withCredentials: true })
      .then(response => {
        console.log(response.status)
      })
      .catch(error => console.log(error))
      .finally( setTodos(todos.filter(todo => todo.id !== id))); 
    }; 

    const updateTodo = (id) => {
      axios
      .put(`http://localhost:3001/tasks/${id}`, 
      { task: {
        description: description
      }},
      { withCredentials: true })
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
          <div style={{display: "flex", justifyContent: "center"}}>
            <div key={todo.id}>
              {todo.description}
            </div> 
            {
              todo.status
              ? <TagBadge text={todo.status}></TagBadge>
              : <div></div>
            }  
          </div> 
          <div className='icons'>
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
                  onClick={toggleModal}
                > Close Modal </button>
                <button 
                  type="button"
                  onClick={handleSubmit}
                > Save changes 
                </button> 
            </Modal>
            <RiCloseCircleLine
                onClick={() => deleteTodo(todo.id)}
                className='delete-icon'
            />
            </div>
        </div>
      </Fragment> 
    )
}

export default Todo;


