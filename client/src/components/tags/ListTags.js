import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Tag from "./Tag"
import InputTag from "./InputTag";
import Command from "../filter/Command"

const ListTags = props => {
  const [tags, setTags] = useState([]);


  const getTags = () => {
    const url = "http://localhost:3001/tags"; 
    axios.get(
      url, 
      { withCredentials: true }
      ).then(response => {
      console.log(response.data)
      setTags(response.data.tags)
      // this.props.handleSuccessfulAuth(response.data);
    }).catch(error => {
      console.log("tag retrieving error", error)
    })
  };

  
  useEffect(() => {
    getTags();
  }, []);
  

  return (
    <Fragment>
      <Command test={'/Dashboard'} name={'Dashboard'}/> 
      <InputTag {...props} />
        {tags.map((x,i) => {
            return <Tag key={i} tag={x} setTags={setTags} tags={tags}></Tag>
        })}
    </Fragment>
  );
};

export default ListTags;