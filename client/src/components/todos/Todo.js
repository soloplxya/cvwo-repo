import { Fragment, useState } from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import EditTodo from "./EditTodo";


const Todo = ({todo, setTodos, todos}) => {
    console.log(todos)
  
    const [description, setDescription] = useState(todo.description);

    const deleteTodo = async id => {
      /* 
      try {
        const deleteTodo = await fetch(`/todoes/${id}`, {
            method: "DELETE"
        });
      } catch (err) {
          console.error(err.message);
      } finally {
          setTodos(todos.filter(todo => todo.todo_id !== id));
      }
      */ 
    }; 

    return (
        <Fragment>
        <div className="todo-row"> 
          <div key={todo.todo_id}>
            {todo.description}
          </div>
            <div className='icons'>
                <EditTodo todo={todo}/> 
                <RiCloseCircleLine
                    onClick={() => deleteTodo(todo.todo_id)}
                    className='delete-icon'
                />
              
            </div>
        </div>
      </Fragment> 
    )
}

export default Todo;


