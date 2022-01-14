import React, { Fragment, useState } from "react";
import "../../App.css";


const FilterByTag = ({props, tags, todos, setTodos, setPFilteredTodos, filterValue, setFilterValue}) => {
    // pass in list of tags for the drop down 
    // pass in setState for todos 
    // pass in value for todos -> on change 
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
                 <option key="nil" value="nil">NIL</option>
                { tags.map(tag => <option key={tag.id} value={tag.name}>{tag.name}</option> )}
              </select>
            </div>
      </Fragment>
    )
}

export default FilterByTag; 
