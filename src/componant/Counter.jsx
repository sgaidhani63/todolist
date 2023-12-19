import React, { useState } from 'react'

const Counter = () => {
    // let value = 1;
    const [value,setValue] = useState(1)
  return (
    <div style ={{color:"red"}}>
<h1>Counter </h1>
<p style ={{fontSize:"30px",marginLeft: "45px"}}>{value}</p>
   <button onClick={function(){ 
    setValue(value +1);
    console.log(value);
    console.log("Increment Value ");
   }}>Incremennt</button>

    <button onClick={function(){ 
    setValue(value -1);
    console.log(value);
    console.log("Decrement Value ")
   }}>Decrement</button> </div>
  )
}

export default Counter

//rafce