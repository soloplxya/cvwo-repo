import React, { Fragment } from "react";
import "../../App.css";


const FilterByTag = ({tags}) => {
    // pass in list of tags for the drop down 
    // pass in setState for todos 
    // pass in value for todos -> on change 
    console.log(tags)
    return (
        <Fragment>
            <div className="container">
              <select
                id="filterTagList">
                { tags.map(tag => <option key={tag.id} value={tag.name}>{tag.name}</option> )}
              </select>
            </div>
      </Fragment>
    )
}

export default FilterByTag; 
