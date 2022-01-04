import { Fragment, useState } from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import EditTodo from "./EditTodo";
import axios from 'axios'


const Todo = ({todo, setTodos, todos}) => {
    const [description, setDescription] = useState(todo.description);

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

    return (
        <Fragment>
        <div className="todo-row"> 
          <div key={todo.id}>
            {todo.description}
          </div>
            <div className='icons'>
                <EditTodo todo={todo}/> 
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


