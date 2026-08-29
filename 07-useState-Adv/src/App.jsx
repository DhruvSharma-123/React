// Destructive way of changing  in array

// import React, { useState } from 'react'

// const App = () => {
// const [num,SetNum]=useState([10,20,30])
// function newArray(){
//   const value=[...num];
// value.push(90);
// SetNum(value);
// }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={newArray}>Click</button>
//     </div>
//   )
// }

// export default App



//For obj
// import React, { useState } from 'react'
// const App = () => {
//   const [num,SetNum]=useState({user:"Dhruv Sharma",RollNo:18})
//   function change(){
  
//     SetNum(prev=>({...prev,RollNo:69}));
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.RollNo}</h1>
//       <button onClick={change}>Click me</button>
//     </div>
//   )
// }

// export default App;



//Batch Upadate 
// import React, { useState } from 'react'

// const App = () => {
//   const [num,SetNUM]=useState(0);
//   function Bupdate(){
// SetNUM(prev=>(prev+1));
// SetNUM(prev=>(prev+1));
// SetNUM(prev=>(prev+1));

//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={Bupdate}>Click Me</button>
//     </div>
//   )
// }

// export default App
