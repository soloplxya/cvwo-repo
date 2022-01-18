import { Fragment } from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { config } from '../../Constants'
import axios from 'axios'

const tagsURL = config.url.API_TAGS_URL;

const Tag = ({tag, setTags, tags}) => {

    const deleteTag = (id) => {
      axios
      .delete(`${tagsURL}/${id}`, { withCredentials: true })
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


