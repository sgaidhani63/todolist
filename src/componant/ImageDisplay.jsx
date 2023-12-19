import React from 'react'
import arr from '../data/images'

const ImageDisplay = () => {
  return (
    <div >
{/* image using Map function  */}
    {arr.map(function(ele) { 
     return <img src={ele} 
     style = {{width:"100px",
     height:"200px"}} alt="..."/>
     })}

 {/* Array  images display */}
{/* <img src={arr[0]} style={{width:"200px",height:"200px"}}alt = "....."/>
<img src={arr[1]} style={{width:"200px",height:"200px"}}alt = "....."/>
<img src={arr[2]} style={{width:"200px",height:"200px"}}alt = "....."/>
<img src={arr[3]} style={{width:"200px",height:"200px"}}alt = "....."/>
<img src={arr[4]} style={{width:"200px",height:"200px"}}alt = "....."/> */}

{/* w  images Path
<img src={Img1} style={{width:"200px",height:"200px"}}alt = "....."/>
<img src={Img2} style={{width:"200px",height:"200px"}}alt = "....."/>
<img src={Img3} style={{width:"200px",height:"200px"}}alt = "....."/>
<img src={Img4} style={{width:"200px",height:"200px"}}alt = "....."/>
<img src={Img5} style={{width:"200px",height:"200px"}}alt = "....."/> */}
    </div>
  )
}

export default ImageDisplay