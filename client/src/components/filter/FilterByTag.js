import React, { Fragment } from "react";
import "../../App.css";


const FilterByTag = ({tags, todos, setPFilteredTodos, setFilterValue}) => {
    const setFilteredTodos = (filtered) => {
      setPFilteredTodos(filtered)
    }

    const handleChange = (value) => {
      const filteredData =  todos.filter(todo => todo.status === value)
      setFilterValue(value)
      setFilteredTodos(filteredData)
    }

    return (
        <Fragment>
            <div className="container">
              <select
                id="filterTagList"
                onChange={e => handleChange(e.target.value)}>
                 <option value="" disabled selected hidden>Choose Filter</option>
                 <option key="nil" value="none">NIL</option>
                { tags.map(tag => <option key={tag.id} value={tag.name}>{tag.name}</option> )}
              </select>
            </div>
      </Fragment>
    )
}

export default FilterByTag; 
