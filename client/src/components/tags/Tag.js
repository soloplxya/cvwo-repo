import { Fragment, useState } from "react";
import { TiDirections, TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';
import Modal from "react-modal"
import axios from 'axios'


const Tag = ({tag, setTags, tags}) => {

    const deleteTag = (id) => {
      axios
      .delete(`http://localhost:3001/tags/${id}`, { withCredentials: true })
      .then(response => {
        console.log(response.status)
      })
      .catch(error => console.log(error))
      .finally( setTags(tags.filter(tag => tag.id !== id))); 
    }; 
  

    return (
        <Fragment>
        <div className="todo-row"> 
          <div key={tag.id}>
            {tag.name}
          </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => deleteTag(tag.id)}
                    className='delete-icon'
                />
            </div>
        </div>
      </Fragment> 
    )
}

export default Tag;


