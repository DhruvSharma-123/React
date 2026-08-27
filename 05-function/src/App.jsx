import React from 'react'

const App = () => {
function cli(){
  console.log("My nam eis Dhruv Sharma");
}

function scroll(elem){
  console.log(elem.deltaX);
}

  return (
    <div>
      <button onClick={cli}>  Har Har Mahadev</button>
      <input type="text" placeholder='"Enter Your Name is Here' onChange={(elem)=>{
        console.log(elem.target.value)
        button
      }} />
      <button onWheel={(elem)=>{
scroll(elem)
      }}>Submit</button>
    </div>
  )
}

export default App
