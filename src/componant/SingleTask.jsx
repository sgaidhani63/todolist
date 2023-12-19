import React from 'react'

const SingleTask =({task, taskno}) => {
  // console.log(props);  
  // let task = props.task;
    return(
        <div style={{marginTop:"5px",textAlign:"center",
        border:"5px solid White",color:"white", fontSize:"24px"}}>
        {taskno}
        {task}
      </div>


    )

}
export default SingleTask