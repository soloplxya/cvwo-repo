import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  
  const onSubmitForm = async e => {
    // rewrite the function 
    /*
    try {
      const body = { description };
      const response = await fetch("/todoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    } 
    */ 
  };



  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <div id="todo-form-div">
      <form className="todo-form" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Add your todo here!"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;