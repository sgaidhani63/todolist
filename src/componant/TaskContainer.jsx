import React from 'react'
import SingleTask from './SingleTask'

let arr = ["Wakup in Morning","Searching Jobs and Apply", "Do the preparation", "Riding", "GYM"]
const TaskContainer = ({task}) => {

arr.push(task)
  return (
    <div style={{ border: "5px solid blue", marginTop: "10px" }}>
      
      {arr.map(function(ele, index){  
        return  <SingleTask task={ ele} taskno={ index+1} />
      })}
      {/* <SingleTask task={arr[0]} taskno={"1 "} />
      <SingleTask task={arr[1]} taskno="2 " />
      <SingleTask task={arr[2]} taskno="3 " />
      <SingleTask task={arr[3]} taskno="4 " />
      <SingleTask task={arr[4]} taskno="5 " /> */}
    </div>
  )
}

export default TaskContainer
