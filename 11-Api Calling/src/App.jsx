// import React from 'react'

// const App = () => {
//   //                                         *====Fetch API====*
//   async function api(){
//     const data=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // console.log(data);
// let response =await data.json();
// console.log(response);
//   }
//   return (
//     <div>
//       <button onClick={api}>Submit</button>
//     </div>
//   )
// }
// export default App
                                        //  *====axios====*
import React from 'react'
import axios from 'axios'
const App = () => {

const getdata=async ()=>{
const response=await axios.get("https://jsonplaceholder.typicode.com/todos/1");
console.log(response);
}


  return (
    <div>
      <button onClick={getdata}>Submit</button>
    </div>
  )
}


export default App