import React from 'react'
import SingleTask from './SingleTask'
const TaskContainer = () => {
  return (
    <div style={{border:"5px solid blue", marginTop:"50px"}}>
      <SingleTask task="Wakup in Morning"/>
      <SingleTask task="Searching Jobs and Apply"/>
      <SingleTask task="Do the preparation"/>
      <SingleTask task="Riding"/>
    </div>
  )
}

export default TaskContainer
