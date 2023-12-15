import ImageDisplay from "./componant/ImageDisplay";
import TaskContainer from "./componant/TaskContainer";
import InputContainer from "./componant/inputeContainer";


function App(){
  let styleObj = {width:"400px",height:"500px", backgroundColor:"black"}

  return(  

    <div style={styleObj}>
      <h1> Meeting Room to discuss with clients </h1>
      <InputContainer/><br></br>
      <TaskContainer/>
      <img src ="https://img.gva.be/3ECGoNgK1T9XCe9kvXh2a76FFKg=/fit-in/1280x853/https%3A%2F%2Fstatic.gva.be%2FAssets%2FImages_Upload%2F2022%2F12%2F20%2F7c4a79e1-c5b5-458f-90e2-30db135f8e35.jpg" alt="sagar"/>
      <ImageDisplay/>
      
      </div>
      

      
      )
}
export default App;


