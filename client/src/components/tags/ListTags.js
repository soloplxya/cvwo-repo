import { config } from '../../Constants'
import { useNavigate } from 'react-router-dom'
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Tag from "./Tag"
import InputTag from "./InputTag";
import Command from "../filter/Command"

const ListTags = props => {
  const [tags, setTags] = useState([]);
  const navigate  = useNavigate()


  const getTags = () => {
  
    const token = localStorage.getItem('token')
    const url = config.url.API_TAGS_URL; 
    axios.get(
      url, 
      { withCredentials: true, headers: {Authorization: token} }
      ).then(response => {
      setTags(response.data.tags)
    }).catch(error => {
      console.log("tag retrieving error", error)
      navigate("/loginPage")
    })
  };

  
  useEffect(() => {
    getTags();
  }, []);
  

  return (
    <Fragment>
      <Command test={'/Dashboard'} name={'Dashboard'}/> 
      <InputTag {...props} tags={tags} setTags={setTags} />
        {tags.map((x,i) => {
            return <Tag key={i} tag={x} setTags={setTags} tags={tags}></Tag>
        })}
    </Fragment>
  );
};

export default ListTags;